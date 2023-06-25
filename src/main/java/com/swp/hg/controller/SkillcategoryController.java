package com.swp.hg.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skill")
public class SkillcategoryController {
    @GetMapping("/")
    public String test(){
        return "hehe";
    }
}
