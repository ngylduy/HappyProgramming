package com.swp.hg.service;

import com.swp.hg.entity.SkillCategory;

import java.util.List;

public interface ISkillcategory {
    public SkillCategory addCategory(SkillCategory skillCategory);


    public SkillCategory updateCategory(long id,SkillCategory skillCategory);
    public boolean deleteSkillcategory(long id);
    public List<SkillCategory> getAllSkillCategory();
    public SkillCategory getSkillCategory(long id);
}
