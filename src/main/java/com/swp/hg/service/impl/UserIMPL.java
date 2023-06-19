package com.swp.hg.service.impl;

import com.swp.hg.config.RoleConfig;
import com.swp.hg.dto.LoginDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.response.RegisterMessage;
import com.swp.hg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public RegisterMessage addUser(UserDTO userDTO) {
        User user = new User(
                userDTO.getUsername(),
                userDTO.getPassword(),
                userDTO.getFullname(),
                userDTO.isGender(),
                userDTO.getPhone(),
                userDTO.getEmail(),
                userDTO.getDob(),
                userDTO.getAddress()
        );
        userRepository.save(user);
        return new RegisterMessage("Register successfully!");
    }

    @Override
    public LoginMessage loginUser(LoginDTO loginDTO) {
        User user1 = userRepository.findByUsername(loginDTO.getUsername());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            Boolean isRight = password.matches(loginDTO.getPassword());
            if (isRight) {
                Optional<User> user = userRepository.findOneByUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
                if (user.isPresent()) {
                    return new LoginMessage("Login Success",  user1.getId());
                } else {
                    return new LoginMessage("Login Failed",  -1);
                }
            } else {
                return new LoginMessage("Password Not Match",  -1);
            }
        }else {
            return new LoginMessage("Username not exits",  -1);
        }
    }
}





