package com.swp.hg.mentorcv;

import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.service.MentorCVService;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.Spy;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.verify;

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
        int mentorID = 1;


        mentorCVService.deleteMentorProfile(mentorID);

        // Verify that the mentor profile is deleted
        verify(mentorProfileRepo).deleteById(mentorID);
    }
}

