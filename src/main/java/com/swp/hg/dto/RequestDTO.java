package com.swp.hg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.List;

@NoArgsConstructor
@Data
public class RequestDTO {
    private String title;
    private String content;
    private Date date;
    private List<Integer> listSkillId;
}
