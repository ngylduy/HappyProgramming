package com.swp.hg.controller;

import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.service.SkillCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( "/skillcate"  )
public class SkillCategoryController {

    private final SkillCategoryService skillCategoryService;

    public SkillCategoryController(SkillCategoryService skillCategoryService) {
        this.skillCategoryService = skillCategoryService;
    }


    //get all skill
    @GetMapping("/getall")
    public ResponseEntity<List<SkillCategory>>getAll(){
        List<SkillCategory> list = skillCategoryService.getAllSkillCate();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    //find skill by id
    @PostMapping("/getbyid/{id}")
    public ResponseEntity<SkillCategory> getSkillByID(@PathVariable Integer id){
        SkillCategory skillCategory = skillCategoryService.getSKillById(id);
        return new ResponseEntity<>(skillCategory, HttpStatus.OK);
    }

    @PostMapping(value = "/add" )
    public ResponseEntity<SkillCategory> addSkill(@RequestBody SkillCategory skillCategory){
        SkillCategory skillCategory1 = skillCategoryService.addSkill(skillCategory);
        return new ResponseEntity<>(skillCategory1,HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<SkillCategory> updateSkill(@RequestBody SkillCategory skillCategory){
        SkillCategory skillCategory1 = skillCategoryService.addSkill(skillCategory);
        return new ResponseEntity<>(skillCategory1,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
     public boolean deleteSkill(@PathVariable("id") int id){
        return skillCategoryService.deleteSkill(id);
    }


}
