package com.swp.hg.dto;

import lombok.Data;

@Data
public class RegistrationRequest {

    private String username;
    private String password;
    private String fullname;
    private String email;
    private String phone;
    private String address;

    public RegistrationRequest() {
    }

    public RegistrationRequest(String username, String password, String fullname, String email, String phone, String address) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
}