package com.swp.hg.controller;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.Rating;
import com.swp.hg.response.RatingResponse;
import com.swp.hg.service.RatingService;
import lombok.RequiredArgsConstructor;
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

    @GetMapping("/rating")
    public ResponseEntity<List<RatingDTO>> getAll() {
        try {
            List<Rating> ratings = ratingService.getAll();
            List<RatingDTO> responseList = new ArrayList<>();
            for (Rating rating : ratings) {
                RatingDTO response = createRatingResponse(rating);
                responseList.add(response);
            }
            return ResponseEntity.ok(responseList);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private RatingDTO createRatingResponse(Rating rating){
        RatingDTO response = new RatingDTO();
        response.setComment(rating.getComment());
        response.setStar(rating.getStar());
        response.setMenteeID(rating.getMenteeRating().getId());
        response.setRateID(rating.getRateID());
        response.setMentorID(rating.getMentorProfile().getMentorID());
        return response;
    }

    @GetMapping("/rating/mentor/{id}")
    public ResponseEntity<List<RatingDTO>> getByMentorID(@PathVariable int id) {
        try {
            List<Rating> ratings = ratingService.getByMentorID(id);
            List<RatingDTO> responseList = new ArrayList<>();
            for (Rating rating : ratings) {
                RatingDTO response = createRatingResponse(rating);
                responseList.add(response);
            }
            return ResponseEntity.ok(responseList);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping("/rating/mentee/{id}")
    public ResponseEntity<List<RatingDTO>> getByMenteeID(@PathVariable int id) {
        try {
            List<Rating> ratings = ratingService.getByMenteeID(id);
            List<RatingDTO> responseList = new ArrayList<>();
            for (Rating rating : ratings) {
                RatingDTO response = createRatingResponse(rating);
                responseList.add(response);
            }
            return ResponseEntity.ok(responseList);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
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
