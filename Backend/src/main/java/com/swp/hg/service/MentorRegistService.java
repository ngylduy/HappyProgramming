package com.swp.hg.service;

import com.swp.hg.dto.MentorRegistDTO;
import com.swp.hg.entity.MentorRegist;

import java.util.List;

public interface MentorRegistService {
    void createMentorRegist(int userId);

    void updateMentorRegistStatus(MentorRegistDTO registDTO);

    List<MentorRegist> getMentorRegistList();

}
