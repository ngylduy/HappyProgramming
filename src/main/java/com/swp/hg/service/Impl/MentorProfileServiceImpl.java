package com.swp.hg.service.Impl;

import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.repository.MentorProfileRepository;
import com.swp.hg.service.MentorProfileService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorProfileServiceImpl implements MentorProfileService {

    private final MentorProfileRepository mentorProfileRepository;


    public MentorProfileServiceImpl(MentorProfileRepository mentorProfileRepository) {
        this.mentorProfileRepository = mentorProfileRepository;
    }

    @Override
    public SearchResultDTO<MentorProfileDTO> search(MentorProfileDTO mentorProfileDTO){

        List<MentorProfileDTO> list;
        SearchResultDTO<MentorProfileDTO> dto =  new SearchResultDTO<>();
        try {
            list = mentorProfileRepository.paging(mentorProfileDTO);
            Integer total = mentorProfileRepository.doSearch(mentorProfileDTO).size();
            dto.setData(list);
            dto.setTotalRecord(total);
            dto.setStatus(true);

        }catch (Exception e){
            dto.setData(null);
            dto.setStatus(false);
            dto.setTotalRecord(0);
        }
        return  dto;
    }


}
