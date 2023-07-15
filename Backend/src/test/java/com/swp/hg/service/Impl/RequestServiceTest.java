package com.swp.hg.service.Impl;

import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.*;
import com.swp.hg.repository.*;
import com.swp.hg.response.ApiResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.Mockito.*;

class RequestServiceTest {

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

    @InjectMocks
    private RequestService requestService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllRequest_shouldReturnListOfRequests() {
        // Arrange
        List<Request> expectedRequests = Arrays.asList(new Request(), new Request());

        when(requestRepository.findAll()).thenReturn(expectedRequests);

        // Act
        List<Request> actualRequests = requestService.getALlRequest();

        // Assert
        assertEquals(expectedRequests, actualRequests);
    }

    @Test
    void getAllRequest_shouldReturnNullIfExceptionThrown() {
        // Arrange
        when(requestRepository.findAll()).thenThrow(RuntimeException.class);

        // Act
        List<Request> actualRequests = requestService.getALlRequest();

        // Assert
        assertNull(actualRequests);
    }

    @Test
    void getRequestByRequestId_shouldReturnRequestIfExists() {
        // Arrange
        int requestId = 7;
        Request expectedRequest = new Request();
        //when(requestRepository.findByRequestID(requestId)).thenReturn(expectedRequest);

        // Act
        Request actualRequest = requestService.getRequestByRequestId(requestId);

        // Assert
        assertEquals(expectedRequest, actualRequest);
    }

    @Test
    void getRequestByRequestId_shouldReturnNullIfRequestNotFound() {
        // Arrange
        int requestId = 1;
        when(requestRepository.findByRequestID(requestId)).thenReturn(null);

        // Act
        Request actualRequest = requestService.getRequestByRequestId(requestId);

        // Assert
        assertNull(actualRequest);
    }

    @Test
    void getRequestByRequestId_shouldReturnNullIfExceptionThrown() {
        // Arrange
        int requestId = 1;
        when(requestRepository.findByRequestID(requestId)).thenThrow(RuntimeException.class);

        // Act
        Request actualRequest = requestService.getRequestByRequestId(requestId);

        // Assert
        assertNull(actualRequest);
    }

    @Test
    void getAllRequestById_shouldReturnListOfRequests() {
        // Arrange
        List<Integer> requestIds = Arrays.asList(1, 2, 3);
        List<Request> expectedRequests = Arrays.asList(new Request(), new Request());
        when(requestRepository.findAllById(requestIds)).thenReturn(expectedRequests);

        // Act
        List<Request> actualRequests = requestService.getALlRequestById(requestIds);

        // Assert
        assertEquals(expectedRequests, actualRequests);
    }

    @Test
    void getAllRequestById_shouldReturnNullIfExceptionThrown() {
        // Arrange
        List<Integer> requestIds = Arrays.asList(1, 2, 3);
        when(requestRepository.findAllById(requestIds)).thenThrow(RuntimeException.class);

        // Act
        List<Request> actualRequests = requestService.getALlRequestById(requestIds);

        // Assert
        assertNull(actualRequests);
    }

    @Test
    void deleteRequest_shouldDeleteRequest() {
        // Arrange
        int requestId = 1;
        Request request = new Request();
        when(requestRepository.getRequestsByRequestID(requestId)).thenReturn(request);

        // Act
        requestService.deleteRequest(requestId);

        // Assert
        verify(requestRepository).delete(request);
    }

    @Test
    void deleteRequestSkill_shouldDeleteRequestSkills() {
        // Arrange
        int requestId = 1;
        Request request = new Request();
        RequestSkill requestSkill1 = new RequestSkill();
        RequestSkill requestSkill2 = new RequestSkill();
        request.setRequestSkills(Arrays.asList(requestSkill1, requestSkill2));
        when(requestRepository.getRequestsByRequestID(requestId)).thenReturn(request);

        // Act
        requestService.deleteRequestSkill(requestId);

        // Assert
        verify(requestSkillRepository, times(2)).delete(any(RequestSkill.class));
    }

}