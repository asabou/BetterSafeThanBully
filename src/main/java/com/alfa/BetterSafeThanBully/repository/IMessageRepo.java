package com.alfa.BetterSafeThanBully.repository;

import com.alfa.BetterSafeThanBully.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IMessageRepo extends JpaRepository<Message, Long> {
    List<Message> findMessageByConversation_Title(String title);
}
