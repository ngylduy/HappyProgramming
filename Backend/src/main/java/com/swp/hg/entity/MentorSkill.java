package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "MentorSkill")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "mentorSkillID")
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
    @JsonBackReference
    private MentorProfile mentorProfile;

    @ManyToOne
    @JoinColumn(name = "skillID")
    @JsonBackReference
    private SkillCategory skillCategory;
}