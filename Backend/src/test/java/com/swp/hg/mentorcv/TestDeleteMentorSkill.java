package com.swp.hg.mentorcv;

import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.MentorSkill;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.repository.MentorSkillRepository;
import com.swp.hg.service.Impl.MentorCVService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Collection;

import static org.mockito.ArgumentMatchers.anyInt;

@SpringBootTest
class TestDeleteMentorSkill {
    @Mock
    private MentorProfileRepo mentorProfileRepo;

    @Mock
    private MentorSkillRepository mentorSkillRepository;

    @InjectMocks
    private MentorCVService mentorCVService;

    private MentorProfile mentorProfile;
    private Collection<MentorSkill> mentorSkills;

    @BeforeEach
    void setUp() {
        // Initialize common test data
        mentorProfile = new MentorProfile();
        mentorProfile.setMentorID(1);
        mentorSkills = new ArrayList<>();
        mentorProfile.setMentorSkills(mentorSkills);
    }

    @Test
    void deleteMentorSkill_ValidMentorID_DeletesMentorSkills() {
        // Mock the repository behavior

        Mockito.when(mentorProfileRepo.getById(anyInt())).thenReturn(mentorProfile);

        // Call the service method
        mentorCVService.deleteMentorSkill(1);

    }

    @Test
    void deleteMentorSkill_InvalidMentorID_NoActionTaken() {
        // Mock the repository behavior to return null for invalid mentor ID
        Mockito.when(mentorProfileRepo.getById(anyInt())).thenReturn(null);

        // Call the service method
        mentorCVService.deleteMentorSkill(1);

        // Verify that no mentor skills are attempted to be deleted
        Mockito.verify(mentorSkillRepository, Mockito.never()).delete(Mockito.any(MentorSkill.class));
    }
}

