package com.swp.hg.repository;

import com.swp.hg.entity.SkillCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SkillCategoryRepository extends JpaRepository<SkillCategory, Integer> {
    Optional<SkillCategory> findBySkillID(Integer id);


    List<SkillCategory> findAll();

    SkillCategory save(SkillCategory skillCategory);

//    void deleteBySkillID(Integer id);

}
