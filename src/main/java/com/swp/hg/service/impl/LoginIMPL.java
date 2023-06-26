package com.swp.hg.service.impl;

import com.swp.hg.dto.LoginDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.service.LoginService;
import org.springframework.context.annotation.Configuration;

import java.util.Optional;

@Configuration
public class LoginIMPL implements LoginService {

    private final UserRepository userRepository;

    public LoginIMPL(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public LoginMessage loginUser(LoginDTO loginDTO) {
        User userInfo = userRepository.findByUsername(loginDTO.getUsername());
        if (userInfo == null) {
            return new LoginMessage("User not exits", -1, false);
        }
        Optional<User> user = userRepository.findOneByUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
        if (!user.isPresent()) {
            return new LoginMessage("Password Not Match", -1, false);
        }
        return new LoginMessage("Login Success", userInfo.getId(), true);
    }
}
