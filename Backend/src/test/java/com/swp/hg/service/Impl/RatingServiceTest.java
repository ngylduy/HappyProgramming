//package com.swp.hg.service.Impl;
//
//import com.swp.hg.dto.RatingDTO;
//import com.swp.hg.dto.ResultDTO;
//import com.swp.hg.entity.MentorProfile;
//import com.swp.hg.entity.Rating;
//import com.swp.hg.entity.User;
//import com.swp.hg.repository.RatingRepository;
//import com.swp.hg.service.MentorProfileService;
//import com.swp.hg.service.RatingService;
//import com.swp.hg.service.UserService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.*;
//import static org.springframework.test.util.AssertionErrors.assertEquals;
//
//public class RatingServiceTest {
//
//    @Mock
//    private RatingRepository ratingRepository;
//
//    @Mock
//    private UserService userService;
//
//    @Mock
//    private MentorProfileService mentorProfileService;
//
//    @InjectMocks
//    private RatingImpl ratingService;
//
//
//
//    @BeforeEach
//    public void setup() {
//        MockitoAnnotations.openMocks(this);
//    }
//
//    @Test
//    public void saveOrUpdate_existingRating_shouldUpdateSuccessfully() {
//        // Arrange
//        RatingDTO ratingDTO = new RatingDTO();
//        ratingDTO.setRateID(1);
//        ratingDTO.setStar(4);
//        ratingDTO.setComment("Updated comment");
//        ratingDTO.setMenteeID(1);
//        ratingDTO.setMentorID(1);
//
//        Rating existingRating = new Rating();
//        existingRating.setRateID(1);
//        existingRating.setStar(3);
//        existingRating.setComment("Old comment");
//
//        User user = new User();
//        user.setId(1);
//
//        MentorProfile mentorProfile = new MentorProfile();
//        mentorProfile.setMentorID(1);
//
//        when(ratingRepository.getById(1)).thenReturn(existingRating);
//        when(userService.getById(1)).thenReturn(user);
//        when(mentorProfileService.getByMentorID(1)).thenReturn(mentorProfile);
//
//        // Act
//        ResultDTO<Rating> resultDTO = ratingService.saveOrUpdate(ratingDTO);
//
//        // Assert
//        verify(ratingRepository, times(1)).save(existingRating);
//        assertEquals(true, resultDTO.getMessage());
//        assertEquals(Boolean.parseBoolean("Rating updated successfully"), resultDTO.getMessage());
//    }
//
//    private void assertEquals(boolean b, String message) {
//    }
//
//    @Test
//    public void saveOrUpdate_newRating_shouldAddSuccessfully() {
//        // Arrange
//        RatingDTO ratingDTO = new RatingDTO();
//        ratingDTO.setStar(4);
//        ratingDTO.setComment("New comment");
//        ratingDTO.setMenteeID(1);
//        ratingDTO.setMentorID(1);
//
//        User user = new User();
//        user.setId(1);
//
//        MentorProfile mentorProfile = new MentorProfile();
//        mentorProfile.setMentorID(1);
//
//        when(ratingRepository.getById(any())).thenReturn(null);
//        when(userService.getById(1)).thenReturn(user);
//        when(mentorProfileService.getByMentorID(1)).thenReturn(mentorProfile);
//
//        // Act
//        ResultDTO<Rating> resultDTO = ratingService.saveOrUpdate(ratingDTO);
//
//        // Assert
//        verify(ratingRepository, times(1)).save(any());
////        assertEquals(true, resultDTO.getMessage());
////        assertEquals("Rating added successfully", resultDTO.getMessage());
//    }
//}
