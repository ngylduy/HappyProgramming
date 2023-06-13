package com.swp.hg.service;

import com.swp.hg.dto.MentorProfileDTO;
import com.swp.hg.dto.SearchResultDTO;
import com.swp.hg.repository.MentorProfileRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorProfileService {

    private final MentorProfileRepository mentorProfileRepository;


    public MentorProfileService(MentorProfileRepository mentorProfileRepository) {
        this.mentorProfileRepository = mentorProfileRepository;
    }

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
