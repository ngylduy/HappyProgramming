package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    private String username;
    private String password;
    private String fullname;
    private boolean gender;
    private String phone;
    private String email;
    private Date dob;
    private String address;
    private boolean status;
    private int role;
}
