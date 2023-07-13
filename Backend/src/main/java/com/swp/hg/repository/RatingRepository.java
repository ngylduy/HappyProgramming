package com.swp.hg.repository;

import com.swp.hg.entity.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Integer> {
    @Query("SELECT r FROM Rating r WHERE r.mentorProfile.mentorID = :id")
    List<Rating> findAllByMentorId(@Param("id") Integer id);

    @Query("SELECT r FROM Rating r WHERE r.menteeRating.id = :id")
    List<Rating> findAllByMenteeId(@Param("id") Integer id);
}
