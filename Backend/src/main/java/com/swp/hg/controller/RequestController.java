package com.swp.hg.controller;

import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.Request;
import com.swp.hg.repository.RequestRepository;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.service.Impl.RequestService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/request")
@CrossOrigin
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


    //get request by  request id
    @GetMapping("/{id}")
    public Request getRequestByRequestId(@PathVariable int id){
        return requestService.getRequestByRequestId(id);
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

    //add new request by user id
    @PostMapping("/add/{mentorid}/{userid}")
    public ResponseEntity<ApiResponse> addRequest(@PathVariable int mentorid , @PathVariable int userid, @RequestBody RequestDTO requestDTO) {
        ApiResponse apiResponse = requestService.addRequest(mentorid,userid,requestDTO);
        if(apiResponse.isSuccess()){
            return ResponseEntity.ok(apiResponse);
        }else{
            return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
        }
    }


    // delete request by request id
    @DeleteMapping("/delete/{requestid}")
    public ResponseEntity<ApiResponse> deleteRequest(@PathVariable int requestid){
        try {
             requestService.deleteRequest(requestid);
             requestService.deleteRequestSkill(requestid);
            return ResponseEntity.ok(new ApiResponse(true,"Delete request successfully"));
        }catch(Exception e){
            String errorMessage = "Failed to delete Request";
            return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(false, errorMessage));
        }
    }


    //update request by user id
    @PutMapping ("/update/{userid}/{requestid}")
    public ResponseEntity<ApiResponse> updateRequest(@PathVariable int userid,@PathVariable int requestid, @RequestBody RequestDTO requestDTO) {
        ApiResponse apiResponse = requestService.updateRequest(userid,requestid,requestDTO);
        if(apiResponse.isSuccess()){
            return ResponseEntity.ok(apiResponse);
        }else{
            return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
        }
    }



}
