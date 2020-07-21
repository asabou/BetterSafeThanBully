package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.Topic;
import com.alfa.BetterSafeThanBully.service.ITopicService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/api/topic")
public class TopicController {
    private final ITopicService topicService;

    public TopicController(ITopicService topicService) {
        this.topicService = topicService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> saveTopic(@RequestBody Topic topic) {
        return new ResponseEntity<>(topicService.save(topic), HttpStatus.OK);
    }

    @GetMapping("/get-by-username/{username}")
    private ResponseEntity<?> findTopicsByUsername(@PathVariable("username") String username) {
        return new ResponseEntity<>(topicService.findTopicByUsername(username), HttpStatus.OK);
    }

    @GetMapping("/get-by-title/{title}")
    private ResponseEntity<?> findTopicByTitle(@PathVariable("title") String title) {
        title = title.replace("$$"," ");
        return new ResponseEntity<>(topicService.findTopicByTitle(title), HttpStatus.OK);
    }

    @GetMapping("/all")
    private ResponseEntity<?> findAll() {
        return new ResponseEntity<>(topicService.findAll(), HttpStatus.OK);
    }

}
