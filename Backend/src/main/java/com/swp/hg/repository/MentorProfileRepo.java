package com.swp.hg.repository;

import com.swp.hg.entity.MentorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MentorProfileRepo extends JpaRepository<MentorProfile, Integer> {

    @Query(value = "select mp.* from mentor_profile mp join user u on mp.userid = u.id " +
            "join mentor_regist m on m.menteeid = u.id " +
            "where m.status = 1", nativeQuery = true)
    List<MentorProfile> getMentorProfileByStatus();

    @Query(value = "select * from mentor_profile where userid = :id LIMIT 1", nativeQuery = true)
    MentorProfile findMentorProfilesByUserID(@Param("id") int id);

    @Query(value = "select count(*) as total from mentor_profile", nativeQuery = true)
    Integer totalMentor();
    @Query(value = "select mp.* from mentor_profile mp join mentor_skill ms on mp.mentorid = ms.mentorid join skill_category sc\n" +
            " on ms.skillid = sc.skillid where ms.skillid = :id", nativeQuery = true)
    List<MentorProfile> findMentorBySkillId(@Param("id") int id);

    @Query(value = "select * from mentor_profile  where mentorid = :id LIMIT 1", nativeQuery = true)
    MentorProfile findMentorProfilesByMentorID(@Param("id") int id);

}
