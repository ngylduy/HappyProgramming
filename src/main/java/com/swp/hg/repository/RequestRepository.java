package com.swp.hg.repository;

import com.swp.hg.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequestRepository extends JpaRepository<Request, Integer> {


    //get list request by mentor id
    List<Request> findByMentorProfile_MentorID(int id);

    //get list request by user id
    List<Request> findByUsersId(int id);


    //get Request
    Request getRequestsByRequestID(int id);

    //find by request id
    Request findByRequestID(int id);

//    @Query(value ="select * from mentor_profile  where userid = :id", nativeQuery = true)
//    MentorProfile findMentorProfilesByUserID(@Param("id") int id);



}
