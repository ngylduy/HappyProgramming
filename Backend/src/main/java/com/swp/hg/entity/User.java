package com.swp.hg.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Entity
@NoArgsConstructor
@Table(name = "User")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false, unique = true)
    private String username;
    private String password;
    private String fullname;
    private boolean gender;
    private String phone;
    private String email;
    private Date dob;
    private String address;
    private boolean status;

    @OneToMany(mappedBy = "mentorRegist", cascade = CascadeType.ALL)
    private Collection<MentorRegist> mentorRegists;

    @OneToMany(mappedBy = "menteeRating", cascade = CascadeType.ALL)
    private Collection<Rating> ratings;

//    @OneToMany(mappedBy = "mentorProfile", cascade = CascadeType.ALL)
//    private Collection<MentorProfile> mentorProfiles;

    @OneToMany(mappedBy = "users", cascade = CascadeType.ALL)
    private Collection<Request> requests;

    @ManyToMany
    @JoinTable(
            name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Collection<Role> roles;

    public User(int id, String username, String password, String fullname, boolean gender, String phone, String email, Date dob, String address, Collection<Role> roles) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.dob = dob;
        this.address = address;
        this.roles = roles;
    }

    public User(String username, String password, String fullname, boolean gender, String phone, String email, Date dob, String address, Collection<Role> roles) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.dob = dob;
        this.address = address;
        this.roles = roles;
    }

    @Override
    public String getPassword(){
        return password;
    }

    @Override
    public String getUsername(){
        return username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority(role.getName()))
                .collect(Collectors.toList());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}
