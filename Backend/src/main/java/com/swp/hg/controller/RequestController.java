package com.swp.hg.controller;

import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.MentorProfile;
import com.swp.hg.entity.Request;
import com.swp.hg.entity.User;
import com.swp.hg.repository.RequestRepository;
import com.swp.hg.response.ApiResponse;
import com.swp.hg.response.RequestResponse;
import com.swp.hg.service.Impl.MentorProfileServiceImpl;
import com.swp.hg.service.Impl.RequestService;
import com.swp.hg.service.Impl.UserImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/request")
@CrossOrigin
@RequiredArgsConstructor
public class RequestController {

    private final RequestService requestService;
    private final RequestRepository requestRepository;
    private final MentorProfileServiceImpl mentorProfileService;
    private final UserImpl userService;


    //list all request (for Admin)
    @GetMapping("/getall")
    public List<Request> listRequest(){
        return requestService.getALlRequest();
    }


    //get request by  request id
    @GetMapping("/{requestId}")
    public ResponseEntity<RequestResponse> getRequestDetails(@PathVariable int requestId) {
        try {
            Request request = requestService.getRequestByRequestId(requestId);
            if (request != null) {
                User mentee = userService.getById(request.getUsers().getId());
                MentorProfile mentor = mentorProfileService.getByMentorID(request.getMentorProfile().getMentorID());

                RequestResponse response = new RequestResponse();
                response.setRequestId(request.getRequestID());
                response.setDate(request.getDate());
                response.setStatus(request.getStatus());
                response.setLink(request.getLink());
                response.setTitle(request.getTitle());
                response.setContent(request.getContent());
                response.setMentorStatus(request.getMentorStatus());
                response.setMenteeId(mentee != null ? mentee.getId() : null);
                response.setMentorId(mentor != null ? mentor.getMentorID() : null);

                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    //get list request by mentor id
    @GetMapping("/getbymentor/{mentorID}")
    public ResponseEntity<?> getRequestByMentorId(@PathVariable int mentorID){
        try {
            List<Request> requests = requestRepository.findByMentorProfile_MentorID(mentorID);
            List<RequestResponse> responseList = new ArrayList<>();
            for (Request request : requests) {
                RequestResponse response = createRequestResponse(request);
                responseList.add(response);
            }
            return ResponseEntity.ok(responseList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }

    //get list request by user id
    @GetMapping("/getbyuser/{userID}")
    public ResponseEntity<List<RequestResponse>> getRequestsByUserId(@PathVariable int userID) {
        try {
            List<Request> requests = requestRepository.findByUsersId(userID);
            List<RequestResponse> responseList = new ArrayList<>();

            for (Request request : requests) {
                RequestResponse response = createRequestResponse(request);
                responseList.add(response);
            }

            return ResponseEntity.ok(responseList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private RequestResponse createRequestResponse(Request request) {
        RequestResponse response = new RequestResponse();
        response.setRequestId(request.getRequestID());
        response.setDate(request.getDate());
        response.setStatus(request.getStatus());
        response.setLink(request.getLink());
        response.setTitle(request.getTitle());
        response.setContent(request.getContent());
        response.setMentorStatus(request.getMentorStatus());
        response.setMenteeId(request.getUsers().getId());
        response.setMentorId(request.getMentorProfile().getMentorID());

        return response;
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

    @PutMapping("/{requestId}/{status}")
    public ResponseEntity<ApiResponse>updateRequestByMentor(@PathVariable int requestId,@PathVariable int status){
        ApiResponse apiResponse = requestService.updateStatus(requestId,status);
        if(apiResponse.isSuccess()){
            return ResponseEntity.ok(apiResponse);
        }else{
            return  ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(apiResponse);
        }
    }

}
