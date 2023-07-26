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

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class TestUpdateMentorProfile {

    @Mock
    private MentorProfileRepo mentorProfileRepo;

    @Mock
    private MentorSkillRepository mentorSkillRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private SkillCategoryRepository skillCategoryRepository;


    @InjectMocks
    private MentorCVService mentorCVService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testUpdateMentorCV_MentorProfileNotFound() {
        // Arrange
        int userID = 123;
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();

        when(mentorProfileRepo.findMentorProfilesByUserID(userID)).thenReturn(null);

        // Act
        ResponseEntity<?> response = mentorCVService.updateMentorCV(userID, mentorCVDTO);

        // Assert
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Mentor profile not found", ((ApiResponse) response.getBody()).getMessage());

        // Verify the method invocations
        verify(mentorProfileRepo).findMentorProfilesByUserID(userID);
        verify(userRepository, never()).findById(anyInt());
        verify(mentorProfileRepo, never()).save(any(MentorProfile.class));
        verify(mentorSkillRepository, never()).deleteByMentorProfile(any(MentorProfile.class));
        verify(mentorSkillRepository, never()).save(any(MentorSkill.class));
    }


    @Test
    public void testUpdateMentorCV_ExceptionThrown() {
        // Arrange
        int userID = 1;
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();

        MentorProfile mentorProfile = new MentorProfile();
        mentorProfile.setMentorID(1); // Set the ID of the mentor profile

        when(mentorProfileRepo.findMentorProfilesByUserID(userID)).thenReturn(mentorProfile);
        when(userRepository.findById(userID)).thenReturn(Optional.of(new User()));
        when(skillCategoryRepository.findById(anyInt())).thenReturn(Optional.of(new SkillCategory()));

        // Simulate an exception during the update process
        doThrow(new RuntimeException("Failed to update mentor CV")).when(mentorProfileRepo).save(mentorProfile);

        // Act
        ResponseEntity<?> response = mentorCVService.updateMentorCV(userID, mentorCVDTO);

        // Assert
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Failed to update Mentor CV: Failed to update mentor CV", response.getBody());


        // Verify the method invocations
        verify(mentorProfileRepo).findMentorProfilesByUserID(userID);
        verify(userRepository).findById(userID);
        verify(mentorProfileRepo).save(mentorProfile);
        verify(mentorSkillRepository, never()).deleteByMentorProfile(mentorProfile);
        verify(mentorSkillRepository, never()).save(any(MentorSkill.class));


    }

    @Test
    public void testUpdateMentorCV_Success() {
        // Arrange
        int userID = 1;
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();

        MentorProfile mentorProfile = new MentorProfile();
        mentorProfile.setMentorID(1); // Set the ID of the mentor profile

        when(mentorProfileRepo.findMentorProfilesByUserID(userID)).thenReturn(mentorProfile);
        when(userRepository.findById(userID)).thenReturn(Optional.of(new User()));
        when(skillCategoryRepository.findById(anyInt())).thenReturn(Optional.of(new SkillCategory()));

        // Act
        ResponseEntity<?> response = mentorCVService.updateMentorCV(userID, mentorCVDTO);

        // Assert
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Mentor CV updated successfully", response.getBody());

        // Verify the method invocations
        verify(mentorProfileRepo).findMentorProfilesByUserID(userID);
        verify(userRepository).findById(userID);
        verify(mentorProfileRepo).save(mentorProfile);
        verify(mentorSkillRepository).deleteByMentorProfile(mentorProfile);
        verify(mentorSkillRepository, times(mentorCVDTO.getSkillId().size())).save(any(MentorSkill.class));
    }

    MentorCVDTO createMockMentorCVDTO() {
        MentorCVDTO mentorCVDTO = mock(MentorCVDTO.class);
        // Set the necessary values for the mock MentorCVDTO
        when(mentorCVDTO.getAvatar()).thenReturn("avatar-url");
        when(mentorCVDTO.getIntroduction()).thenReturn("Introduction");
        when(mentorCVDTO.getLinkedln()).thenReturn("linkedin-url");
        when(mentorCVDTO.getGithub()).thenReturn("github-url");
        when(mentorCVDTO.getProfession()).thenReturn("Profession");
        when(mentorCVDTO.getSkillId()).thenReturn(Arrays.asList(1, 2, 3)); // Set the skill IDs as needed
        when(mentorCVDTO.getDescription()).thenReturn("Skill Description");
        when(mentorCVDTO.getYearOfExp()).thenReturn(5);

        return mentorCVDTO;
    }

}



