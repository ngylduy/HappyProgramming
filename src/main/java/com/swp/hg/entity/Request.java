package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.Collection;

@Entity
@Data
@NoArgsConstructor
@Table(name = "Request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "requestID")
    private int requestID;

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
    private Collection<RequestSkill> requestSkills;

    @ManyToOne
    @JoinColumn(name = "menteeID")
    @JsonBackReference
    private User users;

    @ManyToOne
    @JoinColumn(name = "mentorID")
    @JsonBackReference
    private MentorProfile mentorProfile;
}
