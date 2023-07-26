package com.swp.hg.config;

import com.swp.hg.filter.AuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

     private final AuthorizationFilter authenticationFilter;
     private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.authorizeRequests()
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/rating").hasAnyAuthority("USER_MENTEE")
                .requestMatchers(HttpMethod.PUT, "/api/rating").hasAnyAuthority("USER_MENTEE")
                .requestMatchers(HttpMethod.GET, "/api/rating").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/skill").hasAnyAuthority("USER_ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/skill").hasAnyAuthority("USER_ADMIN")
                .requestMatchers(HttpMethod.GET, "/api/skill").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/mentor/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/mentor/searchmentor").permitAll()
                .requestMatchers(HttpMethod.POST, "/api/mentor/searchmentor").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/image/**").permitAll()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(authenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

}
