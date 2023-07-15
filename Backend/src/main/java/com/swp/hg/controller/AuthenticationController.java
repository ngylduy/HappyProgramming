package com.swp.hg.controller;

import com.swp.hg.auth.AuthenticationRequest;
import com.swp.hg.auth.AuthenticationResponse;
import com.swp.hg.dto.ChangePassword;
import com.swp.hg.dto.RegistrationRequest;
import com.swp.hg.dto.ResponseStatus;
import com.swp.hg.filter.AuthenticationFilter;
import com.swp.hg.service.Impl.ResetPassword;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthenticationController {

    private final ResetPassword resetPassword;
    private final AuthenticationFilter authenticationService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest){
        try {
            AuthenticationResponse response = authenticationService.authenticate(authenticationRequest);
            if (response.getToken() != null) {
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
            }
        } catch (AuthenticationException ex) {
            return new ResponseEntity<>(AuthenticationResponse.builder().message("User is no activated!").build(), HttpStatus.FORBIDDEN);
        }
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
