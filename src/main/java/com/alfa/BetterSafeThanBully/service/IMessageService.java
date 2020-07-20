package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Message;

import java.util.List;

public interface IMessageService {
    List<Message> findMessagesByTopicTitle(String title);
    List<Message> save(Message message);
}
