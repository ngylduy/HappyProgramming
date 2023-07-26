package com.swp.hg.service.Impl;

import com.swp.hg.entity.SkillCategory;
import com.swp.hg.repository.SkillCategoryRepository;
import com.swp.hg.service.SkillCategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class SkillCategoryImplTest {

    @Mock
    private SkillCategoryRepository skillCategoryRepository;

    @InjectMocks
    private SkillCategoryImpl skillCategoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void delete() {

        List<SkillCategory> expected = new ArrayList<>();

        SkillCategory category1 = new SkillCategory();
        category1.setSkillID(1);
        category1.setSkillName("Java");
        category1.setStatus(true);

        SkillCategory category2 = new SkillCategory();
        category2.setSkillID(2);
        category2.setSkillName("Python");
        category2.setStatus(false);

        expected.add(category1);
        expected.add(category2);

        when(skillCategoryRepository.findAll()).thenReturn(expected);

        List<SkillCategory> actual = skillCategoryService.getAll();

        assertEquals(expected, actual);
    }
}