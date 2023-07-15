package com.swp.hg.repository;

import com.swp.hg.entity.Request;
import com.swp.hg.entity.RequestSkill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestSkillRepository extends JpaRepository<RequestSkill, Integer> {


   void deleteByRequest(Request request);

}
