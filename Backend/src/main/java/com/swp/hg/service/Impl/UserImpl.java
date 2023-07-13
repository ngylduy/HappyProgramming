package com.swp.hg.service.Impl;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.PasswordResetToken;
import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;
import com.swp.hg.repository.RoleCustomRepo;
import com.swp.hg.repository.RoleRepository;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.service.UserService;
import com.swp.hg.token.ConfirmationToken;
import com.swp.hg.token.ConfirmationTokenService;
import com.swp.hg.validate.Validate;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    private final PasswordEncoder passwordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final ConfirmationTokenResetPasswordService confirmationTokenResetPasswordService;
    private final RoleCustomRepo roleCustomRepo;

    @Override
    public User getById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public ResultDTO<User> updateUser(UserDTO user) {
        ResultDTO<User> resultDTO = new ResultDTO<>();
        User newUser = getById(user.getId());
        newUser.setAddress(user.getAddress());
        newUser.setDob(user.getDob());
        newUser.setFullname(user.getFullname());
        newUser.setGender(user.isGender());
        newUser.setPhone(user.getPhone());

        userRepository.save(newUser);

        resultDTO.setStatus(true);
        resultDTO.setData(newUser);
        resultDTO.setMessage("Saved Successfully");

        return resultDTO;
    }

    @Override
    public List<User> getListUserByRole(String role_name) {
        return userRepository.findByRoles_Name(role_name);
    }

    @Override
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String role_name) {
        User user = userRepository.findByUsername(username).get();
        Role role = roleRepository.findByName(role_name);
        user.getRoles().add(role);
    }

    @Override
    public void removeRoleFromUser(String username, String role_name) {
        User user = userRepository.findByUsername(username).get();
        Role role = roleRepository.findByName(role_name);
        user.getRoles().remove(role);
    }

    @Override
    public User getUser(String username) {
        return userRepository.findByUsername(username).get();
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user;

        if (Validate.validateEmail(username)) {
            user = userRepository.findByEmail(username);
            username = user.getUsername();
        } else {
            user = userRepository.findUserByUsername(username);
            username = user.getUsername();
        }

        if (user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        } else if (!user.isStatus()) {
            log.error("User is deactive");
            throw new UsernameNotFoundException("User is deactive");
        } else {
            log.info("User found in the database: {}", username);
        }
        if (!user.isEnabled()) {
            log.error("Account is enabled");
            throw new UsernameNotFoundException("Account is enabled, verify");
        }
        List<Role> role = null;
        if (user != null) {
            role = roleCustomRepo.getRole(user);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();


        Set<Role> set = new HashSet<>();

        role.stream().forEach(c -> set.add(new Role(c.getName())));

        user.setRoles(set);

        set.stream().forEach(i -> authorities.add(new SimpleGrantedAuthority(i.getName())));

        Map<String, String> map = new HashMap<>();

        map.put("username", user.getUsername());
        map.put("name", user.getFullname());

        String userPayload = "";
        try {
            userPayload = new ObjectMapper().writeValueAsString(map);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }

        return new org.springframework.security.core.userdetails.User(userPayload, user.getPassword(), authorities);
    }

    public User takeUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User not found in the database");
        } else if (!user.isStatus()) {
            log.error("User is deactivate");
            throw new UsernameNotFoundException("User is deactivate");
        } else {
            log.info("User found in the database: {}", username);
        }
        if (!user.isEnabled()) {
            log.error("Account is enabled");
            throw new UsernameNotFoundException("Account is enabled, verify");
        }
        return user;
    }

    @Override
    public String signUpUser(User user) {
        boolean userExistsEmail = userRepository.findByEmail(user.getEmail()) != null;
        boolean userExistsUsername = userRepository.findUserByUsername(user.getUsername()) != null;
        if (userExistsEmail || userExistsUsername) {
            User appUserPrevious = userRepository.findByEmail(user.getEmail());
            boolean isEnabled = appUserPrevious.isEnabled();
            if (!isEnabled) {
                String token = UUID.randomUUID().toString();
                saveConfirmationToken(appUserPrevious, token);
                return token;
            }
            if (userExistsEmail) {
                throw new IllegalStateException(String.format("User with email %s already exists!", user.getEmail()));
            } else {
                throw new IllegalStateException(String.format("User with username %s already exists!", user.getUsername()));
            }
        }
        saveUser(user);
        addRoleToUser(user.getUsername(), "USER_MENTEE");
        String token = UUID.randomUUID().toString();
        saveConfirmationToken(user, token);
        return token;
    }

    @Override
    public void saveConfirmationToken(User appUser, String token) {
        ConfirmationToken confirmationToken = new ConfirmationToken(token, LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15), appUser);
        confirmationTokenService.saveConfirmationToken(confirmationToken);
    }

    @Override
    public void saveConfirmationTokenResetPassword(User appUser, String token) {
        try {
            PasswordResetToken passwordResetToken = new PasswordResetToken(token, appUser.getId(), LocalDateTime.now(),
                    LocalDateTime.now().plusMinutes(15));
            confirmationTokenResetPasswordService.saveConfirmationToken(passwordResetToken);
        } catch (Exception ex) {

        }
    }

    @Override
    public void enableAppUser(String email) {
        userRepository.enableAppUser(email);
    }

    @Override
    public String createPasswordResetTokenForUser(int id) {
        User user = userRepository.findById(id).get();
        String token = UUID.randomUUID().toString();
        saveConfirmationTokenResetPassword(user, token);
        return token;
    }

    @Override
    public int getTotalUserByStatus(boolean status) {
        return userRepository.countUserByStatus(status);
    }

}
