package com.alfa.BetterSafeThanBully.repository;

import com.alfa.BetterSafeThanBully.domain.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IChildRepo extends JpaRepository<Child, String> {
}
