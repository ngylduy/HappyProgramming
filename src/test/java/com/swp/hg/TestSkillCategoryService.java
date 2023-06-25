package com.swp.hg;

import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillcategoryRepository;
import com.swp.hg.service.SkillcategoryServiceImpl;
import org.junit.Test;
import static org.junit.Assert.*;

import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestSkillCategoryService {

    @Autowired
    private SkillcategoryRepository skillCategoryRepository;

    @Autowired
    private SkillcategoryServiceImpl skillCategoryService;

    @Test
    public void testDeleteSkillcategory() {
        // create a new skill category and save it to the database
        SkillCategory newSkillCategory = new SkillCategory();
        newSkillCategory.setSkillName("TestCategory");
        skillCategoryRepository.save(newSkillCategory);

        // attempt to delete the newly created skill category
        boolean result = skillCategoryService.deleteSkillcategory(newSkillCategory.getSkillID());

        // assert that the skill category was successfully deleted
        assertTrue(result);
        assertNull(skillCategoryRepository.findById(newSkillCategory.getSkillID()).orElse(null));
    }
}
