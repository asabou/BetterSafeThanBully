package com.alfa.BetterSafeThanBully.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@ToString
public class Topic {
    @Id
    private String title;
    private String username;
}
