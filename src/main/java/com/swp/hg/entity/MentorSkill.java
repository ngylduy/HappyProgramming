package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    @JsonBackReference
    private MentorProfile mentorProfile;


    @ManyToOne
    @JoinColumn(name = "skillID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonBackReference
    private SkillCategory skillCategory;
}