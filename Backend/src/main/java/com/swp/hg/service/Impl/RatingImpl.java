package com.swp.hg.service.Impl;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.Rating;
import com.swp.hg.entity.User;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.repository.RatingRepository;
import com.swp.hg.service.MentorProfileService;
import com.swp.hg.service.RatingService;
import com.swp.hg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Autowired
    private UserService userService;

//    @Autowired
//    private MentorProfileService mentorProfileService;

    private MentorProfileServiceImpl mentorProfileService;

    public RatingImpl(RatingRepository ratingRepository, UserService userService, MentorProfileService mentorProfileService, MentorProfileServiceImpl mentorProfileService1) {
        this.ratingRepository = ratingRepository;
        this.userService = userService;
//        this.mentorProfileService = mentorProfileService;
        this.mentorProfileService = mentorProfileService1;
    }

    @Override
    public List<Rating> getAll() {
        return ratingRepository.findAll();
    }

    @Override
    public List<Rating> getByMenteeID(int id) {
        return ratingRepository.findAllByMenteeId(id);
    }

    @Override
    public List<Rating> getByMentorID(int id) {
        return ratingRepository.findAllByMentorId(id);
    }

    @Override
    public ResultDTO<Rating> saveOrUpdate(RatingDTO ratingDTO) {
        ResultDTO<Rating> resultDTO = new ResultDTO<>();
        try {
            Rating rating = getById(ratingDTO.getRateID());
            User user = userService.getById(ratingDTO.getMenteeID());
            MentorProfile mentorProfile = mentorProfileService.getByMentorID(ratingDTO.getMentorID());
            if (rating != null) {
                rating.setStar(ratingDTO.getStar());
                rating.setComment(ratingDTO.getComment());
                rating.setMenteeRating(user);
                rating.setMentorProfile(mentorProfile);
                ratingRepository.save(rating);
                resultDTO.setStatus(true);
                resultDTO.setMessage("Rating updated successfully");
            } else {
                rating = new Rating();
                rating.setStar(ratingDTO.getStar());
                rating.setComment(ratingDTO.getComment());
                rating.setMentorProfile(mentorProfile);
                rating.setMenteeRating(user);
                ratingRepository.save(rating);
                resultDTO.setStatus(true);
                resultDTO.setMessage("Rating added successfully");
            }
        } catch (Exception e) {
            resultDTO.setStatus(false);
            resultDTO.setMessage(e.getMessage());
        }
        return resultDTO;
    }

    @Override
    public Rating getById(int id) {
        return ratingRepository.findById(id).orElse(null);
    }
}
