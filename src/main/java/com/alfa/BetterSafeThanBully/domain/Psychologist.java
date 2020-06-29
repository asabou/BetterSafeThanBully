package com.alfa.BetterSafeThanBully.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@ToString
public class Psychologist {
    @Id
    private String username;
    private String password;
    private String firstName;
    private String lastName;
}
