package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "MentorProfile")
public class MentorProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mentorID;

    @Column (name = "userID")
    private int userID;

    @Column (name = "avatar")
    private String avatar;

    @Column (name = "introduction")
    private String introduction;

    @Column (name = "LinkedIn")
    private String LinkedIn;

    @Column (name = "GitHub")
    private String GitHub;

    @Column (name = "Profession")
    private String Profession;

}