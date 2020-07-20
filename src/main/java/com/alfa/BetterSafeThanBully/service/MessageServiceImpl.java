package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Message;
import com.alfa.BetterSafeThanBully.repository.IMessageRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImpl implements IMessageService {
    private final IMessageRepo messageRepo;

    public MessageServiceImpl(IMessageRepo messageRepo) {
        this.messageRepo = messageRepo;
    }

    @Override
    public List<Message> findMessagesByTopicTitle(String title) {
        return messageRepo.findMessagesByTopic_Title(title);
    }

    @Override
    public List<Message> save(Message message) {
        messageRepo.save(message);
        return messageRepo.findMessagesByTopic_Title(message.getTopic().getTitle());
    }
}
