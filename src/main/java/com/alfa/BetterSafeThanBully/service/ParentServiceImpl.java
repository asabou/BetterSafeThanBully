package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Parent;
import com.alfa.BetterSafeThanBully.repository.IParentRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParentServiceImpl implements IParentService {
    private final IParentRepo parentRepo;

    public ParentServiceImpl(IParentRepo parentRepo) {
        this.parentRepo = parentRepo;
    }

    @Override
    public void save(Parent parent) {
        this.parentRepo.save(parent);
    }

    @Override
    public Optional<Parent> findByUsername(String username) {
        return parentRepo.findById(username);
    }

    @Override
    public List<Parent> findAll() {
        return parentRepo.findAll();
    }
}
