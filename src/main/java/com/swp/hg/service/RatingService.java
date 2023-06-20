package com.swp.hg.service;

import com.swp.hg.dto.RatingDTO;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.Rating;
import com.swp.hg.entity.SkillCategory;
import org.springframework.stereotype.Service;

import java.util.List;

public interface RatingService {
    List<Rating> getAll();
    List<Rating> getByMenteeID(int id);
    List<Rating> getByMentorID(int id);
    ResultDTO<Rating> saveOrUpdate(RatingDTO ratingDTO);
    Rating delete(int id);
    Rating getById(int id);
}
