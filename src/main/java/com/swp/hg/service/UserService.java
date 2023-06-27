package com.swp.hg.service;

import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;

import java.util.List;

public interface UserService {
    User getById(int id);

    List<User> getListUserByRole(String role_name);

    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String role_name);
    void removeRoleFromUser(String username, String role_name);
    User getUser(String username);
    List<User> getUsers();
    List<Role> getRoles();
    String signUpUser(User appUser);
    void saveConfirmationToken(User appUser, String token);
    void saveConfirmationTokenResetPassword(User appUser, String token);
    void enableAppUser(String email);
    String createPasswordResetTokenForUser(int id);

}
