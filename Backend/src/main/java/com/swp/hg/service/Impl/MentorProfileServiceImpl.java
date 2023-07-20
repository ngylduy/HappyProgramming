package com.swp.hg.service.Impl;

import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.repository.MentorProfileRepo;
import com.swp.hg.repository.MentorProfileRepository;
import com.swp.hg.service.MentorProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MentorProfileServiceImpl implements MentorProfileService {

    private final MentorProfileRepository mentorProfileRepository;
    private final MentorProfileRepo mentorProfileRepo;

    @Override
    public SearchResultDTO<MentorProfileDTO> search(MentorProfileDTO mentorProfileDTO) {

        List<MentorProfileDTO> list;
        SearchResultDTO<MentorProfileDTO> dto = new SearchResultDTO<>();
        try {
            list = mentorProfileRepository.paging(mentorProfileDTO);
            Integer total = mentorProfileRepository.doSearch(mentorProfileDTO).size();
            dto.setData(list);
            dto.setTotalRecord(total);
            dto.setStatus(true);
        } catch (Exception e) {
            dto.setData(null);
            dto.setStatus(false);
            dto.setTotalRecord(0);
        }
        return dto;
    }
    @Override
    public List<MentorProfile> getMentors() {
        return mentorProfileRepo.findAll();
    }
    @Override
    public MentorProfile getById(int id) {
        return mentorProfileRepo.findMentorProfilesByUserID(id);
    }

    @Override
    public MentorProfile getByMentorID(int id) {
        return mentorProfileRepo.findMentorProfilesByMentorID(id);
    }

    @Override
    public List<MentorProfile> getActiveMentors() {
        return mentorProfileRepo.getMentorProfileByStatus();
    }
}
