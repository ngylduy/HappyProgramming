package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table (name = "RequestSkill")
public class RequestSkill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "requestSkillID")
    private int requestSkillID;

    @ManyToOne
    @JoinColumn(name = "requestID")
    @JsonBackReference
    private Request request;

    @ManyToOne
    @JoinColumn(name = "skillID")
    @JsonBackReference
    private SkillCategory skillCategory;
}
