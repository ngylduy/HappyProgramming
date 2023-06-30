package com.swp.hg.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class AccessDeniedHandler implements org.springframework.security.web.access.AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException ex) throws IOException {
        System.out.println(" Redirect Access Denied Handler!");
        response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied: You do not have permission to access this resource");
    }
}
