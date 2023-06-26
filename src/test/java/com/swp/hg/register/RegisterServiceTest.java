package com.swp.hg.register;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.RegisterMessage;
import com.swp.hg.service.impl.RegisterIMPL;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Date;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

@SpringBootTest
public class RegisterServiceTest    {
    @Mock
    private UserRepository userRepository;

    @Mock
    private RegisterIMPL registerIMPL;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        registerIMPL = new RegisterIMPL(userRepository);
    }

    @Test
    public void testAddUserWithValidData() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername("username");
        userDTO.setEmail("email@example.com");
        userDTO.setPhone("123456789");
        userDTO.setPassword("password");
        userDTO.setFullname("John Doe");
        userDTO.setGender(true);
        userDTO.setDob(Date.valueOf("1990-01-01"));
        userDTO.setAddress("123 Street");

        when(userRepository.findByUsername(userDTO.getUsername())).thenReturn(null);
        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(null);
        when(userRepository.findByPhone(userDTO.getPhone())).thenReturn(null);

        // Act
        RegisterMessage result = registerIMPL.addUser(userDTO);

        // Assert
        assertTrue(result.isSuccess());
        assertEquals("Register successfully!", result.getMessage());
    }

    @Test
    public void testAddUserWithMissingUsername() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("email@example.com");
        userDTO.setPhone("123456789");
        userDTO.setPassword("password");
        userDTO.setFullname("John Doe");
        userDTO.setGender(true);
        userDTO.setDob(Date.valueOf("1990-01-01"));
        userDTO.setAddress("123 Street");

        // Act
        RegisterMessage result = registerIMPL.addUser(userDTO);

        // Assert
        assertFalse(result.isSuccess());
        assertEquals("Register failed!, Because username is required!", result.getMessage());
    }

    @Test
    public void testAddUserWithMissingPassword() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername("username");
        userDTO.setEmail("email@example.com");
        userDTO.setPhone("123456789");
        userDTO.setFullname("John Doe");
        userDTO.setGender(true);
        userDTO.setDob(Date.valueOf("1990-01-01"));
        userDTO.setAddress("123 Street");

        // Act
        RegisterMessage result = registerIMPL.addUser(userDTO);

        // Assert
        assertFalse(result.isSuccess());
        assertEquals("Register failed!, Because password is required!", result.getMessage());
    }


    @Test
    public void testAddUserWithExistingUsername() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername("existinguser");
        userDTO.setEmail("email@example.com");
        userDTO.setPhone("123456789");
        userDTO.setPassword("password");
        userDTO.setFullname("John Doe");
        userDTO.setGender(true);
        userDTO.setDob(Date.valueOf("1990-01-01"));
        userDTO.setAddress("123 Street");

        when(userRepository.findByUsername(userDTO.getUsername())).thenReturn(new User());

        // Act
        RegisterMessage result = registerIMPL.addUser(userDTO);

        // Assert
        assertFalse(result.isSuccess());
        assertEquals("Register failed!, Because username already exists", result.getMessage());
    }

    @Test
    public void testAddUserWithMissingEmail() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername("username");
        userDTO.setPhone("123456789");
        userDTO.setPassword("password");
        userDTO.setFullname("John Doe");
        userDTO.setGender(true);
        userDTO.setDob(Date.valueOf("1990-01-01"));
        userDTO.setAddress("123 Street");

        // Act
        RegisterMessage result = registerIMPL.addUser(userDTO);

        // Assert
        Assertions.assertFalse(result.isSuccess());
        Assertions.assertEquals("Register failed!, Because email is required!", result.getMessage());
    }

    @Test
    public void testAddUserWithMissingPhone() {
        // Arrange
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername("username");
        userDTO.setEmail("email@example.com");
        userDTO.setPassword("password");
        userDTO.setFullname("John Doe");
        userDTO.setGender(true);
        userDTO.setDob(Date.valueOf("1990-01-01"));
        userDTO.setAddress("123 Street");

        // Act
        RegisterMessage result = registerIMPL.addUser(userDTO);

        // Assert
        Assertions.assertFalse(result.isSuccess());
        Assertions.assertEquals("Register failed!, Because phone is required!", result.getMessage());
    }

}
