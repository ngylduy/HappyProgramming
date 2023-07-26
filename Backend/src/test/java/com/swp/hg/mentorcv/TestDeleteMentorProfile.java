package com.swp.hg.mentorcv;

import com.swp.hg.entity.MentorProfile;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.service.Impl.MentorCVService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.*;

@SpringBootTest
public class TestDeleteMentorProfile {

    @Mock
    private MentorProfileRepo mentorProfileRepo;
    @Spy
    @InjectMocks
    private MentorCVService mentorCVService;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testDeleteMentorProfile() {
        // Mock input data
        int userID = 1;

        // Mock MentorProfileRepository
        MentorProfile mentorProfile = new MentorProfile();
        when(mentorProfileRepo.findMentorProfilesByUserID(userID)).thenReturn(mentorProfile);

        // Invoke the method
        mentorCVService.deleteMentorProfile(userID);

        // Verify the interactions
        verify(mentorProfileRepo, times(1)).findMentorProfilesByUserID(userID);
        verify(mentorProfileRepo, times(1)).delete(mentorProfile);
    }
    }


