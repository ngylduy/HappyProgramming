package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;
import java.util.Collection;

@Entity
@Getter
@Setter
@Table(name = "SkillCategory")
public class SkillCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "skillID")
    private int skillID;

    @Column (name = "skillName")
    private String skillName;

    @Column (name = "status")
    @Getter
    private boolean status;

    @OneToMany(mappedBy = "skillCategory", cascade = CascadeType.ALL)
    private Collection<RequestSkill> requestSkills;

    @OneToMany(mappedBy = "skillCategory", cascade = CascadeType.ALL)
    private Collection<MentorSkill> mentorSkills;
}

