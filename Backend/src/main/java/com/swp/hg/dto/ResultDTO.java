package com.swp.hg.dto;

import com.swp.hg.entity.SkillCategory;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ResultDTO<T> {
    private boolean status;
    private T data;
    private String message;
}
