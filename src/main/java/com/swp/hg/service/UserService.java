package com.swp.hg.service;

import com.swp.hg.dto.LoginDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.response.RegisterMessage;
import org.springframework.context.annotation.Configuration;

@Configuration
public interface UserService {

    RegisterMessage addUser(UserDTO userDTO);

    LoginMessage loginUser(LoginDTO loginDTO);
}
