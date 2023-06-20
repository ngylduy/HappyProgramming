package com.swp.hg.service.Impl;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.repository.MentorProfileRepository;
import com.swp.hg.service.MentorProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorProfileImpl implements MentorProfileService {

    @Autowired
    private MentorProfileRepository mentorProfileRepository;

    @Override
    public List<MentorProfile> getAll() {
        return null;
    }

    @Override
    public MentorProfile getById(int id) {
        return mentorProfileRepository.findById(id).orElse(null);
    }

    @Override
    public ResultDTO<MentorProfile> saveOrUpdate(SkillCategoryDTO skillCategoryDTO) {
        return null;
    }

    @Override
    public ResultDTO<MentorProfile> delete(int id) {
        return null;
    }
}
