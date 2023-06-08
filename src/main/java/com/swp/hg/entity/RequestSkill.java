package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@Table (name = "RequestSkill")
public class RequestSkill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "requestSkillID")
    private int requestSkillID;
    private int requestID;
    private int skillID;

    @ManyToOne
    @JoinColumn(name = "request_id")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Request request;

    @ManyToOne
    @JoinColumn(name = "skill_id")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private SkillCategory skillCategory;
}
