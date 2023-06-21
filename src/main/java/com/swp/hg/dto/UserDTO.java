package com.swp.hg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import java.sql.Date;

@Component
@Data
@NoArgsConstructor
public class UserDTO {
    private String username;
    private String password;
    private String fullname;
    private boolean gender;
    private String phone;
    private String email;
    private Date dob;
    private String address;
    private boolean status;
    private int role;

    public UserDTO(String johndoe, String johndoe123, String johnDoe, boolean b, String number, String mail, String s, String s1) {
    }
}
