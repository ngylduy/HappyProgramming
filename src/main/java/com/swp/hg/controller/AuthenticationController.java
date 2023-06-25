package com.swp.hg.controller;

import com.swp.hg.auth.AuthenticationRequest;
import com.swp.hg.dto.ChangePassword;
import com.swp.hg.dto.RegistrationRequest;
import com.swp.hg.service.Impl.AuthenticationService;
import com.swp.hg.service.Impl.ResetPassword;
import com.swp.hg.dto.ResponseStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final ResetPassword resetPassword;
    private final AuthenticationService authenticationService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest){
        return new ResponseEntity<>(authenticationService.authenticate(authenticationRequest), HttpStatus.OK);
    }

    @PostMapping("/reset_password")
    public String resetPassword(@RequestBody RegistrationRequest request) {
        return resetPassword.reset(request);
    }

    @GetMapping(path = "/confirm_reset_password")
    public String confirm(@RequestParam("token") String token, @RequestParam("user_id") int user_id) {
        return resetPassword.confirmToken(token, user_id);
    }

    @PostMapping("/save_new_password")
    public String saveNewPassword(@RequestParam("password") String password, @RequestParam("user_id") int user_id) {
        return resetPassword.saveNewPassword(password, user_id);
    }

    @PostMapping("/change_password")
    public ResponseStatus changePassword(@RequestBody ChangePassword changePassword) {
        return resetPassword.changePassword(changePassword);
    }
}
