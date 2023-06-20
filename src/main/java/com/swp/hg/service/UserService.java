package com.swp.hg.service;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.entity.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    User getById(int id);
    ResultDTO<User> saveOrUpdate(SkillCategoryDTO skillCategoryDTO);
    ResultDTO<User> delete(int id);
}
