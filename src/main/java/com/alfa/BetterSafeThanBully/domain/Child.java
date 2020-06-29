package com.alfa.BetterSafeThanBully.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import java.sql.Date;

@Entity
@Getter
@Setter
@ToString
public class Child {
    @Id
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    @Enumerated(value = EnumType.STRING)
    private Origin origin;
    private Date birthday;
}
