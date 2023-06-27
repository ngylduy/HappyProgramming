package com.swp.hg.repository;

import com.swp.hg.entity.MentorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorProfileRepo extends JpaRepository<MentorProfile, Integer> {

   @Query(value ="select * from mentor_profile  where userid = :id LIMIT 1", nativeQuery = true)
    MentorProfile findMentorProfilesByUserID(@Param("id") int id);

   @Query(value = "select count(*) as total from mentor_profile" , nativeQuery = true)
   Integer totalMentor();

}
