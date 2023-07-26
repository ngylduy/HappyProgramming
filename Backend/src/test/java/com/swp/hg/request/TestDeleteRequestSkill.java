package com.swp.hg.request;

import com.swp.hg.entity.Request;
import com.swp.hg.entity.RequestSkill;
import com.swp.hg.repository.RequestRepository;
import com.swp.hg.repository.RequestSkillRepository;
import com.swp.hg.service.Impl.RequestService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collection;

import static org.mockito.Mockito.*;

@SpringBootTest
public class TestDeleteRequestSkill {

    @Mock
    private RequestRepository requestRepository;

    @Mock
    private RequestSkillRepository requestSkillRepository;

    @InjectMocks
    private RequestService requestService;

    @Test
    public void testDeleteRequestSkill() {
        // Mock input data
        int requestID = 1;

        // Mock request object
        Request request = mock(Request.class);
        when(request.getRequestID()).thenReturn(requestID);

        // Mock request skills
        RequestSkill requestSkill1 = mock(RequestSkill.class);
        RequestSkill requestSkill2 = mock(RequestSkill.class);
        Collection<RequestSkill> requestSkills = Arrays.asList(requestSkill1, requestSkill2);

        // Setup mock behavior
        when(requestRepository.getRequestsByRequestID(requestID)).thenReturn(request);
        when(request.getRequestSkills()).thenReturn(requestSkills);

        // Invoke the method
        requestService.deleteRequestSkill(requestID);

        // Verify that the delete method was called for each request skill
        verify(requestSkillRepository, times(1)).delete(requestSkill1);
        verify(requestSkillRepository, times(1)).delete(requestSkill2);
    }
    }

