package com.swp.hg.service;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.MentorProfile;

import java.util.List;

public interface MentorProfileService {
    List<MentorProfile> getAll();
    MentorProfile getById(int id);
    ResultDTO<MentorProfile> saveOrUpdate(SkillCategoryDTO skillCategoryDTO);
    ResultDTO<MentorProfile> delete(int id);
}
