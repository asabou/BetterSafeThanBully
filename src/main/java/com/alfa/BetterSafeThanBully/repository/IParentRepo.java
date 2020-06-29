package com.alfa.BetterSafeThanBully.repository;

import com.alfa.BetterSafeThanBully.domain.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IParentRepo extends JpaRepository<Parent, String> {
}
