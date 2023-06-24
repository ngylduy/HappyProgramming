package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Getter
@Setter
@Table(name = "Request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "requestID")
    private int requestID;

    @Column (name = "date")
    @JsonFormat(pattern="dd-MM-yyyy")
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


    @ManyToOne
    @JoinColumn(name = "menteeID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonBackReference
    private User users;

    @ManyToOne
    @JoinColumn(name = "mentorID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonBackReference
    private MentorProfile mentorProfile;

    public void setId(long l) {
    }
}
