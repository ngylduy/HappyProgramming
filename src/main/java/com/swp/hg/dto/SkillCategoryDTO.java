package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SkillCategoryDTO {

    private Integer id;

    private String name;

    private Boolean status;

    public SkillCategoryDTO(Integer id, String name, Boolean status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
