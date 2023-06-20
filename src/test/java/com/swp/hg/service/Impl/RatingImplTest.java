package com.swp.hg.service.Impl;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.Rating;
import com.swp.hg.repository.RatingRepository;
import com.swp.hg.service.MentorProfileService;
import com.swp.hg.service.RatingService;
import com.swp.hg.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class RatingImplTest {

    @Mock
    private RatingRepository ratingRepository;

    @Mock
    private MentorProfileService mentorProfileService;

    @Mock
    private UserService userService;

    private RatingService ratingService;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        ratingService = new RatingImpl(ratingRepository, userService, mentorProfileService);
    }

    @Test
    public void testSaveOrUpdate() {

        RatingDTO ratingDTO = new RatingDTO();

        ratingDTO.setMenteeID(1);
        ratingDTO.setMentorID(2);
        ratingDTO.setStar(5);
        ratingDTO.setComment("Great job!");

        Rating savedRating = new Rating();

        savedRating.setRateID(1);
        savedRating.setMenteeRating(userService.getById(ratingDTO.getMenteeID()));
        savedRating.setMentorProfile(mentorProfileService.getById(ratingDTO.getMentorID()));
        savedRating.setStar(ratingDTO.getStar());
        savedRating.setComment(ratingDTO.getComment());

        when(ratingRepository.save(any(Rating.class))).thenReturn(savedRating);
        when(ratingService.getById(1)).thenReturn(null);

        ResultDTO<Rating> resultDTO = ratingService.saveOrUpdate(ratingDTO);

        assertEquals(true, resultDTO.isStatus());
        assertEquals("Rating added successfully", resultDTO.getMessage());
    }
}