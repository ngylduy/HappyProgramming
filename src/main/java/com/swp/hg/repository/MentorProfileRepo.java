package com.swp.hg.repository;

import com.swp.hg.entity.MentorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentorProfileRepo extends JpaRepository<MentorProfile, Integer> {

    @Query(value = "select * from mentor_profile  where userid = :id LIMIT 1", nativeQuery = true)
    MentorProfile findMentorProfilesByUserID(@Param("id") int id);

    @Query(value = "select count(*) as total from mentor_profile", nativeQuery = true)
    Integer totalMentor();
    @Query(value = "select mp.*\n" +
            "from mentor_profile mp join mentor_skill ms on mp.mentorid = ms.mentorid join skill_category sc\n" +
            "    on ms.skillid = sc.skillid where ms.skillid = :id", nativeQuery = true)
    List<MentorProfile> findMentorBySkillId(@Param("id") int id);

}
