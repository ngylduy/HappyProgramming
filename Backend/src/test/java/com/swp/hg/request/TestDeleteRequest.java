package com.swp.hg.request;

import com.swp.hg.entity.Request;
import com.swp.hg.repository.RequestRepository;
import com.swp.hg.service.Impl.RequestService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.*;

@SpringBootTest
public class TestDeleteRequest {

    @Mock
    private RequestRepository requestRepository;

    @InjectMocks
    private RequestService requestService;

    @Test
    public void testDeleteRequest() {
        // Mock input data
        int requestID = 1;

        // Mock request object
        Request request = new Request();
        request.setRequestID(requestID);

        // Mock repository method
        when(requestRepository.getRequestsByRequestID(requestID)).thenReturn(request);

        // Invoke the method
        requestService.deleteRequest(requestID);

        // Verify that the delete method was called with the correct request object
        verify(requestRepository, times(1)).delete(request);
    }
}
