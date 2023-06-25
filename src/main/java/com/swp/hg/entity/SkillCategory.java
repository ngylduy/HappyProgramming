package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@Getter
@Setter
@Table(name = "SkillCategory")
public class SkillCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "skillID")
    private long skillID;

    @Column (name = "skillName")
    private String skillName;

    @Column (name = "status")
    private boolean status;

    @OneToMany(mappedBy = "skillCategory", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<RequestSkill> requestSkills;

    @OneToMany(mappedBy = "skillCategory", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<MentorSkill> mentorSkills;

}

