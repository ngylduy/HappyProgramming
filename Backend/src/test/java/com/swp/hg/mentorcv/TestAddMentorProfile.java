package com.swp.hg.mentorcv;

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
import com.swp.hg.service.Impl.MentorCVService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

class TestAddMentorProfile {

    @Mock
    private MentorProfileRepo mentorProfileRepo;

    @Mock
    private UserRepository userRepository;

    @Mock
    private SkillCategoryRepository skillCategoryRepository;

    @Mock
    private MentorSkillRepository mentorSkillRepository;

    @InjectMocks
    private MentorCVService mentorCVService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testAddMentorCV_Success() {
        // Mock input data
        int userID = 1;
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();

        // Mock UserRepository
        User user = new User();
        when(userRepository.findById(userID)).thenReturn(Optional.of(user));

        // Mock SkillCategoryRepository
        SkillCategory skillCategory = new SkillCategory();
        when(skillCategoryRepository.findById(anyInt())).thenReturn(Optional.of(skillCategory));

        // Mock MentorProfileRepository
        when(mentorProfileRepo.save(any(MentorProfile.class))).thenReturn(new MentorProfile());

        // Mock MentorSkillRepository
        when(mentorSkillRepository.save(any(MentorSkill.class))).thenReturn(new MentorSkill());

        // Invoke the method
        ResponseEntity<?> responseEntity = mentorCVService.addMentorCV(userID, mentorCVDTO);

        // Verify the interactions
        verify(userRepository, times(1)).findById(userID);
        verify(skillCategoryRepository, times(1)).findById(anyInt());
        verify(mentorProfileRepo, times(1)).save(any(MentorProfile.class));
        verify(mentorSkillRepository, times(mentorCVDTO.getSkillId().size())).save(any(MentorSkill.class));

        // Assert the response
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Mentor CV added successfully", responseEntity.getBody());
    }

    @Test
    void testAddMentorCV_InvalidInput() {
        // Mock input data
        int userID = 1;
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();
        mentorCVDTO.setYearOfExp(-1); // Invalid input, negative year of experience

        // Mock UserRepository
        User user = new User();
        when(userRepository.findById(userID)).thenReturn(Optional.of(user));

        // Invoke the method
        ResponseEntity<?> responseEntity = mentorCVService.addMentorCV(userID, mentorCVDTO);

        // Assert the response
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        // Assert the error message
        ApiResponse errorResponse = (ApiResponse) responseEntity.getBody();
        assertEquals("Invalid input", errorResponse.getMessage());
        assertEquals(Collections.singletonList("Invalid value for yearsOfExp"), errorResponse.getErrors());
    }

    // Helper method to create a mock MentorCVDTO object
    private MentorCVDTO createMockMentorCVDTO() {
        MentorCVDTO mentorCVDTO = new MentorCVDTO();
        mentorCVDTO.setAvatar("avatar-url");
        mentorCVDTO.setIntroduction("Introduction");
        mentorCVDTO.setLinkedln("linkedin-url");
        mentorCVDTO.setGithub("github-url");
        mentorCVDTO.setProfession("Profession");
        mentorCVDTO.setSkillId(Collections.singletonList(1));
        mentorCVDTO.setDescription("Description");
        mentorCVDTO.setYearOfExp(2);
        return mentorCVDTO;
    }

}