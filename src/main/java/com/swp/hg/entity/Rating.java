package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "Rating")
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rateID;
    private String comment;
    private int star;

    @ManyToOne
    @JoinColumn(name = "menteeID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private User menteeRating;

    @ManyToOne
    @JoinColumn(name = "mentorID")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private MentorProfile mentorProfile;
}
