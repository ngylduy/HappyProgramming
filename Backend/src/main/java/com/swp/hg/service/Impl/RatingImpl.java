package com.swp.hg.service.Impl;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.Rating;
import com.swp.hg.entity.User;
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

    @Autowired
    private MentorProfileService mentorProfileService;

    public RatingImpl(RatingRepository ratingRepository, UserService userService, MentorProfileService mentorProfileService) {
        this.ratingRepository = ratingRepository;
        this.userService = userService;
        this.mentorProfileService = mentorProfileService;
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
            if (ratingDTO.getRateID() != 0){
                Rating rating = getById(ratingDTO.getRateID());
                rating.setStar(ratingDTO.getStar());
                rating.setComment(ratingDTO.getComment());
                ratingRepository.save(rating);
                resultDTO.setStatus(true);
                resultDTO.setMessage("Rating updated successfully");
                resultDTO.setData(rating);
            } else {
                Rating rating = new Rating();

                rating.setStar(ratingDTO.getStar());
                rating.setComment(ratingDTO.getComment());

                MentorProfile mentorProfile = mentorProfileService.getByMentorID(ratingDTO.getMentorID());
                if (mentorProfile != null){
                    rating.setMentorProfile(mentorProfile);
                } else {
                    throw new Exception("Mentor profile not found");
                }
                User user = userService.getById(ratingDTO.getMenteeID());
                MentorProfile uMentorProfile = mentorProfileService.getByMentorID(ratingDTO.getMenteeID());
                if (uMentorProfile == null && user != null){
                    rating.setMenteeRating(userService.getById(ratingDTO.getMenteeID()));
                } else {
                    throw new Exception("Mentee profile not found");
                }
                ratingRepository.save(rating);
                resultDTO.setStatus(true);
                resultDTO.setMessage("Rating added successfully");
                resultDTO.setData(rating);
            }
        } catch (Exception e){
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
