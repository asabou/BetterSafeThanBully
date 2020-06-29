package com.alfa.BetterSafeThanBully.controller;

import com.alfa.BetterSafeThanBully.domain.Conversation;
import com.alfa.BetterSafeThanBully.service.IConversationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/conversation")
public class ConversationController {
    private final IConversationService conversationService;
    public ConversationController(IConversationService conversationService) {
        this.conversationService = conversationService;
    }

    @PostMapping("/create")
    private ResponseEntity<?> saveConversation(@RequestBody Conversation conversation) {
        if (!conversationService.findConversationByTitle(conversation.getTitle()).isPresent()) {
            conversationService.save(conversation);
            return new ResponseEntity<>("conversation saved!", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("already exists!", HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/get-by-username/{username}")
    private ResponseEntity<?> findConversationsByUsername(@PathVariable("username") String username) {
        return new ResponseEntity<>(conversationService.findConversationsByUsername(username), HttpStatus.OK);
    }

}
