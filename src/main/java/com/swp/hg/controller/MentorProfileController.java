package com.swp.hg.controller;

import com.swp.hg.dto.MentorCVDTO;
import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.service.MentorCVService;
import com.swp.hg.service.MentorProfileService;
import com.swp.hg.service.SkillCategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/mentor")
public class MentorProfileController {

    private final MentorProfileService mentorProfileService;

    private final MentorCVService mentorCVService;

    private final MentorProfileRepo mentorProfileRepo;



    public MentorProfileController(MentorProfileService mentorProfileService, MentorCVService mentorCVService, SkillCategoryService skillCategoryService, MentorProfileRepo mentorProfileRepo) {
        this.mentorProfileService = mentorProfileService;
        this.mentorCVService = mentorCVService;

        this.mentorProfileRepo = mentorProfileRepo;
    }


    @PostMapping("/searchmentor")
    public ResponseEntity<SearchResultDTO<MentorProfileDTO>> search(@RequestBody MentorProfileDTO mentorProfileDTO){
        SearchResultDTO<MentorProfileDTO> list = mentorProfileService.search(mentorProfileDTO);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    //add mentor CV
   @PostMapping("/add/{userid}")

   public ResponseEntity<ApiResponse> addMentorCV(@PathVariable int userid,@RequestBody MentorCVDTO mentorCVDTO) {
       try {
           mentorCVService.addMentorCV(userid, mentorCVDTO);
           ApiResponse response = new ApiResponse(true, "Mentor CV added successfully");
           return ResponseEntity.ok(response);
       } catch (Exception e) {
           String errorMessage = "Failed to add Mentor CV: " + e.getMessage();
           ApiResponse response = new ApiResponse(false, errorMessage);
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
       }
   }
   //delete mentor CV
   @DeleteMapping("/delete/{userid}")
    public ResponseEntity<ApiResponse> deleteMentorCV(@PathVariable int userid){
        try {
              mentorCVService.deleteMentorSkill(userid);
              mentorCVService.deleteMentorProfile(userid);
              return ResponseEntity.ok(new ApiResponse(true,"Mentor CV deleted successfully"));
        }catch(Exception e){
              String errorMessage = "Failed to delete mentor CV";
              return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(false, errorMessage));
        }
   }

   //update mentor CV
   @PutMapping("/update/{userId}")
       public ResponseEntity<?> updateMentorProfile(@PathVariable int userId, @RequestBody MentorCVDTO mentorCVDTO) {
           ResponseEntity<?> response;
           try {
               response = mentorCVService.updateMentorCV(userId, mentorCVDTO);
           } catch (Exception e) {
               String errorMessage = "Failed to update mentor profile: " + e.getMessage();
               response = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
           }
           return response;
       }


       @GetMapping("/total")
       public int totalMentor(){
          return mentorProfileRepo.totalMentor();
       }
   }





