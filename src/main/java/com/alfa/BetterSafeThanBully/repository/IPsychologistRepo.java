package com.alfa.BetterSafeThanBully.repository;

import com.alfa.BetterSafeThanBully.domain.Psychologist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPsychologistRepo extends JpaRepository<Psychologist, String> {
}
