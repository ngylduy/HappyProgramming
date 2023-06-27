package com.swp.hg.service.Impl;

import com.swp.hg.dto.MentorCVDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.MentorSkill;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.entity.User;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.repository.MentorSkillRepository;
import com.swp.hg.repository.SkillCategoryRepository;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.ApiResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MentorCVService {

    private final MentorProfileRepo mentorProfileRepo;
    private final MentorSkillRepository mentorSkillRepository;
    private final UserRepository userRepository;
    private final SkillCategoryRepository skillCategoryRepository;

    public ResponseEntity<?> addMentorCV(int userID, MentorCVDTO mentorCVDTO) {
        try {
            MentorProfile mentorProfile = new MentorProfile();
            mentorProfile.setAvatar(mentorCVDTO.getAvatar());
            mentorProfile.setIntroduction(mentorCVDTO.getIntroduction());
            mentorProfile.setLinkedIn(mentorCVDTO.getLinkedln());
            mentorProfile.setGitHub(mentorCVDTO.getGithub());
            mentorProfile.setProfession(mentorCVDTO.getProfession());
            User user = userRepository.findById(userID).orElse(null);
            mentorProfile.setMentorProfile(user);

            // Save the mentor profile
            mentorProfileRepo.save(mentorProfile);

            // Save the mentor skills
            for (Integer skillId : mentorCVDTO.getSkillId()) {
                MentorSkill mentorSkill = new MentorSkill();
                mentorSkill.setDescription(mentorCVDTO.getDescription());
                mentorSkill.setMentorProfile(mentorProfile);
                SkillCategory skillCategory = skillCategoryRepository.findById(skillId).orElse(null);
                mentorSkill.setSkillCategory(skillCategory);

                try {
                    int yearOfExp = mentorCVDTO.getYearOfExp();
                    if (yearOfExp <= 0) {
                        return ResponseEntity.badRequest().body(new ApiResponse(false, "Invalid input", Collections.singletonList("Invalid value for yearsOfExp")));
                    }
                    mentorSkill.setYearsOfExp(yearOfExp);

                } catch (NumberFormatException e) {
                    // Handle invalid type input for yearsOfExp
                    // For example, you can log the error and add an error message to a list
                    List<String> errors = new ArrayList<>();
                    errors.add("Invalid type input for yearsOfExp");
                    // Return the error response
                    return ResponseEntity.badRequest().body(new ApiResponse(false, "Invalid input", errors));
                }

                mentorSkillRepository.save(mentorSkill);
            }

            return ResponseEntity.ok("Mentor CV added successfully"); // Return success message with HTTP 200 status
        } catch (Exception e) {
            String errorMessage = "Failed to add Mentor CV: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }


//    public ApiResponse addMentorCV(int userID, MentorCVDTO mentorCVDTO) {
//
//
//        try {
//            MentorProfile mentorProfile = new MentorProfile();
//            mentorProfile.setAvatar(mentorCVDTO.getAvatar());
//            mentorProfile.setIntroduction(mentorCVDTO.getIntroduction());
//            mentorProfile.setLinkedIn(mentorCVDTO.getLinkedln());
//            mentorProfile.setGitHub(mentorCVDTO.getGithub());
//            mentorProfile.setProfession(mentorCVDTO.getProfession());
//            User user = userRepository.findById(userID).orElse(null);
//            mentorProfile.setMentorProfile(user);
//
//            // Save the mentor profile
//
//
//            // Save the mentor skills
//            for (Integer skillId : mentorCVDTO.getSkillId()) {
//                MentorSkill mentorSkill = new MentorSkill();
//                mentorSkill.setDescription(mentorCVDTO.getDescription());
//                mentorSkill.setMentorProfile(mentorProfile);
//                SkillCategory skillCategory = skillCategoryRepository.findById(skillId).orElse(null);
//                mentorSkill.setSkillCategory(skillCategory);
//
//
//                ObjectMapper objectMapper = new ObjectMapper();
//
//                try {
//                    int yearOfExp = objectMapper.readValue(mentorCVDTO.getYearOfExp(), int.class);
//                    if (yearOfExp <= 0) {
//                        return new ApiResponse(false, "Wrong years of experience");
//                    }
//                    mentorSkill.setYearsOfExp(yearOfExp);
//                } catch (InvalidFormatException e) {
//                    return new ApiResponse(false, "Wrong format of years of experience");
//                }
//
//                mentorSkillRepository.save(mentorSkill);
//            }
//
//            mentorProfileRepo.save(mentorProfile);
//            return new ApiResponse(true,"Add mentor cv successfully");
//
//        } catch (Exception e) {
//            return new ApiResponse(false,"Failed to add mentor cv");
//        }
//    }






    //delete mentorCV by mentorID
           public void deleteMentorSkill(int userid){
               MentorProfile mentorProfile = mentorProfileRepo.findMentorProfilesByUserID(userid);
              if(mentorProfile!=null){
                  Collection<MentorSkill> mentorSkills = mentorProfile.getMentorSkills();
                  for (MentorSkill mentorSkill:mentorSkills) {
                      mentorSkillRepository.delete(mentorSkill);
                  }
              }
           }

           public void deleteMentorProfile(int userid){
              MentorProfile mentorProfile = mentorProfileRepo.findMentorProfilesByUserID(userid);
               mentorProfileRepo.delete(mentorProfile);
           }

      //update mentor CV by userID
      @Transactional
      public ResponseEntity<?> updateMentorCV(int userID, MentorCVDTO mentorCVDTO){

        try {
            // Retrieve the existing MentorProfile by ID
            MentorProfile mentorProfile = mentorProfileRepo.findMentorProfilesByUserID(userID);
            if (mentorProfile == null) {
                // Return an error response if MentorProfile is not found
                return new ResponseEntity<>(new ApiResponse(false, "Mentor profile not found"), HttpStatus.NOT_FOUND);
            }

            // Update the MentorProfile fields

            mentorProfile.setAvatar(mentorCVDTO.getAvatar());
            mentorProfile.setIntroduction(mentorCVDTO.getIntroduction());
            mentorProfile.setLinkedIn(mentorCVDTO.getLinkedln());
            mentorProfile.setGitHub(mentorCVDTO.getGithub());
            mentorProfile.setProfession(mentorCVDTO.getProfession());
            User user = userRepository.findById(userID).orElse(null);
            mentorProfile.setMentorProfile(user);

            // Save the updated mentor profile
            mentorProfileRepo.save(mentorProfile);

            // Delete existing mentor skills for the mentor profile
            mentorSkillRepository.deleteByMentorProfile(mentorProfile);

            // Save the updated mentor skills
            for (Integer skillId : mentorCVDTO.getSkillId()) {
                MentorSkill mentorSkill = new MentorSkill();
                mentorSkill.setDescription(mentorCVDTO.getDescription());
                mentorSkill.setMentorProfile(mentorProfile);
                SkillCategory skillCategory = skillCategoryRepository.findById(skillId).orElse(null);
                mentorSkill.setSkillCategory(skillCategory);

                try {
                    int yearOfExp = mentorCVDTO.getYearOfExp();
                    if (yearOfExp <= 0) {
                        return ResponseEntity.badRequest().body(new ApiResponse(false, "Invalid input",
                                Collections.singletonList("Invalid value for yearsOfExp")));
                    }
                    mentorSkill.setYearsOfExp(yearOfExp);
                } catch (NumberFormatException e) {
                    // Handle invalid type input for yearsOfExp
                    List<String> errors = new ArrayList<>();
                    errors.add("Invalid type input for yearsOfExp");
                    // Return the error response
                    return new ResponseEntity<>(new ApiResponse(false, "Invalid input", errors), HttpStatus.BAD_REQUEST);
                }

                mentorSkillRepository.save(mentorSkill);
            }

            return ResponseEntity.ok("Mentor CV updated successfully"); // Return success message with HTTP 200 status
        } catch (Exception e) {
            String errorMessage = "Failed to update Mentor CV: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }

    }




}
