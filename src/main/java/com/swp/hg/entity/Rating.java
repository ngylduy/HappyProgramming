package com.swp.hg.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

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
    @JsonBackReference
    private User menteeRating;

    @ManyToOne
    @JoinColumn(name = "mentorID")
    @JsonBackReference
    private MentorProfile mentorProfile;

    public Rating() {

    }

    public Rating(int rateID, String comment, int star, User menteeRating, MentorProfile mentorProfile) {
        this.rateID = rateID;
        this.comment = comment;
        this.star = star;
        this.menteeRating = menteeRating;
        this.mentorProfile = mentorProfile;
    }
}
