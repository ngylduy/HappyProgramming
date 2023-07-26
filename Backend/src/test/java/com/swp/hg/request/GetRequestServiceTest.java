package com.swp.hg.request;

import com.swp.hg.entity.Request;
import com.swp.hg.repository.RequestRepository;
import com.swp.hg.service.Impl.RequestService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

@SpringBootTest
public class GetRequestServiceTest {

    @Mock
    private RequestRepository requestRepository;

    private RequestService requestService;



   

    @Before
    public void setup() {
        MockitoAnnotations.openMocks(this);
        requestService = new RequestService(requestRepository, null, null,
                null, null);
    }

    @Test
    public void testGetAllRequest() {
        // Arrange
        Request request1 = new Request();
        request1.setRequestID(1);
        Request request2 = new Request();
        request2.setRequestID(2);
        List<Request> expectedRequests = Arrays.asList(request1, request2);

        when(requestRepository.findAll()).thenReturn(expectedRequests);

        // Act
        List<Request> actualRequests = requestService.getALlRequest();

        //  Verify
        verify(requestRepository, times(1)).findAll();
    }

    @Test
    public void testGetAllRequest_ExceptionThrown() {
        // Arrange
        when(requestRepository.findAll()).thenThrow(new RuntimeException());

        // Act
        List<Request> actualRequests = requestService.getALlRequest();

        // Verify
        verify(requestRepository, times(1)).findAll();
    }
}