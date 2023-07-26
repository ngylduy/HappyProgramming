package com.swp.hg.request;

import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.*;
import com.swp.hg.repository.*;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.service.Impl.RequestService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class TestAddRequest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private MentorProfileRepo mentorProfileRepo;

    @Mock
    private RequestRepository requestRepository;

    @Mock
    private RequestSkillRepository requestSkillRepository;

    @Mock
    private SkillCategoryRepository skillCategoryRepository;

    @InjectMocks
    private RequestService requestService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    public void testAddRequest_Success() {
        // Mock input data
        int userID = 1;
        int mentorID=1;

        // Create a mocked RequestDTO object
        RequestDTO requestDTO = Mockito.mock(RequestDTO.class);
        when(requestDTO.getTitle()).thenReturn("Test Title");
        when(requestDTO.getContent()).thenReturn("Test Content");
        when(requestDTO.getLink()).thenReturn("Test Link");
        when(requestDTO.getMentorId()).thenReturn(1);
        when(requestDTO.getSkillId()).thenReturn(Collections.singletonList(1));

        // Mock user object
        User user = Mockito.mock(User.class);
        when(userRepository.findById(userID)).thenReturn(Optional.of(user));

        // Mock mentor profile object
        MentorProfile mentorProfile = Mockito.mock(MentorProfile.class);
        when(mentorProfileRepo.findById(requestDTO.getMentorId())).thenReturn(Optional.of(mentorProfile));

        // Mock skill category object
        SkillCategory skillCategory = Mockito.mock(SkillCategory.class);
        when(skillCategoryRepository.findById(anyInt())).thenReturn(Optional.of(skillCategory));

        // Create a mocked Request object
        Request request = Mockito.mock(Request.class);

        // Stub the save method of requestRepository to return the mocked Request object
        when(requestRepository.save(any(Request.class))).thenReturn(request);

        // Create a mocked RequestSkill object
        RequestSkill requestSkill = Mockito.mock(RequestSkill.class);

        // Stub the save method of requestSkillRepository to return the mocked RequestSkill object
        when(requestSkillRepository.save(any(RequestSkill.class))).thenReturn(requestSkill);

        // Invoke the method
        ApiResponse response = requestService.addRequest(userID,mentorID, requestDTO);

        // Assert the response
        assertTrue(response.isSuccess());
        assertEquals("Add request successfully", response.getMessage());

    }


    @Test
    public void testAddRequest_NullTitleAndContent() {
        // Mock input data
        int userID = 1;
        int mentorID=1;
        RequestDTO requestDTO = new RequestDTO();

        // Invoke the method
        ApiResponse response = requestService.addRequest(userID,mentorID, requestDTO);

        // Assert the response
        assertFalse(response.isSuccess());
        assertEquals("Title and Content is null", response.getMessage());

        // Verify that the save method was not called for the request
        verify(requestRepository, never()).save(any(Request.class));

        // Verify that the save method was not called for the request skill
        verify(requestSkillRepository, never()).save(any(RequestSkill.class));
    }



}
