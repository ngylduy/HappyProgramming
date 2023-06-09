package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "MentorSkill")
public class MentorSkill {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int mentorSkillID;

    @Column (name = "yearsOfExp")
    private int yearsOfExp;

    @Column (name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "mentorID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private MentorProfile mentorProfile;

    @ManyToOne
    @JoinColumn(name = "skillID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private SkillCategory skillCategory;
}