package com.swp.hg.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ChangePassword implements Serializable {
    private String user_name;
    private String old_password;
    private String new_password;
}
