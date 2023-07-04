package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SearchResultDTO<T>{
    private boolean status;
    private List<T> data;
    private Integer totalRecord;
}
