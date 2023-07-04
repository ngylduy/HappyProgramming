package com.swp.hg.repository;

import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.hibernate.Session;
import org.hibernate.query.NativeQuery;
import org.hibernate.transform.Transformers;
import org.hibernate.type.StandardBasicTypes;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RoleCustomRepo {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Role> getRole(User user){
        StringBuilder sql = new StringBuilder("SELECT r.name as name FROM user u JOIN user_role ur ON u.id = ur.user_id " +
                "JOIN roles r ON ur.role_id = r.id");
        sql.append(" WHERE 1=1");
        if (user.getUsername() != null) {
            sql.append(" AND u.username = :username");
        }
        NativeQuery<Role> query = ((Session) entityManager.getDelegate()).createNativeQuery(sql.toString());
        if (user.getUsername() != null) {
            query.setParameter("username", user.getUsername());
        }
        query.addScalar("name", StandardBasicTypes.STRING);
        query.setResultTransformer(Transformers.aliasToBean(Role.class));

        return query.list();
    }

}
