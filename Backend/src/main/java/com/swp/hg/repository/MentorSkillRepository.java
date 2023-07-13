package com.swp.hg.repository;

import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.MentorSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorSkillRepository extends JpaRepository<MentorSkill, Integer> {
    void deleteByMentorProfile(MentorProfile mentorProfile);
}
