package com.swp.hg.filter;

import com.swp.hg.auth.AuthenticationRequest;
import com.swp.hg.auth.AuthenticationResponse;
import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;
import com.swp.hg.repository.RoleCustomRepo;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.service.Impl.JwtService;
import com.swp.hg.service.Impl.UserImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationFilter {

    private final AuthenticationManager authenticationManager;
    private final RoleCustomRepo roleCustomRepo;
    private final JwtService jwtService;
    private final UserImpl userImpl;

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getUsername(),
                            authenticationRequest.getPassword()
                    )
            );
        } catch (AuthenticationException ex) {
            return AuthenticationResponse.builder().message("Failed to authenticate").build();
        }
        User user = userImpl.takeUserByUsername(authenticationRequest.getUsername());

        List<Role> role = null;
        if (user != null) {
            role = roleCustomRepo.getRole(user);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        Set<Role> set = new HashSet<>();

        role.stream().forEach(c -> set.add(new Role(c.getName())));

        user.setRoles(set);

        set.stream().forEach(i -> authorities.add(new SimpleGrantedAuthority(i.getName())));

        var jwtToken = jwtService.createToken(user, authorities);
        var jwtRefreshToken = jwtService.createRefreshToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(jwtRefreshToken)
                .message("Logged in successfully")
                .build();
    }
}
