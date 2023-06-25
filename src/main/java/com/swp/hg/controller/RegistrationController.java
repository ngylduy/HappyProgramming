package com.swp.hg.controller;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.service.Impl.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/auth/registration")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody UserDTO userDTO) {
        return registrationService.register(userDTO);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }

}
