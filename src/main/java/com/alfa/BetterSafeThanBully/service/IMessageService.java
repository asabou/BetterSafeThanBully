package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Message;

import java.util.List;

public interface IMessageService {
    List<Message> findMessagesByConversationTitle(String title);
    void save(Message message);
}
