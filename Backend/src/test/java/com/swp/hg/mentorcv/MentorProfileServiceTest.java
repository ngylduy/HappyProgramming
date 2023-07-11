package com.swp.hg.mentorcv;

import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.repository.MentorProfileRepository;
import com.swp.hg.service.MentorProfileService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class MentorProfileServiceTest {

    @Mock
    private MentorProfileRepository mentorProfileRepository;

    @InjectMocks
    private MentorProfileService mentorProfileService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSearch() {
        // Prepare test data
        MentorProfileDTO mentorProfileDTO = new MentorProfileDTO();
        mentorProfileDTO.setFullname("John Doe");

        List<MentorProfileDTO> mockedResults = new ArrayList<>();
        mockedResults.add(new MentorProfileDTO());
        mockedResults.add(new MentorProfileDTO());

        when(mentorProfileRepository.paging(mentorProfileDTO)).thenReturn(mockedResults);
        when(mentorProfileRepository.doSearch(mentorProfileDTO)).thenReturn(mockedResults);

        // Call the method under test
        SearchResultDTO<MentorProfileDTO> result = mentorProfileService.search(mentorProfileDTO);

        // Verify the result
        assertTrue(result.isStatus());
        assertEquals(mockedResults, result.getData());
        assertEquals(mockedResults.size(), result.getTotalRecord());

        // Verify the repository methods were called
        verify(mentorProfileRepository).paging(mentorProfileDTO);
        verify(mentorProfileRepository).doSearch(mentorProfileDTO);
    }
}

