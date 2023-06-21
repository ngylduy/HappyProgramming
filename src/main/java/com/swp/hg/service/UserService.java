package com.swp.hg.service;

import com.swp.hg.dto.ChangePassDTO;
import com.swp.hg.dto.LoginDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.response.ChangePassMessage;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.response.RegisterMessage;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    RegisterMessage addUser(UserDTO userDTO);

    LoginMessage loginUser(LoginDTO loginDTO);

    ChangePassMessage changePass(ChangePassDTO changePassDTO);
}
