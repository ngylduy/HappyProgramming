package com.swp.hg.service.Impl;

import com.swp.hg.config.MentorStatusConfig;
import com.swp.hg.config.StatusRequestConfig;
import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.*;
import com.swp.hg.repository.*;
import com.swp.hg.response.ApiResponse;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Collection;
import java.util.List;

@Service
public class RequestService {


    private final RequestRepository requestRepository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final MentorProfileRepo mentorProfileRepo;
    @Autowired
    private final SkillCategoryRepository skillCategoryRepository;
    @Autowired
    private final RequestSkillRepository requestSkillRepository;

    public RequestService(RequestRepository requestRepository, UserRepository userRepository, MentorProfileRepo mentorProfileRepo, SkillCategoryRepository skillCategoryRepository, RequestSkillRepository requestSkillRepository) {
        this.requestRepository = requestRepository;

        this.userRepository = userRepository;
        this.mentorProfileRepo = mentorProfileRepo;
        this.skillCategoryRepository = skillCategoryRepository;
        this.requestSkillRepository = requestSkillRepository;
    }

    //list all request
    public List<Request> getALlRequest(){
        try {
            List<Request> list = requestRepository.findAll();
            return list;
        }catch (Exception e){
            return null;
        }
    }
    //get request by request id
    public Request getRequestByRequestId(int id){
        try{
            Request request = requestRepository.findByRequestID(id);
            return request;
        }catch (Exception e){
            return null;
        }
    }
    //list request by id
    public List<Request> getALlRequestById(List<Integer> id){
        try {
            List<Request> list = requestRepository.findAllById(id);
            return list;
        }catch (Exception e){
            return null;
        }

    }
    //delete request
    public void deleteRequest(int requestID){
        Request request = requestRepository.getRequestsByRequestID(requestID);
        requestRepository.delete(request);
    }

    //delete request skills
    public void deleteRequestSkill(int requestID){
        Request request = requestRepository.getRequestsByRequestID(requestID);
        if(request!=null){
            Collection<RequestSkill> requestSkills = request.getRequestSkills();
            for (RequestSkill requestSkill:requestSkills) {
                requestSkillRepository.delete(requestSkill);
            }
        }
    }

    //add request
    public ApiResponse addRequest(int mentorID,int userID, RequestDTO requestDTO){
        try {
            Request request = new Request();

            if (requestDTO.getTitle() == null && requestDTO.getContent() == null) {
                return new ApiResponse(false,"Title and Content is null");
            }

            if (requestDTO.getContent() == null || requestDTO.getContent().isEmpty()) {
                return new ApiResponse(false,"Content is null");
            }

            if (requestDTO.getTitle() == null || requestDTO.getTitle().isEmpty()) {
                return new ApiResponse(false,"Title is null");
            }

            request.setTitle(requestDTO.getTitle());
            request.setContent(requestDTO.getContent());
            request.setDate(new Date(System.currentTimeMillis()));
            request.setLink(requestDTO.getLink());
            User user = userRepository.findById(userID).orElse(null);
            request.setUsers(user);
            MentorProfile mentorProfile = mentorProfileRepo.findById(mentorID).orElse(null);
            request.setMentorProfile(mentorProfile);
            request.setMentorStatus(MentorStatusConfig.PENDING.getValue());
            request.setStatus(StatusRequestConfig.PROCESSING.getValue());

            if (!request.getContent().isEmpty() || !request.getTitle().isEmpty()) {

                //save request
                requestRepository.save(request);

                for (Integer skillId : requestDTO.getSkillId()) {
                    RequestSkill requestSkill = new RequestSkill();
                    requestSkill.setRequest(request);
                    SkillCategory skillCategory = skillCategoryRepository.findById(skillId).orElse(null);
                    requestSkill.setSkillCategory(skillCategory);
                    requestSkillRepository.save(requestSkill);
                }

                return new ApiResponse(true,"Add request successfully");

            }else{
                return new ApiResponse(false,"Fail to add request");
            }

        }catch (Exception e){

            return new ApiResponse(false,"Fail to add request");
        }
    }

    //update request
    @Transactional
    public ApiResponse updateRequest(int userID, int requestID, RequestDTO requestDTO){
              Request request = requestRepository.findByRequestID(requestID);
        try {

            if (requestDTO.getTitle() == null && requestDTO.getContent() == null) {
                return new ApiResponse(false,"Title and Content is null");
            }

            if (requestDTO.getContent() == null || requestDTO.getContent().isEmpty()) {
                return new ApiResponse(false,"Content is null");
            }

            if (requestDTO.getTitle() == null || requestDTO.getTitle().isEmpty()) {
                return new ApiResponse(false,"Title is null");
            }

            request.setTitle(requestDTO.getTitle());
            request.setContent(requestDTO.getContent());
            request.setDate(new Date(System.currentTimeMillis()));
            request.setLink(requestDTO.getLink());
            User user = userRepository.findById(userID).orElse(null);
            request.setUsers(user);
            MentorProfile mentorProfile = mentorProfileRepo.findById(requestDTO.getMentorId()).orElse(null);
            request.setMentorProfile(mentorProfile);
            request.setMentorStatus(MentorStatusConfig.PENDING.getValue());
            request.setStatus(StatusRequestConfig.PROCESSING.getValue());

            if (!request.getContent().isEmpty() || !request.getTitle().isEmpty()) {

                //save request
                requestRepository.save(request);

                //delete old request skill
                requestSkillRepository.deleteByRequest(request);

                for (Integer skillId : requestDTO.getSkillId()) {
                    RequestSkill requestSkill = new RequestSkill();
                    requestSkill.setRequest(request);
                    SkillCategory skillCategory = skillCategoryRepository.findById(skillId).orElse(null);
                    requestSkill.setSkillCategory(skillCategory);
                    requestSkillRepository.save(requestSkill);
                }

                return new ApiResponse(true,"Update Request successfully");

            }else{
                return new ApiResponse(false,"Fail to update Request");
            }

        }catch (Exception e){

            return new ApiResponse(false,"Fail to update request");
        }
    }
    public ApiResponse updateStatus(int requestId, int status){
        Request request = requestRepository.findByRequestID(requestId);
        if(request!=null){
            request.setStatus(status);
            requestRepository.save(request);
            return new ApiResponse(true,"Update Request successfully");
        }else{
            return new ApiResponse(false,"Fail to update request");
        }
    }
    public List<Request> getRequestByStatus(int status){
        try {
            List<Request> list = requestRepository.findByStatus(status);
            return list;
        }catch (Exception e){
            return null;
        }
    }

    public int getCountRequestByStatus(int status){
        return requestRepository.countRequestByStatus(status);
    }
    

}
