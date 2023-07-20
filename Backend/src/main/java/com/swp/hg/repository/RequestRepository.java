package com.swp.hg.repository;

import com.swp.hg.dto.RequestDTO;
import com.swp.hg.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {

    //get list request by mentor id
    List<Request> findByMentorProfile_MentorID(int id);

    //get list request by user id
    List<Request> findByUsersId(int id);

    @Query(value ="select * from request", nativeQuery = true)
    List<Request> getAllRequest();

    //get Request
    Request getRequestsByRequestID(int id);

    //find by request id
    Request findByRequestID(int id);

//    @Query(value ="select * from mentor_profile  where userid = :id", nativeQuery = true)
//    MentorProfile findMentorProfilesByUserID(@Param("id") int id);
    List<Request> findByStatus(int status);

    int countRequestByStatus(int status);
}
