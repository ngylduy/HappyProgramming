package com.swp.hg.repository;

import com.swp.hg.dto.MentorProfileDTO;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.hibernate.Session;
import org.hibernate.query.NativeQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MentorProfileRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<MentorProfileDTO> doSearch(MentorProfileDTO mentorProfileDTO){
        StringBuilder sql = new StringBuilder();

        sql.append("select mp.avatar, u.fullname , mp.introduction, mp.git_hub, r.star, r.comment, ms.description, sk.skill_name from mentor_profile mp join rating r on mp.mentorID = r.mentorID join mentor_skill ms on mp.mentorID = ms.mentorID join  skill_category sk on sk.skillID = ms.skillID join user u on mp.userid = u.id");

        sql.append(" where 1=1 ");


        if(mentorProfileDTO.getKeyword()!=null){
            sql.append("And u.fullname like CONCAT('%',(:name),'%')");
        }

        NativeQuery<MentorProfileDTO> query = ((Session) entityManager.getDelegate()).createNativeQuery(sql.toString());

        if(mentorProfileDTO.getKeyword()!=null){
            query.setParameter("name", mentorProfileDTO.getKeyword());
        }

        query.addScalar("avatar", StandardBasicTypes.STRING);
        query.addScalar("fullname", StandardBasicTypes.STRING);
        query.addScalar("introduction", StandardBasicTypes.STRING);
        query.addScalar("git_hub", StandardBasicTypes.STRING);
        query.addScalar("star", StandardBasicTypes.INTEGER);
        query.addScalar("comment", StandardBasicTypes.STRING);
        query.addScalar("description", StandardBasicTypes.STRING);
        query.addScalar("skill_name", StandardBasicTypes.STRING);
//        query.addScalar("years_of_exp", StandardBasicTypes.INTEGER);

        query.setResultTransformer(Transformers.aliasToBean(MentorProfileDTO.class));


        return query.list();

    }

    public List<MentorProfileDTO> paging(MentorProfileDTO mentorProfileDTO){
        StringBuilder sql = new StringBuilder();

        sql.append("select mp.avatar, u.fullname , mp.introduction, mp.git_hub, r.star, r.comment, ms.description, sk.skill_name from mentor_profile mp join rating r on mp.mentorID = r.mentorID join mentor_skill ms on mp.mentorID = ms.mentorID join  skill_category sk on sk.skillID = ms.skillID join user u on mp.userid = u.id");

        sql.append(" where 1=1 ");


        if(mentorProfileDTO.getKeyword()!=null){
            sql.append(" And u.fullname like CONCAT('%',(:name),'%') ");
        }

        NativeQuery<MentorProfileDTO> query = ((Session) entityManager.getDelegate()).createNativeQuery(sql.toString());

        if(mentorProfileDTO.getKeyword()!=null){
            query.setParameter("name", mentorProfileDTO.getKeyword());
        }

        query.addScalar("avatar", StandardBasicTypes.STRING);
        query.addScalar("fullname", StandardBasicTypes.STRING);
        query.addScalar("introduction", StandardBasicTypes.STRING);
        query.addScalar("git_hub", StandardBasicTypes.STRING);
        query.addScalar("star", StandardBasicTypes.INTEGER);
        query.addScalar("comment", StandardBasicTypes.STRING);
        query.addScalar("description", StandardBasicTypes.STRING);
        query.addScalar("skill_name", StandardBasicTypes.STRING);
        //       query.addScalar("years_of_exp", StandardBasicTypes.INTEGER);

        query.setResultTransformer(Transformers.aliasToBean(MentorProfileDTO.class));

        if(String.valueOf(mentorProfileDTO.getCurrentPage())!=null){
            query.setMaxResults(mentorProfileDTO.getItemPerPage()); //lay ra bn mentor
            query.setFirstResult((mentorProfileDTO.getCurrentPage()-1)*mentorProfileDTO.getItemPerPage()); //lay ra phan tu o khoang nao

        }

        return query.list();

    }
}
