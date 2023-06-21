package com.swp.hg.service;

import com.swp.hg.entity.Request;
import com.swp.hg.repository.RequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {


    private final RequestRepository requestRepository;

    public RequestService(RequestRepository requestRepository) {
        this.requestRepository = requestRepository;
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

    //list request by id
    public List<Request> getALlRequestById(List<Integer> id){
        try {
            List<Request> list = requestRepository.findAllById(id);
            return list;
        }catch (Exception e){
            return null;
        }
    }


    

}
