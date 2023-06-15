package com.swp.hg.service;

import com.swp.hg.entity.SkillCategory;

import java.util.List;

public interface SkillCategoryService {
    List<SkillCategory> getAll();
    SkillCategory getById(int id);
    void saveOrUpdate(SkillCategory skillCategory);
    void delete(int id);
}
