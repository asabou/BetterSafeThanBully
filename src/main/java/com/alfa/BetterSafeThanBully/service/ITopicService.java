package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Topic;

import java.util.List;
import java.util.Optional;

public interface ITopicService {
    List<Topic> findTopicByUsername(String username);
    List<Topic> save(Topic topic);
    Optional<Topic> findTopicByTitle(String title);
    List<Topic> findAll();
}
