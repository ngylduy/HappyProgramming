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
    boolean existsByUsernameAndPassword(String username, String password);
    User findByEmail(String email);
    User findByPhone(String phone);
    User findTopByOrderByIdDesc();
    User findUserByUsername(String username);

    @Modifying
    @Query("UPDATE User user SET user.status = false WHERE user.id = ?1")
    int deactive(Long id);
    @Transactional
    @Modifying
    @Query("UPDATE User a SET a.status=true, a.status=true WHERE a.email=?1")
    int enableAppUser(String email);
    @Query("UPDATE User a SET a.status=true WHERE a.email=?1")
    int activeAppUser(String email);

}
