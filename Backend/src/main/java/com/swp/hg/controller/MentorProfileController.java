package com.swp.hg.controller;

import com.swp.hg.dto.MentorCVDTO;
import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.MentorRegistDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.service.Impl.MentorCVService;
import com.swp.hg.service.MentorProfileService;
import com.swp.hg.service.MentorRegistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/mentor")
@RequiredArgsConstructor
public class MentorProfileController {

    private final MentorProfileService mentorProfileService;
    private final MentorCVService mentorCVService;
    private final MentorProfileRepo mentorProfileRepo;
    private final MentorRegistService mentorRegistService;

    @GetMapping("/all")
    public ResponseEntity<List<MentorProfile>> getMentors() {
        return ResponseEntity.ok().body(mentorProfileService.getMentors());
    }

    @PostMapping("/searchmentor")
    public ResponseEntity<SearchResultDTO<MentorProfileDTO>> search(@RequestBody MentorProfileDTO mentorProfileDTO) {
        SearchResultDTO<MentorProfileDTO> list = mentorProfileService.search(mentorProfileDTO);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    //add mentor CV
    @PostMapping("/add/{userid}")
    public ResponseEntity<ApiResponse> addMentorCV(@PathVariable int userid, @RequestBody MentorCVDTO mentorCVDTO) {
        try {
            mentorCVService.addMentorCV(userid, mentorCVDTO);
            mentorRegistService.createMentorRegist(userid);
            ApiResponse response = new ApiResponse(true, "Mentor CV added successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            String errorMessage = "Failed to add Mentor CV: " + e.getMessage();
            ApiResponse response = new ApiResponse(false, errorMessage);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    @GetMapping("/{userid}")
    public ResponseEntity<MentorProfile> getMentorProfileByUserId(@PathVariable int userid ){
        return  ResponseEntity.ok().body(mentorProfileService.getById(userid));
    }


    //delete mentor CV
    @DeleteMapping("/delete/{userid}")
    public ResponseEntity<ApiResponse> deleteMentorCV(@PathVariable int userid) {
        try {
            mentorCVService.deleteMentorSkill(userid);
            mentorCVService.deleteMentorProfile(userid);
            return ResponseEntity.ok(new ApiResponse(true, "Mentor CV deleted successfully"));
        } catch (Exception e) {
            String errorMessage = "Failed to delete mentor CV";
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(false, errorMessage));
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
    public int totalMentor() {
        return mentorProfileRepo.totalMentor();
    }

    @PutMapping("/updateStatus")
    public ResponseEntity<?> updateMentorRegistStatus(@RequestBody MentorRegistDTO registDTO) {
        mentorRegistService.updateMentorRegistStatus(registDTO);
        return ResponseEntity.ok(new ApiResponse(true, "Mentor regist status updated successfully"));
    }

    @GetMapping("/skill/{id}")
    public ResponseEntity<List<MentorProfile>> getMentorsBySkillID(@PathVariable int id) {
        return ResponseEntity.ok().body(mentorProfileRepo.findMentorBySkillId(id));
    }

    @GetMapping("/listMentorRegist")
    public  ResponseEntity<?> getListMentorRegist(){
        return ResponseEntity.ok().body(mentorRegistService.getMentorRegistList());
    }

}