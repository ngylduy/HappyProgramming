package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "MentorSkill")
public class MentorSkill {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int mentorSkillID;

    @Column (name = "mentorID")
    private int mentorID;

    @Column (name = "skillID")
    private int skillID;

    @Column (name = "yearsOfExp")
    private int yearsOfExp;

    @Column (name = "description")
    private String description;
}