package com.swp.hg.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingDTO {
    private int rateID;
    private String comment;
    private int star;
    private int menteeID;
    private int mentorID;
}
