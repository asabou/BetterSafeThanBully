package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.Conversation;
import com.alfa.BetterSafeThanBully.domain.Message;
import com.alfa.BetterSafeThanBully.service.IConversationService;
import com.alfa.BetterSafeThanBully.service.IMessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/message")
public class MessageController {
    private final IConversationService conversationService;
    private final IMessageService messageService;
    public MessageController(IConversationService conversationService, IMessageService messageService) {
        this.conversationService = conversationService;
        this.messageService = messageService;
    }

    @PostMapping("/send")
    private ResponseEntity<?> saveMessage(@RequestBody Message message) {
        Optional<Conversation> conv = conversationService.findConversationByTitle(message.getConversation().getTitle());
        if (conv.isPresent()) {
            messageService.save(message);
            return new ResponseEntity<>("message saved!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("conversation not found!", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/get-by-conversation-title/{title}")
    private ResponseEntity<?> findMessagesByConversationTitle(@PathVariable("title") String title) {
        return new ResponseEntity<>(messageService.findMessagesByConversationTitle(title), HttpStatus.OK);
    }
}
