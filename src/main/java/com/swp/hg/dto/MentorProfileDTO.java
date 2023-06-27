package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MentorProfileDTO {

    private String avatar;
    private String fullname;
    private String introduction;
    private String git_hub;
    private Integer star;
    private String comment;
    private String description;
    private String skill_name;
    private Integer year_of_exp;

    private Integer currentPage;
    private Integer itemPerPage;
    private String keyword;



}
