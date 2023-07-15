package com.swp.hg.controller;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.Rating;
import com.swp.hg.entity.User;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.repository.RatingRepository;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.RatingResponse;
import com.swp.hg.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
@RequiredArgsConstructor
public class RatingController {

    private final RatingService ratingService;

    private  final RatingRepository ratingRepository;

    private  final UserRepository userRepository;

    private  final MentorProfileRepo mentorProfileRepo;

    @GetMapping("/rating")
    public ResponseEntity<List<RatingResponse>> getAll() {
        try {
            List<Rating> ratings = ratingRepository.findAll();
            List<RatingResponse> responseList = new ArrayList<>();
            for (Rating rating : ratings) {
                RatingResponse response = createRatingResponse(rating);
                responseList.add(response);
            }

            return ResponseEntity.ok(responseList);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private RatingResponse createRatingResponse(Rating rating){
        RatingResponse response = new RatingResponse();
        response.setComment(rating.getComment());
        response.setStar(rating.getStar());
        response.setMenteeID(rating.getMenteeRating().getId());
        response.setRateID(rating.getRateID());
        response.setMentorID(rating.getMentorProfile().getMentorID());
        return response;
    }


    @GetMapping("/rating/mentor/{id}")
    public List<Rating> getByMentorID(@PathVariable int id) {
        return ratingService.getByMentorID(id);
    }

    @GetMapping("/rating/mentee/{id}")
    public List<Rating> getByMenteeID(@PathVariable int id) {
        return ratingService.getByMenteeID(id);
    }

    @PostMapping("/rating")
    public ResponseEntity<?> saveRating(@RequestBody RatingDTO ratingDTO) {
        ResultDTO<Rating> ratingResultDTO = ratingService.saveOrUpdate(ratingDTO);
        return new ResponseEntity<ResultDTO<Rating>>(ratingResultDTO, HttpStatus.OK);
    }

    @PutMapping("/rating/{id}")
    public ResponseEntity<?> updateRating(@RequestBody RatingDTO ratingDTO, @PathVariable int id) {
        ratingDTO.setRateID(id);
        ResultDTO<Rating> ratingResultDTO = ratingService.saveOrUpdate(ratingDTO);
        return new ResponseEntity<ResultDTO<Rating>>(ratingResultDTO, HttpStatus.OK);
    }

}
