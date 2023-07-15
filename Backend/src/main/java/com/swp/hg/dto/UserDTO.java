package com.swp.hg.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class UserDTO {
    private String username;
    private String password;
    private String fullname;
    private boolean gender;
    private Date dob;
    private String email;
    private String phone;
    private String address;
    private int id;
}
