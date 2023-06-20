package com.swp.hg.controller;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.entity.Rating;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RatingController {
    @Autowired
    private RatingService ratingService;
    @GetMapping("/rating")
    public List<Rating> getAll() {
        return ratingService.getAll();
    }
    @GetMapping("/rating/{id}")
    public List<Rating> getByMentorID(@PathVariable int id) {
        return ratingService.getByMentorID(id);
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
