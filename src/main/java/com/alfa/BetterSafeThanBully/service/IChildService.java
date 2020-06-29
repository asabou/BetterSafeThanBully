package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Child;

import java.util.Optional;

public interface IChildService {
    void save(Child child);
    Optional<Child> findByUsername(String username);
}
