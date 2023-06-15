package com.swp.hg.controller;

import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.service.SkillCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/skill")
public class SkillCategoryController {

    @Autowired
    private SkillCategoryService skillCategoryService;

    @GetMapping("")
    public List<SkillCategory> getAll() {
        return skillCategoryService.getAll();
    }

    @GetMapping("/{id}")
    public SkillCategory getById(@PathVariable int id) {
        return skillCategoryService.getById(id);
    }

    @PostMapping("")
    public void saveOrUpdate(@RequestBody SkillCategoryDTO skillCategoryDTO) {
        SkillCategory skillCategory;
        if (skillCategoryDTO.getSkillCategoryId() != 0) {
            skillCategory = skillCategoryService.getById(skillCategoryDTO.getSkillCategoryId());
            skillCategory.setSkillName(skillCategoryDTO.getSkillName());
            skillCategory.setStatus(skillCategoryDTO.isStatus());
        } else {
            skillCategory = new SkillCategory();
            skillCategory.setSkillName(skillCategoryDTO.getSkillName());
            skillCategory.setStatus(skillCategoryDTO.isStatus());
        }
        skillCategoryService.saveOrUpdate(skillCategory);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        skillCategoryService.delete(id);
    }
}
