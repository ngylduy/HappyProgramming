package com.swp.hg.service;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.response.UpdateMenteeMessage;
import org.springframework.stereotype.Service;

@Service
public interface UpdateMenteeService {
    UpdateMenteeMessage updatepMentee(UserDTO userDTO, int id);
}
