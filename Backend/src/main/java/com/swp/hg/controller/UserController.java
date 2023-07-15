package com.swp.hg.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.swp.hg.dto.ResultDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;
import com.swp.hg.service.UserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(Authentication authentication) {
        Object principal = authentication.getPrincipal();
        if (principal instanceof UserDetails) {
            UserDetails userDetails = (UserDetails) principal;
            return ResponseEntity.ok(userDetails);
        } else {
            User user = userService.getUser((String) principal);
            return ResponseEntity.ok().body(user);
        }
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/roles")
    public ResponseEntity<List<Role>> getRole() {
        return ResponseEntity.ok().body(userService.getRoles());
    }

    @PostMapping("/save")
    public ResponseEntity<User> saveUsers(@RequestHeader("access_token") String access_token, @RequestBody User user) {
        URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/user/save").toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @PutMapping("/save/{id}")
    public ResponseEntity<?> saveUsers(@RequestBody UserDTO user, @PathVariable int id) {
        user.setId(id);
        ResultDTO<User> userResultDTO = userService.updateUser(user);
        return new ResponseEntity<ResultDTO<User>>(userResultDTO, HttpStatus.OK);
    }

    @PostMapping("/role/addtouser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getUsername(), form.getRolename());
        return ResponseEntity.ok().build();
    }

    @Data
    class RoleToUserForm {
        private String username;
        private String rolename;
    }

}
