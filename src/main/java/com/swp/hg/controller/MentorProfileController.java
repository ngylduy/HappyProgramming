package com.swp.hg.controller;

import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.service.MentorProfileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/mentor", consumes={"application/json"})
public class MentorProfileController {

    private final MentorProfileService mentorProfileService;

    public MentorProfileController(MentorProfileService mentorProfileService) {
        this.mentorProfileService = mentorProfileService;
    }


    @PostMapping("/searchmentor")
    public ResponseEntity<SearchResultDTO<MentorProfileDTO>> search(@RequestBody MentorProfileDTO mentorProfileDTO){
        SearchResultDTO<MentorProfileDTO> list = mentorProfileService.search(mentorProfileDTO);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


}
