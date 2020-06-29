package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Conversation;
import com.alfa.BetterSafeThanBully.repository.IConversationRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ConversationServiceImpl implements IConversationService {
    private final IConversationRepo conversationRepo;

    public ConversationServiceImpl(IConversationRepo conversationRepo) {
        this.conversationRepo = conversationRepo;
    }

    @Override
    public List<Conversation> findConversationsByUsername(String username) {
        return conversationRepo.findConversationByUsername(username);
    }

    @Override
    public void save(Conversation conversation) {
        conversationRepo.save(conversation);
    }

    @Override
    public Optional<Conversation> findConversationByTitle(String title) {
        return conversationRepo.findById(title);
    }
}
