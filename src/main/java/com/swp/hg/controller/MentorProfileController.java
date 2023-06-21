package com.swp.hg.controller;

import com.swp.hg.dto.MentorCVDTO;
import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.service.MentorCVService;
import com.swp.hg.service.MentorProfileService;
import com.swp.hg.service.SkillCategoryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/mentor")
public class MentorProfileController {

    private final MentorProfileService mentorProfileService;

    private final MentorCVService mentorCVService;



    public MentorProfileController(MentorProfileService mentorProfileService, MentorCVService mentorCVService, SkillCategoryService skillCategoryService) {
        this.mentorProfileService = mentorProfileService;
        this.mentorCVService = mentorCVService;

    }


    @PostMapping("/searchmentor")
    public ResponseEntity<SearchResultDTO<MentorProfileDTO>> search(@RequestBody MentorProfileDTO mentorProfileDTO){
        SearchResultDTO<MentorProfileDTO> list = mentorProfileService.search(mentorProfileDTO);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

   @PostMapping("/add")

   public ResponseEntity<ApiResponse> addMentorCV(@RequestBody MentorCVDTO mentorCVDTO) {
       try {
           mentorCVService.addMentorCV(mentorCVDTO);
           ApiResponse response = new ApiResponse(true, "Mentor CV added successfully");
           return ResponseEntity.ok(response);
       } catch (Exception e) {
           String errorMessage = "Failed to add Mentor CV: " + e.getMessage();
           ApiResponse response = new ApiResponse(false, errorMessage);
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
       }
   }




}
