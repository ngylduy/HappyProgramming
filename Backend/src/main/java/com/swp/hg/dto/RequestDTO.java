package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RequestDTO {

    //request
    private String content;
//    @JsonFormat(pattern="dd-MM-yyyy")
//    private Date date;
    private String link;
    private int mentorId;
//    private int mentorStatus;
//    private int status;
    private String title;

    //request_skill
    List<Integer> skillId ;





}
