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
                 .requestMatchers("/api/**").permitAll()
//                 .requestMatchers("/api/rating").permitAll()
//                 .requestMatchers(HttpMethod.GET, "/api/skill").permitAll()
//                 .requestMatchers("/api/skill").hasAnyAuthority("USER_MENTEE")
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
