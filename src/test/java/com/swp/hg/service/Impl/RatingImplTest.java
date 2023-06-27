package com.swp.hg.service.Impl;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.Rating;
import com.swp.hg.repository.RatingRepository;
import com.swp.hg.service.MentorProfileService;
import com.swp.hg.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class RatingImplTest {

    @Mock
    private RatingRepository ratingRepository;

    @Mock
    private UserService userService;

    @Mock
    private MentorProfileService mentorProfileService;

    @InjectMocks
    private RatingImpl ratingService;

    private List<Rating> mockRatings;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);

        mockRatings = new ArrayList<>();
        Rating rating1 = new Rating();
        rating1.setRateID(1);
        rating1.setStar(4);
        rating1.setComment("Great mentor!");
        mockRatings.add(rating1);

        Rating rating2 = new Rating();
        rating2.setRateID(2);
        rating2.setStar(3);
        rating2.setComment("Could be better.");
        mockRatings.add(rating2);
    }

    @Test
    void testGetAll() {
        when(ratingRepository.findAll()).thenReturn(mockRatings);

        List<Rating> result = ratingService.getAll();

        assertEquals(mockRatings.size(), result.size());
        assertEquals(mockRatings.get(0).getRateID(), result.get(0).getRateID());
        assertEquals(mockRatings.get(1).getStar(), result.get(1).getStar());
    }

    @Test
    void testGetByMenteeID() {
        int menteeId = 1;
        when(ratingRepository.findAllByMenteeId(menteeId)).thenReturn(mockRatings);

        List<Rating> result = ratingService.getByMenteeID(menteeId);

        assertEquals(mockRatings.size(), result.size());
        assertEquals(mockRatings.get(0).getRateID(), result.get(0).getRateID());
        assertEquals(mockRatings.get(1).getComment(), result.get(1).getComment());
    }

    @Test
    void testGetByMentorID() {
        int mentorId = 1;
        when(ratingRepository.findAllByMentorId(mentorId)).thenReturn(mockRatings);

        List<Rating> result = ratingService.getByMentorID(mentorId);

        assertEquals(mockRatings.size(), result.size());
        assertEquals(mockRatings.get(0).getStar(), result.get(0).getStar());
        assertEquals(mockRatings.get(1).getRateID(), result.get(1).getRateID());
    }

    @Test
    void testSaveOrUpdate_ExistingRating() {
        RatingDTO ratingDTO = new RatingDTO();
        ratingDTO.setRateID(1);
        ratingDTO.setStar(3);
        ratingDTO.setComment("Not bad.");

        when(ratingRepository.findById(ratingDTO.getRateID())).thenReturn(java.util.Optional.ofNullable(mockRatings.get(0)));

        ResultDTO<Rating> result = ratingService.saveOrUpdate(ratingDTO);

        assertTrue(result.isStatus());
        assertEquals("Rating updated successfully", result.getMessage());

        verify(ratingRepository, times(1)).save(any(Rating.class));
    }

    @Test
    void testSaveOrUpdate_NewRating() {
        RatingDTO ratingDTO = new RatingDTO();
        ratingDTO.setStar(5);
        ratingDTO.setComment("Excellent mentor!");
        ratingDTO.setMentorID(1);
        ratingDTO.setMenteeID(2);

        when(mentorProfileService.getById(ratingDTO.getMentorID())).thenReturn(null);
        when(userService.getById(ratingDTO.getMenteeID())).thenReturn(null);

        ResultDTO<Rating> result = ratingService.saveOrUpdate(ratingDTO);

        assertTrue(result.isStatus());
        assertEquals("Rating added successfully", result.getMessage());

        verify(ratingRepository, times(1)).save(any(Rating.class));
    }

    @Test
    void testGetById() {
        int id = 1;
        Rating rating = mockRatings.get(0);
        when(ratingRepository.findById(id)).thenReturn(java.util.Optional.ofNullable(rating));

        Rating result = ratingService.getById(id);

        assertNotNull(result);
        assertEquals(rating, result);
    }
}