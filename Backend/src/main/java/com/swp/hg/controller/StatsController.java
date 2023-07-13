package com.swp.hg.controller;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.dto.StatsDTO;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.service.Impl.RequestService;
import com.swp.hg.service.SkillCategoryService;
import com.swp.hg.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stats")
@RequiredArgsConstructor
public class StatsController {

    private final SkillCategoryService skillCategoryService;
    private final UserService userService;
    private final RequestService requestService;

    @GetMapping
    public ResponseEntity<?> stats() {
        StatsDTO statsDTO = new StatsDTO();
        statsDTO.setTotalSkills(skillCategoryService.getTotalSkills());
        statsDTO.setTotalActiveSkills(skillCategoryService.getTotalSkillByStatus(true));
        statsDTO.setTotalActiveUsers(userService.getTotalUserByStatus(true));
        statsDTO.setTotalMentor(userService.getListUserByRole("USER_MENTOR").size());
        statsDTO.setTotalMentee(userService.getListUserByRole("USER_MENTEE").size());
        statsDTO.setTotalRequest(requestService.getALlRequest().size());
        statsDTO.setTotalDeniedRequest(requestService.getCountRequestByStatus(2));
        statsDTO.setTotalPendingRequest(requestService.getCountRequestByStatus(1));
        statsDTO.setTotalProgressRequest(requestService.getCountRequestByStatus(0));
        statsDTO.setTotalFinishedRequest(requestService.getCountRequestByStatus(3));
        return new ResponseEntity<>(statsDTO, HttpStatus.OK);
    }

}