package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Collection;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "MentorProfile")
public class MentorProfile {

//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int mentorID;
//
//    @Column (name = "avatar")
//    private String avatar;
//
//    @Column (name = "introduction")
//    private String introduction;
//
//    @Column (name = "LinkedIn")
//    private String LinkedIn;
//
//    @Column (name = "GitHub")
//    private String GitHub;
//
//    @Column (name = "Profession")
//    private String Profession;
//
//    @OneToOne
//    @JoinColumn(name = "userID")
//    @JsonBackReference
//    private User mentorProfile;
//
//    @OneToMany(mappedBy = "mentorProfile", cascade = CascadeType.ALL)
//    @JsonManagedReference
//    private Collection<Rating> ratings;
//
//    @OneToMany(mappedBy = "mentorProfile", cascade = CascadeType.ALL)
//    @JsonBackReference
//    private Collection<MentorSkill> mentorSkills;
//
//    @OneToMany(mappedBy = "mentorProfile", cascade = CascadeType.ALL)
//    @JsonBackReference
//    private Collection<Request> requests;
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int mentorID;

    @Column (name = "avatar")
    private String avatar;

    @Column (name = "introduction")
    private String introduction;

    @Column (name = "LinkedIn")
    private String linkedIn;

    @Column (name = "GitHub")
    private String gitHub;

    @Column (name = "Profession")
    private String profession;

    @OneToOne
    @JoinColumn(name = "userID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
//    @JsonBackReference
    private User mentorProfile;

    @OneToMany(mappedBy = "mentorProfile", fetch=FetchType.EAGER)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonManagedReference
    private Collection<Rating> ratings;

    @OneToMany(mappedBy = "mentorProfile", fetch=FetchType.EAGER)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonManagedReference
    private Collection<MentorSkill> mentorSkills;

    @OneToMany(mappedBy = "mentorProfile", fetch=FetchType.EAGER)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonManagedReference
    private Collection<Request> requests;
}