package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "requestID")
    private int requestID;

    @Column (name = "mentorID")
    private int mentorID;

    @Column (name = "menteeID")
    private int menteeID;

    @Column (name = "date")
    private Date date;

    @Column (name = "status")
    private int status;

    @Column (name = "link")
    private String link;

    @Column (name = "title")
    private String title;

    @Column (name = "content")
    private String content;

    @Column (name = "mentorStatus")
    private int mentorStatus;

    @OneToMany(mappedBy = "request", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<RequestSkill> requestSkills;
}
