package com.swp.hg.repository;

import com.swp.hg.entity.Rating;
import com.swp.hg.entity.Request;
import com.swp.hg.entity.RequestSkill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;
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


//    select requestid from request_skill where request_skillid=2
    @Query(value = "select r.skillid from request_skill r where r.request_skillid=:id", nativeQuery = true)
    List<Integer> getSkillIdByRequestSkillId(@Param("id") Collection<RequestSkill> requestSkillId);

//    @Query(value ="select * from mentor_profile  where userid = :id", nativeQuery = true)
//    MentorProfile findMentorProfilesByUserID(@Param("id") int id);



}
