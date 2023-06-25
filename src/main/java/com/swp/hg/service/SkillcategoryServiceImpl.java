package com.swp.hg.service;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class SkillcategoryServiceImpl implements ISkillcategory{

    @Autowired
    private SkillcategoryRepository skillcategoryRepository;
    @Override
    public SkillCategory addCategory(SkillCategory skillCategory) {
        if(skillCategory!=null){
            return skillcategoryRepository.save(skillCategory);
        }
        return null;
    }

    @Override
    public SkillCategory updateCategory(long id, SkillCategory skillCategory) {
        if(skillCategory!=null){
            SkillCategory skillCategory1 = skillcategoryRepository.getById(id);
            if(skillCategory1!=null){
                skillCategory1.setSkillName(skillCategory.getSkillName());
                return skillcategoryRepository.save(skillCategory1);
            }

        }
        return null;
    }

    @Override
    public boolean deleteSkillcategory(long id) {
        if(id>=1){
            SkillCategory skillCategory=skillcategoryRepository.getById(id);
            if(skillCategory!=null){
                skillcategoryRepository.delete( skillCategory);
                return true;
            }

        }
        return false;
    }

    @Override
    public List<SkillCategory> getAllSkillCategory() {

        return skillcategoryRepository.findAll();
    }

    @Override
    public SkillCategory getSkillCategory(long id) {
        return skillcategoryRepository.getById(id);
    }
}
