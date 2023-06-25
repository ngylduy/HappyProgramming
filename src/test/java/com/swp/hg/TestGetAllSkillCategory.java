package com.swp.hg;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillcategoryRepository;
import com.swp.hg.service.SkillcategoryServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;


public class TestGetAllSkillCategory {

    @Mock
    private SkillcategoryRepository skillcategoryRepository;

    @InjectMocks
    private SkillcategoryServiceImpl skillcategoryService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllSkillCategory() {
        // create mock data

        List<SkillCategory> mockSkillCategories = new ArrayList<>();
        SkillCategory mockSkillCategory1 = new SkillCategory();
        SkillCategory mockSkillCategory2 = new SkillCategory();
        mockSkillCategories.add(mockSkillCategory1);
        mockSkillCategories.add(mockSkillCategory2);

        // configure mock repository
        when(skillcategoryRepository.findAll()).thenReturn(mockSkillCategories);

        // call service method
        List<SkillCategory> result = skillcategoryService.getAllSkillCategory();

        // assert result is correct
        assertEquals(2, result.size());
        assertEquals(mockSkillCategory1, result.get(0));
        assertEquals(mockSkillCategory2, result.get(1));
    }
}