package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter

public class MentorCVDTO {

    //mentor profile
    private String avatar;
    private String introduction;
    private String linkedln;
    private String github;
    private String profession;
    //private int userid;

    //mentor skill
    private String description;
    private int yearOfExp;
    List<Integer> skillId ;

    private boolean status;
    //
}
