package com.alfa.BetterSafeThanBully.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@ToString
public class Conversation {
    @Id
    private String title;
    private String username;
}
