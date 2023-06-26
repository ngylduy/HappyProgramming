package com.swp.hg.service;

import com.swp.hg.dto.ChangePassDTO;
import com.swp.hg.response.ChangePassMessage;
import org.springframework.stereotype.Service;

@Service
public interface ChangPassService {
    ChangePassMessage changePass(ChangePassDTO changePassDTO);
}
