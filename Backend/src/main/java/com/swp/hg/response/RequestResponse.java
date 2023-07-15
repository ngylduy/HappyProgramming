package com.swp.hg.response;

import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
public class RequestResponse {
    private int requestId;
    private Date date;
    private int status;
    private String link;
    private String title;
    private String content;
    private int mentorStatus;
    private Integer menteeId; // Use Integer to allow null value
    private Integer mentorId; // Use Integer to allow null value

    // Constructors, getters, and setters
    // ...
}