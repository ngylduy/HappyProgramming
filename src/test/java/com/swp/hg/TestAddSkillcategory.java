package com.swp.hg;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillcategoryRepository;
import com.swp.hg.service.SkillcategoryServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.jupiter.api.Assertions.*;



@RunWith(SpringRunner.class)
@SpringBootTest
public class TestAddSkillcategory {

    @Autowired
    private SkillcategoryServiceImpl skillCategoryService;

    // Write a test method for the addCategory() method
    @Test
    public void testAddCategory() {
        // Create a new SkillCategory object to save
        SkillCategory category = new SkillCategory();
        category.setSkillName("Test Category");

        // Call the addCategory() method and save the returned object
        SkillCategory savedCategory = skillCategoryService.addCategory(category);

        // Verify that the saved object is not null
        assertNotNull(savedCategory);

        // Verify that the saved object's name matches the original object's name
        assertEquals("Test Category", savedCategory.getSkillName());

        // Optional: Verify other properties of the saved object if applicable
    }
}

