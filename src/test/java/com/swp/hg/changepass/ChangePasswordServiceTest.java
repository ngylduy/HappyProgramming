package com.swp.hg.changepass;

import com.swp.hg.dto.ChangePassDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.ChangePassMessage;
import com.swp.hg.service.UserService;
import com.swp.hg.service.impl.UserIMPL;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class ChangePasswordServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private UserIMPL userIMPL;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        userIMPL = new UserIMPL(userRepository);
    }

    @Test
    public void testChangePassword_Success() {
        String username = "testuser";
        String oldPassword = "oldpassword";
        String newPassword = "newpassword";
        String confirmNewPassword = "newpassword";

        User user = new User();
        user.setUsername(username);
        user.setPassword(oldPassword);

        Mockito.when(userRepository.findByUsername(username)).thenReturn(user);

        ChangePassDTO changePassDTO = new ChangePassDTO();
        changePassDTO.setUsername(username);
        changePassDTO.setOldPassword(oldPassword);
        changePassDTO.setNewPassword(newPassword);
        changePassDTO.setConfirmNewPassword(confirmNewPassword);

        ChangePassMessage result = userIMPL.changePass(changePassDTO);

        Assert.assertTrue(result.isSuccess());
        Assert.assertEquals("Password changed successfully.", result.getMessage());
    }

    @Test
    public void testChangePassword_IncorrectOldPassword() {
        String username = "testuser";
        String oldPassword = "oldpassword";
        String newPassword = "newpassword";
        String confirmNewPassword = "newpassword";

        User user = new User();
        user.setUsername(username);
        user.setPassword("differentpassword");

        Mockito.when(userRepository.findByUsername(username)).thenReturn(user);

        ChangePassDTO changePassDTO = new ChangePassDTO();
        changePassDTO.setUsername(username);
        changePassDTO.setOldPassword(oldPassword);
        changePassDTO.setNewPassword(newPassword);
        changePassDTO.setConfirmNewPassword(confirmNewPassword);

        ChangePassMessage result = userIMPL.changePass(changePassDTO);

        Assert.assertFalse(result.isSuccess());
        Assert.assertEquals("Incorrect old password.", result.getMessage());
    }

    @Test
    public void testChangePassword_PasswordsDoNotMatch() {
        String username = "testuser";
        String oldPassword = "oldpassword";
        String newPassword = "newpassword";
        String confirmNewPassword = "differentpassword";

        User user = new User();
        user.setUsername(username);
        user.setPassword(oldPassword);

        Mockito.when(userRepository.findByUsername(username)).thenReturn(user);

        ChangePassDTO changePassDTO = new ChangePassDTO();
        changePassDTO.setUsername(username);
        changePassDTO.setOldPassword(oldPassword);
        changePassDTO.setNewPassword(newPassword);
        changePassDTO.setConfirmNewPassword(confirmNewPassword);

        ChangePassMessage result = userIMPL.changePass(changePassDTO);

        Assert.assertFalse(result.isSuccess());
        Assert.assertEquals("New password and confirm password do not match.", result.getMessage());
    }

    @Test
    public void testChangePassword_NewPasswordIsEmpty() {
        String username = "testuser";
        String oldPassword = "oldpassword";
        String newPassword = "";
        String confirmNewPassword = "";

        User user = new User();
        user.setUsername(username);
        user.setPassword(oldPassword);

        Mockito.when(userRepository.findByUsername(username)).thenReturn(user);

        ChangePassDTO changePassDTO = new ChangePassDTO();
        changePassDTO.setUsername(username);
        changePassDTO.setOldPassword(oldPassword);
        changePassDTO.setNewPassword(newPassword);
        changePassDTO.setConfirmNewPassword(confirmNewPassword);

        ChangePassMessage result = userIMPL.changePass(changePassDTO);

        Assert.assertFalse(result.isSuccess());
        Assert.assertEquals("New password cannot be blank.", result.getMessage());
    }
}

