package com.swp.hg.service.Impl;

import com.swp.hg.entity.Request;
import com.swp.hg.entity.RequestSkill;
import com.swp.hg.repository.RequestSkillRepository;

import java.util.List;

public class RequestSkillService {

    private  final RequestSkillRepository requestSkillRepository;


    public RequestSkillService(RequestSkillRepository requestSkillRepository) {
        this.requestSkillRepository = requestSkillRepository;
    }

    //get all request skill
    public List<RequestSkill> getAllRequestSkill(){
        try {
            List<RequestSkill> list = requestSkillRepository.findAll();
            return list;
        }catch (Exception e){
            return null;
        }
    }
}
