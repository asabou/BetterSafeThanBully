package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Conversation;

import java.util.List;
import java.util.Optional;

public interface IConversationService {
    List<Conversation> findConversationsByUsername(String username);
    void save(Conversation conversation);
    Optional<Conversation> findConversationByTitle(String title);
}
