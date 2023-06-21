package com.swp.hg.service;

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
import org.springframework.stereotype.Service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

@Service
public class MentorCVService {

    private final MentorProfileRepo mentorProfileRepo;

    private final MentorSkillRepository mentorSkillRepository;

    private final UserRepository userRepository;

    private final SkillCategoryRepository skillCategoryRepository;


    public MentorCVService(MentorProfileRepo mentorProfileRepo, MentorSkillRepository mentorSkillRepository, UserRepository userRepository, SkillCategory skillCategory, SkillCategoryRepository skillCategoryRepository) {
        this.mentorProfileRepo = mentorProfileRepo;
        this.mentorSkillRepository = mentorSkillRepository;
        this.userRepository = userRepository;
        this.skillCategoryRepository = skillCategoryRepository;
    }

//    public void addMentorCV(MentorCVDTO mentorCVDTO){
//        MentorProfile mentorProfile = new MentorProfile();
//        mentorProfile.setAvatar(mentorCVDTO.getAvatar());
//        mentorProfile.setIntroduction(mentorCVDTO.getIntroduction());
//        mentorProfile.setLinkedIn(mentorCVDTO.getLinkedln());
//        mentorProfile.setGitHub(mentorCVDTO.getGithub());
//        mentorProfile.setProfession(mentorCVDTO.getProfession());
//        User user = userRepository.findById(mentorCVDTO.getUserid()).orElse(null);
//        mentorProfile.setMentorProfile(user);
//
//        // Save the mentor profile
//        mentorProfileRepo.save(mentorProfile);
////        var x =mentorProfile.getMentorID();
//
//        // Save the mentor skills
//
//        for(Integer skillId: mentorCVDTO.getSkillId()){
//            MentorSkill mentorSkill = new MentorSkill();
//            mentorSkill.setYearsOfExp(mentorCVDTO.getYearsOfExp());
//            mentorSkill.setDescription(mentorCVDTO.getDescription());
//            mentorSkill.setMentorProfile(mentorProfile);
//
//            SkillCategory skillCategory = skillCategoryRepository.findById(skillId).orElse(null);
//            mentorSkill.setSkillCategory(skillCategory);
//            mentorSkillRepository.save(mentorSkill);
//        }
//    }



    public ResponseEntity<?> addMentorCV(MentorCVDTO mentorCVDTO) {
        try {
            MentorProfile mentorProfile = new MentorProfile();
            mentorProfile.setAvatar(mentorCVDTO.getAvatar());
            mentorProfile.setIntroduction(mentorCVDTO.getIntroduction());
            mentorProfile.setLinkedIn(mentorCVDTO.getLinkedln());
            mentorProfile.setGitHub(mentorCVDTO.getGithub());
            mentorProfile.setProfession(mentorCVDTO.getProfession());
            User user = userRepository.findById(mentorCVDTO.getUserid()).orElse(null);
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
                    int yearsOfExp = Integer.parseInt(mentorCVDTO.getYearsOfExp());
                    mentorSkill.setYearsOfExp(yearsOfExp);

                } catch (NumberFormatException e) {
                    // Handle invalid type input for yearsOfExp
                    // For example, you can log the error and add an error message to a list
                    List<String> errors = new ArrayList<>();
                    errors.add("Invalid type input for yearsOfExp");
                    // Return the error response
                    return new ResponseEntity<>(new ApiResponse(false, "Invalid input", errors), HttpStatus.BAD_REQUEST);
                }
                mentorSkillRepository.save(mentorSkill);
            }
            return ResponseEntity.ok("Mentor CV added successfully"); // Return success message with HTTP 200 status
        } catch (Exception e) {
            String errorMessage = "Failed to add Mentor CV: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorMessage);
        }
    }




}
