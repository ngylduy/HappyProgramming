package com.swp.hg.service.impl;

import com.swp.hg.dto.ChangePassDTO;
import com.swp.hg.dto.LoginDTO;
import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.ChangePassMessage;
import com.swp.hg.response.LoginMessage;
import com.swp.hg.response.RegisterMessage;
import com.swp.hg.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {


    private final UserRepository userRepository;

    public UserIMPL(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public RegisterMessage addUser(UserDTO userDTO) {
        String username = userDTO.getUsername();
        String email = userDTO.getEmail();
        String phone = userDTO.getPhone();
        // Kiểm tra username
        if (StringUtils.isEmpty(username)) {
            return new RegisterMessage("Register failed!, Because username is required!",false);
        }
        // Kiểm tra trùng lặp tên người dùng
        if (userRepository.findByUsername(username) != null) {
            return new RegisterMessage("Register failed!, Because username already exists",false);
        }
        // Kiểm tra trùng lặp địa chỉ email
        if (userRepository.findByEmail(email) != null) {
            return new RegisterMessage("Register failed!, Because email already exists",false);
        }
        // Kiểm tra trùng lặp số điện thoại
        if (userRepository.findByPhone(phone) != null) {
            return new RegisterMessage("Register failed!, Because phone already exists" ,false);
        }
        // Tạo đối tượng User và lưu vào cơ sở dữ liệu
        User user = new User(
                username,
                userDTO.getPassword(),
                userDTO.getFullname(),
                userDTO.isGender(),
                phone,
                email,
                userDTO.getDob(),
                userDTO.getAddress()
        );
        userRepository.save(user);
        return new RegisterMessage("Register successfully!",true);
    }

    @Override
    public LoginMessage loginUser(LoginDTO loginDTO) {
        User userInfo = userRepository.findByUsername(loginDTO.getUsername());
        if (userInfo == null) {
            return new LoginMessage("User not exits", -1, false);
        }
        Optional<User> user = userRepository.findOneByUsernameAndPassword(loginDTO.getUsername(), loginDTO.getPassword());
        if (!user.isPresent()) {
            return new LoginMessage("Password Not Match", -1, false);
        }
        return new LoginMessage("Login Success", userInfo.getId(), true);
    }

    @Override
    public ChangePassMessage changePass(ChangePassDTO changePassDTO) {
        String username = changePassDTO.getUsername();
        String oldPassword = changePassDTO.getOldPassword();
        String newPassword = changePassDTO.getNewPassword();
        String comFirmPassword = changePassDTO.getConfirmNewPassword();

        User user = userRepository.findByUsername(username);
        if (user == null) {
            return new ChangePassMessage("Username not found.", false);
        }
        if (!user.getPassword().matches(oldPassword)) {
            return new ChangePassMessage("Incorrect old password.", false);
        }

        if (StringUtils.isEmpty(newPassword)){
            return new ChangePassMessage("New password cannot be blank.", false);
        }

        if (newPassword.trim().isEmpty()) {
            return new ChangePassMessage("New password cannot be composed of whitespace characters only.", false);
        }

        if (!newPassword.matches(comFirmPassword)) {
            return new ChangePassMessage("New password and confirm password do not match.", false);
        }

        if (oldPassword.matches(newPassword)) {
            return new ChangePassMessage("New password must be different from the old password.", false);
        }

        user.setPassword(newPassword);
        userRepository.save(user);

        return new ChangePassMessage("Password changed successfully.", true);
    }

}







