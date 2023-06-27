package com.swp.hg.repository;

import com.swp.hg.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
    User findByEmail(String email);
    User findUserByUsername(String username);

    @Modifying
    @Query("UPDATE User u SET u.status = false WHERE u.id = ?1")
    void deactive(Long id);

    @Transactional
    @Modifying
    @Query("UPDATE User u SET u.status=true WHERE u.email = ?1")
    void enableAppUser(String email);

}
