package com.swp.hg.controller;

import com.swp.hg.entity.Request;
import com.swp.hg.repository.RequestRepository;
import com.swp.hg.service.RequestService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/request")
public class RequestController {

    private final RequestService requestService;

    private final RequestRepository requestRepository;

    public RequestController(RequestService requestService, RequestRepository requestRepository) {
        this.requestService = requestService;
        this.requestRepository = requestRepository;
    }

    //list all request (for Admin)
    @GetMapping("/getall")
    public List<Request> listRequest(){
        return requestService.getALlRequest();
    }

    //get request by  id (for mentee or admin)
    @GetMapping("/{id}")
    public List<Request> getRequestByID(@PathVariable List<Integer> id){
        return requestService.getALlRequestById(id);
    }

    //get list request by mentor id
    @GetMapping("/getbymentor/{mentorID}")
    public List<Request> getRequestByMentorId(@PathVariable int mentorID){
        return requestRepository.findByMentorProfile_MentorID(mentorID);
    }

    //get list request by user id
    @GetMapping("/getbyuser/{userID}")
    public List<Request> getRequestByUserId(@PathVariable int userID){
        return requestRepository.findByUsersId(userID);
    }




}
