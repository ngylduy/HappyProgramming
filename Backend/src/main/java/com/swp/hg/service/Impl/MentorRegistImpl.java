package com.swp.hg.service.Impl;

import com.swp.hg.dto.MentorRegistDTO;
import com.swp.hg.entity.MentorRegist;
import com.swp.hg.entity.User;
import com.swp.hg.repository.MentorRegistRepository;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.service.MentorRegistService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MentorRegistImpl implements MentorRegistService {
    private final MentorRegistRepository mentorRegistRepository;

    private final UserRepository userRepository;
    private final UserImpl userImpl;

    @Override
    public void createMentorRegist(int userId) {
        MentorRegist mentorRegist = new MentorRegist();
        mentorRegist.setMentorRegist(userRepository.findUserById(userId));
        mentorRegist.setDate(LocalDateTime.now());
        mentorRegist.setStatus(0);
        mentorRegistRepository.save(mentorRegist);
    }

    @Override
    public void updateMentorRegistStatus(MentorRegistDTO registDTO) {
        MentorRegist mentorRegist = mentorRegistRepository.findByRegistId(registDTO.getRegistID());
        mentorRegist.setStatus(registDTO.getStatus());
        if (registDTO.getStatus() == 1) {
            User user = userRepository.findUserById(mentorRegist.getMentorRegist().getId());
            userImpl.removeRoleFromUser(user.getUsername(), "USER_MENTEE");
            userImpl.addRoleToUser(user.getUsername(), "USER_MENTOR");
            userRepository.save(user);
        }
        mentorRegistRepository.save(mentorRegist);
    }

    @Override
    public List<MentorRegist> getMentorRegistList() {
        return mentorRegistRepository.findAll();
    }


}
