package com.swp.hg.service;

import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.SkillCategoryDTO;
import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;

import java.util.List;

public interface UserService {
    List<User> getAll();
    User getById(int id);

    //New added

    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String username, String rolename);
    User getUser(String username);
    List<User> getUsers();
    List<Role> getRoles();
    String signUpUser(User appUser);
    void saveConfirmationToken(User appUser, String token);
    void saveConfirmationTokenResetPassword(User appUser, String token);
    int enableAppUser(String email);
    int activeAppUser(String email);
    String createPasswordResetTokenForUser(int id);

}
