package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Psychologist;
import com.alfa.BetterSafeThanBully.repository.IPsychologistRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PsychologistServiceImpl implements IPsychologistService {
    private final IPsychologistRepo psychologistRepo;
    public PsychologistServiceImpl(IPsychologistRepo psychologistRepo) {
        this.psychologistRepo = psychologistRepo;
    }

    @Override
    public void save(Psychologist psychologist) {
        psychologistRepo.save(psychologist);
    }

    @Override
    public Optional<Psychologist> findByUsername(String username) {
        return psychologistRepo.findById(username);
    }

    @Override
    public List<Psychologist> findAll() {
        return psychologistRepo.findAll();
    }
}
