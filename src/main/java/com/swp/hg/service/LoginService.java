package com.swp.hg.service;

import com.swp.hg.dto.LoginDTO;
import com.swp.hg.response.LoginMessage;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {
    LoginMessage loginUser(LoginDTO loginDTO);
}
