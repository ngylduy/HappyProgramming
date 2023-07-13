package com.swp.hg.repository;

import com.swp.hg.entity.MentorRegist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorRegistRepository extends JpaRepository<MentorRegist, Integer> {

    @Query(value = "select m from MentorRegist m where m.registID = ?1")
    MentorRegist findByRegistId(int id);
}
