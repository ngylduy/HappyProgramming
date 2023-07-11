package com.swp.hg.response;

import com.swp.hg.entity.RequestSkill;
import com.swp.hg.entity.User;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.util.Collection;

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
    private Collection<RequestSkill> requestSkills;

    // Constructors, getters, and setters
    // ...
}
