package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Parent;

import java.util.List;
import java.util.Optional;

public interface IParentService {
    void save(Parent parent);
    Optional<Parent> findByUsername(String username);
    List<Parent> findAll();
}
