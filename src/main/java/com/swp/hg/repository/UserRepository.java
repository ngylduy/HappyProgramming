package com.swp.hg.repository;


import com.swp.hg.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findOneByUsernameAndPassword(String username , String password);

    User findByUsername(String username);

    User findByEmail(String email);

    User findByPhone(String phone);

    User findById(int id);


}
