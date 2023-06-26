package com.swp.hg.service.impl;

import com.swp.hg.dto.UserDTO;
import com.swp.hg.entity.User;
import com.swp.hg.repository.UserRepository;
import com.swp.hg.response.UpdateMenteeMessage;
import com.swp.hg.service.UpdateMenteeService;
import org.springframework.context.annotation.Configuration;

import java.sql.Date;

@Configuration
public class UpdateMenteeIMPL implements UpdateMenteeService {

    private final UserRepository userRepository;

    public UpdateMenteeIMPL(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

        @Override
        public UpdateMenteeMessage updatepMentee(UserDTO userDTO, int id) {
            String newEmail = userDTO.getEmail();
            String newPhone = userDTO.getPhone();
            Boolean newGender = userDTO.isGender();
            String newFullname = userDTO.getFullname();
            Date newDate = userDTO.getDob();
            String newAddress = userDTO.getAddress();

            User existingUser = userRepository.findById(id);
            if (existingUser == null) {
                return new UpdateMenteeMessage("User not found.", false);
            }

            if (existingUser.getRole() == 0) {
                return new UpdateMenteeMessage("Insufficient privileges.", false);
            }

            User userWithSameEmail = userRepository.findByEmail(newEmail);
            if (userWithSameEmail != null && userWithSameEmail.getId() != existingUser.getId()) {
                return new UpdateMenteeMessage("Email is already taken.", false);
            }

            User userWithSamePhone = userRepository.findByPhone(newPhone);
            if (userWithSamePhone != null && userWithSamePhone.getId() != existingUser.getId()) {
                return new UpdateMenteeMessage("Phone number is already taken.", false);
            }

            if (existingUser.getEmail().equals(newEmail) &&
                    existingUser.getPhone().equals(newPhone) &&
                    existingUser.isGender() == newGender &&
                    existingUser.getFullname().equals(newFullname) &&
                    existingUser.getDob().equals(newDate) &&
                    existingUser.getAddress().equals(newAddress)) {
                return new UpdateMenteeMessage("No changes were made.", false);
            }

            existingUser.setEmail(newEmail);
            existingUser.setPhone(newPhone);
            existingUser.setGender(newGender);
            existingUser.setFullname(newFullname);
            existingUser.setDob(newDate);
            existingUser.setAddress(newAddress);

            userRepository.save(existingUser);
            return new UpdateMenteeMessage("Profile updated successfully.", true);
        }
    }


