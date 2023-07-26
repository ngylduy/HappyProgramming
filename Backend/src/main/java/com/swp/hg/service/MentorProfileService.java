package com.swp.hg.service;

import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.MentorProfile;

import java.util.List;

public interface MentorProfileService {
    SearchResultDTO<MentorProfileDTO> search(MentorProfileDTO mentorProfileDTO);
    List<MentorProfile> getMentors();
    List<MentorProfile> getActiveMentors();
    MentorProfile getById(int id);
    MentorProfile getByMentorID(int id);
}
