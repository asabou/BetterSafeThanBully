package com.alfa.BetterSafeThanBully.service;

import com.alfa.BetterSafeThanBully.domain.Psychologist;

import java.util.Optional;

public interface IPsychologistService {
    void save(Psychologist psychologist);
    Optional<Psychologist> findByUsername(String username);
}
