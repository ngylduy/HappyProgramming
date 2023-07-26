package com.swp.hg.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingResponse {
    private int rateID;
    private String comment;
    private int star;
    private int menteeID;
    private int mentorID;
}
