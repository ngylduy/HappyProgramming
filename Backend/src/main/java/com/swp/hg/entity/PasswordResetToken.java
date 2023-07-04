package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "password_reset_token")
public class PasswordResetToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String token;
    @Column(nullable = false)
    private int user_id;
    @Column(nullable = false)
    private LocalDateTime createdAt;
    @Column(nullable = false)
    private LocalDateTime expiresAt;
    private LocalDateTime confirmedAt;

    public PasswordResetToken() {
    }

    public PasswordResetToken(String token, int user_id, LocalDateTime createdAt, LocalDateTime expiresAt) {
        this.token = token;
        this.user_id = user_id;
        this.createdAt = createdAt;
        this.expiresAt = expiresAt;
    }
}
