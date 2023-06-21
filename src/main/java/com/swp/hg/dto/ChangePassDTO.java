package com.swp.hg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class ChangePassDTO {
    private String username;
    private String oldPassword;
    private String newPassword;
    private String confirmNewPassword;

    public ChangePassDTO(String username, String password) {
        this.username = username;
        this.oldPassword = password;
    }

    @Override
    public String toString() {
        return "ChangePassDTO{" +
                "username='" + username + '\'' +
                ", password='" + oldPassword + '\'' +
                ", newPassword='" + newPassword + '\'' +
                ", confirmNewPassword='" + confirmNewPassword + '\'' +
                '}';
    }
}
