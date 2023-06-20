package com.swp.hg.service.Impl;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.Rating;
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
            Rating rating = getById(ratingDTO.getRateID());
            if (rating != null){
                rating.setStar(ratingDTO.getStar());
                rating.setComment(ratingDTO.getComment());
                ratingRepository.save(rating);
                resultDTO.setStatus(true);
                resultDTO.setMessage("Rating updated successfully");
            } else {
                rating = new Rating();
                rating.setStar(ratingDTO.getStar());
                rating.setComment(ratingDTO.getComment());
                rating.setMentorProfile(mentorProfileService.getById(ratingDTO.getMentorID()));
                rating.setMenteeRating(userService.getById(ratingDTO.getMenteeID()));
                ratingRepository.save(rating);
                resultDTO.setStatus(true);
                resultDTO.setMessage("Rating added successfully");
            }

        } catch (Exception e){
            resultDTO.setStatus(false);
            resultDTO.setMessage(e.getMessage());
        }
        return resultDTO;
    }

    @Override
    public Rating delete(int id) {
        return null;
    }

    @Override
    public Rating getById(int id) {
        return ratingRepository.findById(id).orElse(null);
    }
}
