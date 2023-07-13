package com.swp.hg.controller;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.service.SkillCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class SkillCategoryController {

    @Autowired
    private SkillCategoryService skillCategoryService;

    @GetMapping("/skill")
    public List<SkillCategory> getAll() {
        return skillCategoryService.getAll();
    }

    @GetMapping("/skill/{id}")
    public SkillCategory getById(@PathVariable int id) {
        return skillCategoryService.getById(id);
    }

    @PostMapping("/skill")
    public ResponseEntity<?> saveOrUpdate(@RequestBody SkillCategoryDTO skillCategoryDTO) {
        ResultDTO<SkillCategory> skillCategoryResultDTO = skillCategoryService.saveOrUpdate(skillCategoryDTO);
        return new ResponseEntity<ResultDTO<SkillCategory>>(skillCategoryResultDTO, HttpStatus.OK);
    }

    @PutMapping("/skill/{id}")
    public ResponseEntity<?> updateSkillCategory(@RequestBody SkillCategoryDTO skillCategoryDTO, @PathVariable int id) {
        skillCategoryDTO.setSkillID(id);
        ResultDTO<SkillCategory> skillCategoryResultDTO = skillCategoryService.saveOrUpdate(skillCategoryDTO);
        return new ResponseEntity<ResultDTO<SkillCategory>>(skillCategoryResultDTO, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        ResultDTO<SkillCategory> skillCategoryResultDTO = skillCategoryService.delete(id);
        return new ResponseEntity<ResultDTO<SkillCategory>>(skillCategoryResultDTO, HttpStatus.OK);
    }
}
