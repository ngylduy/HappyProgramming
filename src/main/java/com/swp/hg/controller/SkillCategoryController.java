package com.swp.hg.controller;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.service.SkillCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/add")
    public ResponseEntity<?> save(@RequestBody SkillCategoryDTO skillCategoryDTO) {
        ResultDTO<SkillCategory> skillCategoryResultDTO = skillCategoryService.saveOrUpdate(skillCategoryDTO);
        return new ResponseEntity<ResultDTO<SkillCategory>>(skillCategoryResultDTO, HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<?> Update(@RequestBody SkillCategoryDTO skillCategoryDTO) {
        ResultDTO<SkillCategory> skillCategoryResultDTO = skillCategoryService.saveOrUpdate(skillCategoryDTO);
        return new ResponseEntity<ResultDTO<SkillCategory>>(skillCategoryResultDTO, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        ResultDTO<SkillCategory> skillCategoryResultDTO = skillCategoryService.delete(id);
        return new ResponseEntity<ResultDTO<SkillCategory>>(skillCategoryResultDTO, HttpStatus.OK);
    }
}
