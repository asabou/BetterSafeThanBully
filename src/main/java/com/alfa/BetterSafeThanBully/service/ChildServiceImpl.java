package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Child;
import com.alfa.BetterSafeThanBully.repository.IChildRepo;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChildServiceImpl implements IChildService {
    private final IChildRepo childRepo;

    public ChildServiceImpl(IChildRepo childRepo) {
        this.childRepo = childRepo;
    }

    @Override
    public void save(Child child) {
        childRepo.save(child);
    }

    @Override
    public Optional<Child> findByUsername(String username) {
        return childRepo.findById(username);
    }
}
