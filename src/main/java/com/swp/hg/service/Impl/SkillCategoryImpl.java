package com.swp.hg.service.Impl;

import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillCategoryRepository;
import com.swp.hg.service.SkillCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillCategoryImpl implements SkillCategoryService {

    @Autowired
    private SkillCategoryRepository skillCategoryRepository;

    @Override
    public List<SkillCategory> getAll() {
        return skillCategoryRepository.findAll();
    }

    @Override
    public SkillCategory getById(int id) {
        return skillCategoryRepository.findById(id).orElse(null);
    }

    @Override
    public void saveOrUpdate(SkillCategory skillCategory) {
        skillCategoryRepository.save(skillCategory);
    }

    @Override
    public void delete(int id) {
        skillCategoryRepository.deleteById(id);
    }
}
