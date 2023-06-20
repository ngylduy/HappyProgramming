package com.swp.hg.repository;

import com.swp.hg.entity.MentorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorProfileRepository extends JpaRepository<MentorProfile, Integer> {
}
