package com.swp.hg.updatementee;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.sql.Date;
import java.util.Optional;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.UpdateMenteeMessage;
import com.swp.hg.service.impl.RegisterIMPL;
import com.swp.hg.service.impl.UpdateMenteeIMPL;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UpdateMenteeIMPLTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UpdateMenteeIMPL updateMenteeIMPL;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        updateMenteeIMPL = new UpdateMenteeIMPL(userRepository);
    }

    @Test
    public void testUpdateMentee_SuccessfulUpdate() {
        // Mock input data
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("newemail@example.com");
        userDTO.setPhone("1234567890");
        userDTO.setGender(true);
        userDTO.setFullname("John Doe");
        userDTO.setDob(Date.valueOf("2000-01-01"));
        userDTO.setAddress("New Address");

        int id = 1;

        // Mock existing user
        User existingUser = new User();
        existingUser.setId(id);
        existingUser.setEmail("oldemail@example.com");
        existingUser.setPhone("9876543210");
        existingUser.setGender(false);
        existingUser.setFullname("Jane Doe");
        existingUser.setDob(Date.valueOf("1990-01-01"));
        existingUser.setAddress("Old Address");

        // Mock UserRepository methods
        when(userRepository.findById(id)).thenReturn(existingUser);
        when(userRepository.findByEmail(userDTO.getEmail())).thenReturn(null);
        when(userRepository.findByPhone(userDTO.getPhone())).thenReturn(null);
        when(userRepository.save(existingUser)).thenReturn(existingUser);

        // Call the method
        UpdateMenteeMessage result = updateMenteeIMPL.updatepMentee(userDTO, id);

        // Verify the results
        assertEquals("Profile updated successfully.", result.getMessage());
        assertTrue(result.isSuccess());
        assertEquals(userDTO.getEmail(), existingUser.getEmail());
        assertEquals(userDTO.getPhone(), existingUser.getPhone());
        assertEquals(userDTO.isGender(), existingUser.isGender());
        assertEquals(userDTO.getFullname(), existingUser.getFullname());
        assertEquals(userDTO.getDob(), existingUser.getDob());
        assertEquals(userDTO.getAddress(), existingUser.getAddress());

        // Verify that UserRepository methods were called
        verify(userRepository, times(1)).findById(id);
        verify(userRepository, times(1)).findByEmail(userDTO.getEmail());
        verify(userRepository, times(1)).findByPhone(userDTO.getPhone());
        verify(userRepository, times(1)).save(existingUser);
    }
}
