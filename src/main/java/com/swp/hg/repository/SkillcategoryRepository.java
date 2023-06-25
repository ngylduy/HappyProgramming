package com.swp.hg.repository;

import com.swp.hg.entity.SkillCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface SkillcategoryRepository extends JpaRepository<SkillCategory,Long> {


}
