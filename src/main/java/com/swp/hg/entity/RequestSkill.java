package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @ManyToOne
    @JoinColumn(name = "requestID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonBackReference
    private Request request;

    @ManyToOne
    @JoinColumn(name = "skillID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonBackReference
    private SkillCategory skillCategory;
}
