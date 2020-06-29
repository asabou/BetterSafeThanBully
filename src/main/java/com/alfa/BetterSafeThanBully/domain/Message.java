package com.alfa.BetterSafeThanBully.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Setter
@Getter
@ToString
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageID;
    private String usernameSender; //username from login
    private String usernameReceiver;
    private String content;
    @ManyToOne(fetch = FetchType.LAZY)
    private Conversation conversation;
}
