package com.swp.hg.entity;

import com.swp.hg.config.RoleConfig;
import com.swp.hg.config.StatusConfig;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.sql.Date;
import java.util.Collection;

@Data
@Entity
@NoArgsConstructor
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
    private boolean status = StatusConfig.ACTIVE.getValue();
    private int role = RoleConfig.USER.getValue();

    public User(String username, String password, String fullname, boolean gender, String phone, String email, Date dob, String address) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.dob = dob;
        this.address = address;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", fullname='" + fullname + '\'' +
                ", gender=" + gender +
                ", phone='" + phone + '\'' +
                ", email='" + email + '\'' +
                ", dob=" + dob +
                ", address='" + address + '\'' +
                ", status=" + status +
                ", role=" + role +
                ", mentorRegists=" + mentorRegists +
                ", ratings=" + ratings +
                ", mentorProfiles=" + mentorProfiles +
                ", requests=" + requests +
                '}';
    }

    @OneToMany(mappedBy = "mentorRegist", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<MentorRegist> mentorRegists;

    @OneToMany(mappedBy = "menteeRating", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<Rating> ratings;

    @OneToMany(mappedBy = "mentorProfile", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<MentorProfile> mentorProfiles;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Collection<Request> requests;
}
