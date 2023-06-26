package com.swp.hg.service.impl;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.RegisterMessage;
import com.swp.hg.service.RegisterService;
import org.springframework.context.annotation.Configuration;
import org.springframework.util.StringUtils;

@Configuration
public class RegisterIMPL implements RegisterService {
    private final UserRepository userRepository;

    public RegisterIMPL(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public RegisterMessage addUser(UserDTO userDTO) {
        String username = userDTO.getUsername();
        String email = userDTO.getEmail();
        String phone = userDTO.getPhone();
        String password = userDTO.getPassword();

        if (StringUtils.isEmpty(username)) {
            return new RegisterMessage("Register failed!, Because username is required!", false);
        }
        if (userRepository.findByUsername(username) != null) {
            return new RegisterMessage("Register failed!, Because username already exists", false);
        }
        if (StringUtils.isEmpty(password)) {
            return new RegisterMessage("Register failed!, Because password is required!", false);
        }
        if (StringUtils.isEmpty(email)) {
            return new RegisterMessage("Register failed!, Because email is required!", false);
        }
        if (userRepository.findByEmail(email) != null) {
            return new RegisterMessage("Register failed!, Because email already exists", false);
        }
        if (StringUtils.isEmpty(phone)) {
            return new RegisterMessage("Register failed!, Because phone is required!", false);
        }
        if (userRepository.findByPhone(phone) != null) {
            return new RegisterMessage("Register failed!, Because phone already exists", false);
        }

        User user = new User(
                username,
                password,
                userDTO.getFullname(),
                userDTO.isGender(),
                phone,
                email,
                userDTO.getDob(),
                userDTO.getAddress()
        );
        userRepository.save(user);
        return new RegisterMessage("Register successfully!", true);
    }

}
