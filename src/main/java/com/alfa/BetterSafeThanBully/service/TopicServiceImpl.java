package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Topic;
import com.alfa.BetterSafeThanBully.repository.ITopicRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicServiceImpl implements ITopicService {
    private final ITopicRepo topicRepo;

    public TopicServiceImpl(ITopicRepo topicRepo) {
        this.topicRepo = topicRepo;
    }

    @Override
    public List<Topic> findTopicByUsername(String username) {
        return topicRepo.findTopicByUsername(username);
    }

    @Override
    public List<Topic> save(Topic topic) {
        topicRepo.save(topic);
        return topicRepo.findTopicByUsername(topic.getUsername());
    }

    @Override
    public Optional<Topic> findTopicByTitle(String title) {
        return topicRepo.findById(title);
    }
}
