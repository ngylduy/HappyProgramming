package com.swp.hg.repository;

import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MentorProfileRepo extends JpaRepository<MentorProfile, Integer> {

//    MentorProfile findByMentorProfileUserId(int userId);

//    MentorProfile findMentorProfilesBy
}
