package com.swp.hg;

import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillcategoryRepository;
import com.swp.hg.service.SkillcategoryServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestUpdateSkillcategory {
    @Autowired
    private SkillcategoryRepository skillCategoryRepository;

    @Autowired
    private SkillcategoryServiceImpl skillCategoryService;

    @Test
    public void testUpdateCategory() {
        // Create a new skill category
        SkillCategory category = new SkillCategory();
        category.setSkillName("Java");
        SkillCategory savedCategory = skillCategoryRepository.save(category);

        // Update the skill category name
        SkillCategory updatedCategory = new SkillCategory();
        updatedCategory.setSkillName("Python");

        SkillCategory result = skillCategoryService.updateCategory(savedCategory.getSkillID(), updatedCategory);

        // Verify that the skill category has been updated
        assertNotNull(result);
        assertEquals(updatedCategory.getSkillName(), result.getSkillName());
    }
}
