package com.swp.hg.filter;

import com.swp.hg.auth.AuthenticationRequest;
import com.swp.hg.auth.AuthenticationResponse;
import com.swp.hg.entity.Role;
import com.swp.hg.entity.User;
import com.swp.hg.repository.RoleCustomRepo;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.service.Impl.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationFilter {

    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final RoleCustomRepo roleCustomRepo;
    private final JwtService jwtService;

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getUsername(),
                    authenticationRequest.getPassword()
            )
        );
        User user = userRepository.findByUsername(authenticationRequest.getUsername()).get();
        List<Role> role = null;
        if (user != null) {
            role = roleCustomRepo.getRole(user);
        }

        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();

        Set<Role> set = new HashSet<>();

        role.stream().forEach(c->set.add(new Role(c.getName())));

        user.setRoles(set);

        set.stream().forEach(i->authorities.add(new SimpleGrantedAuthority(i.getName())));

        var jwtToken = jwtService.createToken(user, authorities);
        var jwtRefreshToken = jwtService.createRefreshToken(user, authorities);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(jwtRefreshToken)
                .build();
    }
}
