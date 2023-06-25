package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "MentorRegist")
public class MentorRegist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int registID;

    @Column(name = "date")
    private Date date;

    @Column(name = "status")
    private int status;

    @ManyToOne
    @JoinColumn(name = "menteeID")
    @JsonBackReference
    private User mentorRegist;
}