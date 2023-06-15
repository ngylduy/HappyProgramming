package com.swp.hg.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MentorProfileServiceTest {

    MentorProfileDTO mentorProfileDTO;

    @BeforeEach
    void setUp() {
        mentorProfileDTO = new MentorProfileDTO();
    }

    @Test
    void search() {
        mentorProfileDTO.setKeyword("Khanh");

    }
}