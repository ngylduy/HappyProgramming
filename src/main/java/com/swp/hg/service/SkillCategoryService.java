package com.swp.hg.service;

import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillCategoryService {

    private final SkillCategoryRepository skillCategoryRepository;


    public SkillCategoryService(SkillCategoryRepository skillCategoryRepository) {
        this.skillCategoryRepository = skillCategoryRepository;
    }

    //get all skill category
    public List<SkillCategory>getAllSkillCate(){
        try{
            List<SkillCategory> list = skillCategoryRepository.findAll();
            return list;
        }catch (Exception e){
            return null;
        }
    }


    //get skill by id
    public SkillCategory getSKillById(Integer id){
        try{
            SkillCategory skillCategory = skillCategoryRepository.findBySkillID(id).get();
            return skillCategory;
        }catch (Exception e){
            System.out.println("The skill with id "+id+" is not exist");
            return null;
        }
    }


    //add and update new skill
//    public SkillCategoryDTO addSkill(SkillCategory skillCategory){
//        try{
//            SkillCategory skillCategory1 = skillCategoryRepository.save(skillCategory);
//            SkillCategoryDTO skillCategoryDTO = new SkillCategoryDTO(skillCategory1.getSkillID(), skillCategory1.getSkillName(),true);
//            return skillCategoryDTO;
//        }catch (Exception e){
//            SkillCategoryDTO skillCategoryDTO = new SkillCategoryDTO(skillCategory.getSkillID(), skillCategory.getSkillName(),false);
//            return skillCategoryDTO;
//        }
//    }
    public SkillCategory addSkill(SkillCategory skillCategory){
        try{
            SkillCategory skillCategory1 = skillCategoryRepository.save(skillCategory);

            return skillCategory1;
        }catch (Exception e){

            return skillCategory;
        }
    }


    //delete skill
//    public boolean deleteSkill(Integer id){
//        try {
//            SkillCategory skillCategory = skillCategoryRepository.findBySkillID(id).get();
//            if(skillCategory==null){
//                return false;
//            }
//            skillCategoryRepository.deleteBySkillID(id);
//            return true;
//        }catch (Exception e){
//            return false;
//        }
//    }

    public boolean deleteSkill(int id){
        try{
            SkillCategory skillCategory = skillCategoryRepository.findBySkillID(id).get();
            if(skillCategory==null){
                return false;
            }
            skillCategoryRepository.delete(skillCategory);
            return true;
        }catch (Exception e){
            return false;
        }
    }




}
