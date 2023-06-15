package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SkilCategoryDTO {

    private Integer id;

    private String name;

    private Boolean status;

    public SkilCategoryDTO(Integer id, String name, Boolean status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
