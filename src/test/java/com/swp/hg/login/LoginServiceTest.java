package com.swp.hg.login;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import com.swp.hg.dto.LoginDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.service.impl.UserIMPL;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class LoginServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserIMPL userIMPL;

    @Before
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        userIMPL = new UserIMPL(userRepository);
    }

    @Test
    public void testLoginUserWithValidCredentials() {
        // Arrange
        String username = "username";
        String password = "password";

        User user = new User();
        user.setId(1);
        user.setUsername(username);
        user.setPassword(password);

        LoginDTO loginDTO = new LoginDTO();
        loginDTO.setUsername(username);
        loginDTO.setPassword(password);

        when(userRepository.findByUsername(username)).thenReturn(user);
        when(userRepository.findOneByUsernameAndPassword(username, password)).thenReturn(Optional.of(user));

        // Act
        LoginMessage result = userIMPL.loginUser(loginDTO);

        // Assert
        assertTrue(result.isSuccess());
        assertEquals("Login Success", result.getMessage());
        assertEquals(1, result.getId());
    }

    @Test
    public void testLoginUserWithInvalidUsername() {
        // Arrange
        String username = "username";
        String password = "password";

        LoginDTO loginDTO = new LoginDTO();
        loginDTO.setUsername(username);
        loginDTO.setPassword(password);

        when(userRepository.findByUsername(username)).thenReturn(null);

        // Act
        LoginMessage result = userIMPL.loginUser(loginDTO);

        // Assert
        assertFalse(result.isSuccess());
        assertEquals("User not exits", result.getMessage());
        assertEquals(-1, result.getId());
    }

    @Test
    public void testLoginUserWithInvalidPassword() {
        // Arrange
        String username = "username";
        String password = "password";

        User user = new User();
        user.setUsername(username);
        user.setPassword("wrongpassword");

        LoginDTO loginDTO = new LoginDTO();
        loginDTO.setUsername(username);
        loginDTO.setPassword(password);

        when(userRepository.findByUsername(username)).thenReturn(user);
        when(userRepository.findOneByUsernameAndPassword(username, password)).thenReturn(Optional.empty());

        // Act
        LoginMessage result = userIMPL.loginUser(loginDTO);

        // Assert
        assertFalse(result.isSuccess());
        assertEquals("Password Not Match", result.getMessage());
        assertEquals(-1, result.getId());
    }
}
