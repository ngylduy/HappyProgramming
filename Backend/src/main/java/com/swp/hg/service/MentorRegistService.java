package com.swp.hg.service;

import com.swp.hg.dto.MentorRegistDTO;

public interface MentorRegistService {
    void createMentorRegist(int userId);

    void updateMentorRegistStatus(MentorRegistDTO registDTO);

}
