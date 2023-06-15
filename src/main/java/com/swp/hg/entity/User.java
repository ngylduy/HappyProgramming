package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.sql.Date;
import java.util.Collection;

@Data
@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    private String username;
    private String password;
    private String fullname;
    private boolean gender;
    private String phone;
    private String email;
    private Date dob;
    private String address;
    private boolean status;
    private int role;

    @OneToMany(mappedBy = "mentorRegist", cascade = CascadeType.ALL)
    private Collection<MentorRegist> mentorRegists;

    @OneToMany(mappedBy = "menteeRating", cascade = CascadeType.ALL)
    private Collection<Rating> ratings;

    @OneToMany(mappedBy = "mentorProfile", cascade = CascadeType.ALL)
    private Collection<MentorProfile> mentorProfiles;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private Collection<Request> requests;
}
