package com.swp.hg.service;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.response.RegisterMessage;
import org.springframework.stereotype.Service;

@Service
public interface RegisterService {
    RegisterMessage addUser(UserDTO userDTO);
}
