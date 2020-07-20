package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.*;
import com.alfa.BetterSafeThanBully.service.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/message")
public class MessageController {
    private final ITopicService topicService;
    private final IMessageService messageService;
    private final IChildService childService;
    private final IParentService parentService;
    private final IPsychologistService psychologistService;

    public MessageController(ITopicService topicService, IMessageService messageService,
                             IChildService childService, IParentService parentService,
                             IPsychologistService psychologistService) {
        this.messageService = messageService;
        this.topicService = topicService;
        this.psychologistService = psychologistService;
        this.parentService = parentService;
        this.childService = childService;
    }

    @PostMapping("/send")
    private ResponseEntity<?> saveMessage(@RequestBody Message message) {
        Optional<Topic> topic = topicService.findTopicByTitle(message.getTopic().getTitle());
        if (topic.isPresent()) {
            System.out.println("present");
            return new ResponseEntity<>(messageService.save(message), HttpStatus.OK);
        } else {
            System.out.println("not present");
            return new ResponseEntity<>("topic not found!", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/create-and-send")
    private ResponseEntity<?> createAndSend(@RequestBody Message message) {
        Optional<Topic> topic = topicService.findTopicByTitle(message.getTopic().getTitle());
        if (topic.isPresent()) {
            return new ResponseEntity<>("This topic already exists!", HttpStatus.CONFLICT);
        } else {
            topicService.save(message.getTopic());
            return new ResponseEntity<>(messageService.save(message), HttpStatus.OK);
        }
    }

    @GetMapping("/get-by-topic-title/{title}")
    private ResponseEntity<?> findMessagesByTopicTitle(@PathVariable("title") String title) {
        title = title.replace("$$"," ");
        return new ResponseEntity<>(messageService.findMessagesByTopicTitle(title), HttpStatus.OK);
    }

    @GetMapping("/get-full-name-for-sender/{sender}")
    private ResponseEntity<?> findFullNameForSender(@PathVariable("sender") String sender) {
        Optional<Child> childOpt = childService.findByUsername(sender);
        Optional<Parent> parentOpt = parentService.findByUsername(sender);
        Optional<Psychologist> psyOpt = psychologistService.findByUsername(sender);
        if (childOpt.isPresent()) {
            return new ResponseEntity<>(childOpt.get(), HttpStatus.OK);
        }
        if (parentOpt.isPresent()) {
            return new ResponseEntity<>(parentOpt.get(), HttpStatus.OK);
        }
        if (psyOpt.isPresent()) {
            return new ResponseEntity<>(psyOpt.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>("Not found!", HttpStatus.NOT_FOUND);
    }
}
