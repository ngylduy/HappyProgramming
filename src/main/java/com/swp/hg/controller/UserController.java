package com.swp.hg.controller;

import com.swp.hg.dto.LoginDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.response.RegisterMessage;
import com.swp.hg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO){
        RegisterMessage registerMessage = userService.addUser(userDTO);
        return ResponseEntity.ok(registerMessage);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginMessage loginMessage = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginMessage);
    }
}
