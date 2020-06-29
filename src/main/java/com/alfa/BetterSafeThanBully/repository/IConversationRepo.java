package com.alfa.BetterSafeThanBully.repository;

import com.alfa.BetterSafeThanBully.domain.Conversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IConversationRepo extends JpaRepository<Conversation, String> {
    List<Conversation> findConversationByUsername(String username);
}
