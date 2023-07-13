package com.swp.hg.service.Impl;

import com.swp.hg.entity.PasswordResetToken;
import com.swp.hg.repository.PasswordTokenRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor

public class ConfirmationTokenResetPasswordService {

    private final PasswordTokenRepo passwordTokenRepo;

    public void saveConfirmationToken(PasswordResetToken token) {
        passwordTokenRepo.save(token);
    }

    public Optional<PasswordResetToken> getToken(String token) {
        return passwordTokenRepo.findByToken(token);
    }

    public int setConfirmedAt(String token) {
        return passwordTokenRepo.updateConfirmedAt(token, LocalDateTime.now());
    }
}
