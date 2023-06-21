package com.swp.hg.service;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SkillCategoryService {
    List<SkillCategory> getAll();
    SkillCategory getById(int id);
    ResultDTO<SkillCategory> saveOrUpdate(SkillCategoryDTO skillCategoryDTO);
    ResultDTO<SkillCategory> delete(int id);
}
