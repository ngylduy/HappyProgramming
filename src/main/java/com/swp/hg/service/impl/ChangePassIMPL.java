package com.swp.hg.service.impl;

import com.swp.hg.dto.ChangePassDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.ChangePassMessage;
import com.swp.hg.service.ChangPassService;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

@Configuration
public class ChangePassIMPL implements ChangPassService {

    private final UserRepository userRepository;

    public ChangePassIMPL(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public ChangePassMessage changePass(ChangePassDTO changePassDTO) {
        String username = changePassDTO.getUsername();
        String oldPassword = changePassDTO.getOldPassword();
        String newPassword = changePassDTO.getNewPassword();
        String comFirmPassword = changePassDTO.getConfirmNewPassword();

        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new ChangePassMessage("Username not found.", false);
        }
        if (!user.getPassword().matches(oldPassword)) {
            return new ChangePassMessage("Incorrect old password.", false);
        }

        if (StringUtils.isEmpty(newPassword)){
            return new ChangePassMessage("New password cannot be blank.", false);
        }

        if (newPassword.trim().isEmpty()) {
            return new ChangePassMessage("New password cannot be composed of whitespace characters only.", false);
        }

        if (!newPassword.matches(comFirmPassword)) {
            return new ChangePassMessage("New password and confirm password do not match.", false);
        }

        if (oldPassword.matches(newPassword)) {
            return new ChangePassMessage("New password must be different from the old password.", false);
        }

        user.setPassword(newPassword);
        userRepository.save(user);

        return new ChangePassMessage("Password changed successfully.", true);
    }

}
