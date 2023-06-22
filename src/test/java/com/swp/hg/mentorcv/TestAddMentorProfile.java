package com.swp.hg.mentorcv;

import com.swp.hg.dto.MentorCVDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.MentorSkill;
import com.swp.hg.entity.SkillCategory;
import com.swp.hg.entity.User;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.repository.MentorSkillRepository;
import com.swp.hg.repository.SkillCategoryRepository;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.service.MentorCVService;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class TestAddMentorProfile {
    @Mock
    private MentorProfileRepo mentorProfileRepo;

    @Mock
    private MentorSkillRepository mentorSkillRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private SkillCategoryRepository skillCategoryRepository;


    @InjectMocks
    private MentorCVService mentorCVService;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        userRepository = Mockito.mock(UserRepository.class);


    }

    @Test
    public void testAddMentorCV_Success() {
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();
        User user = new User();
        when(userRepository.findById(mentorCVDTO.getUserid())).thenReturn(Optional.of(user));
        when(skillCategoryRepository.findById(any(Integer.class))).thenReturn(Optional.of(new SkillCategory()));
        when(mentorProfileRepo.save(any(MentorProfile.class))).thenReturn(new MentorProfile());
        when(mentorSkillRepository.save(any(MentorSkill.class))).thenReturn(new MentorSkill());

        ResponseEntity<?> responseEntity = mentorCVService.addMentorCV(mentorCVDTO);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Mentor CV added successfully", responseEntity.getBody());
    }

    @Test
    public void testAddMentorCV_InvalidYearsOfExp() {
        MentorCVDTO mentorCVDTO = createMockMentorCVDTO();
        mentorCVDTO.setYearOfExp(-1);


        ResponseEntity<?> responseEntity = mentorCVService.addMentorCV(mentorCVDTO);

        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());

    }

    private MentorCVDTO createMockMentorCVDTO() {
        MentorCVDTO mentorCVDTO = new MentorCVDTO();
        mentorCVDTO.setAvatar("avatar");
        mentorCVDTO.setIntroduction("introduction");
        mentorCVDTO.setLinkedln("linkedin");
        mentorCVDTO.setGithub("github");
        mentorCVDTO.setProfession("profession");
        mentorCVDTO.setUserid(1);
        mentorCVDTO.setSkillId(List.of(1, 2, 3));
        mentorCVDTO.setYearOfExp(6);
        mentorCVDTO.setDescription("description");
        return mentorCVDTO;
    }



}