package com.swp.hg.request;

import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.Request;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.entity.User;
import com.swp.hg.repository.*;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.service.Impl.RequestService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class TestUpdateRequest {

    @InjectMocks
    private RequestService requestService;

    @Mock
    private RequestRepository requestRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private MentorProfileRepo mentorProfileRepo;

    @Mock
    private SkillCategoryRepository skillCategoryRepository;

    @Mock
    private RequestSkillRepository requestSkillRepository;

    @Test
    public void testUpdateRequest_Success() {
        // Mock input data
        int userID = 1;
        int requestID = 1;
        RequestDTO requestDTO = new RequestDTO();
        requestDTO.setTitle("New Title");
        requestDTO.setContent("New Content");
        requestDTO.setLink("New Link");
        requestDTO.setMentorId(1);
        requestDTO.setSkillId(Arrays.asList(1, 2, 3));

        // Mock repositories
        User user = new User();
        when(userRepository.findById(userID)).thenReturn(Optional.of(user));

        MentorProfile mentorProfile = new MentorProfile();
        when(mentorProfileRepo.findById(requestDTO.getMentorId())).thenReturn(Optional.of(mentorProfile));

        SkillCategory skillCategory1 = new SkillCategory();
        SkillCategory skillCategory2 = new SkillCategory();
        SkillCategory skillCategory3 = new SkillCategory();
        when(skillCategoryRepository.findById(1)).thenReturn(Optional.of(skillCategory1));
        when(skillCategoryRepository.findById(2)).thenReturn(Optional.of(skillCategory2));
        when(skillCategoryRepository.findById(3)).thenReturn(Optional.of(skillCategory3));

        // Mock existing request
        Request existingRequest = new Request();
        existingRequest.setRequestID(requestID);
        existingRequest.setUsers(user);
        existingRequest.setMentorProfile(mentorProfile);
        when(requestRepository.findByRequestID(requestID)).thenReturn(existingRequest);

        // Invoke the method
        ApiResponse response = requestService.updateRequest(userID, requestID, requestDTO);

        // Assert the response
        assertTrue(response.isSuccess());
        assertEquals("Update Request successfully", response.getMessage());


        // Additional assertions for updated request properties
        assertEquals(requestDTO.getTitle(), existingRequest.getTitle());
        assertEquals(requestDTO.getContent(), existingRequest.getContent());
        assertEquals(requestDTO.getLink(), existingRequest.getLink());
        assertEquals(mentorProfile, existingRequest.getMentorProfile());

    }

}

