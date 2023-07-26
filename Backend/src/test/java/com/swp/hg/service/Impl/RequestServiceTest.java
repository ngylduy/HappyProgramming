package com.swp.hg.service.Impl;

import com.swp.hg.entity.Request;
import com.swp.hg.entity.User;
import com.swp.hg.repository.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;

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

    List<Request> requestList;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);

        requestList = new ArrayList<>();

        Request request1 = new Request();
        request1.setRequestID(1);
        request1.setUsers(new User());
        request1.setStatus(1);

        Request request2 = new Request();
        request2.setRequestID(2);
        request2.setUsers(new User());
        request2.setStatus(1);

        requestList.add(request1);
        requestList.add(request2);
    }

    @Test
    void getALlRequest() {

        List<Request> expected = Arrays.asList(new Request(), new Request(), new Request());

        Mockito.when(requestRepository.findAll()).thenReturn(requestList);

//        List<Request> expected = requestService.getALlRequest();
        List<Request> actual = requestService.getALlRequest();

//        assertEquals(expected, actual);
        assertEquals(expected.size(), actual.size());
    }
}