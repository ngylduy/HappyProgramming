package com.swp.hg.controller;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.Rating;
import com.swp.hg.service.RatingService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
@RequiredArgsConstructor
public class RatingController {

    private final RatingService ratingService;

    @GetMapping("/rating")
    public List<Rating> getAll() {
        return ratingService.getAll();
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
