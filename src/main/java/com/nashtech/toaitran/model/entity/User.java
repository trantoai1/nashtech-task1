package com.nashtech.toaitran.model.entity;

import com.nashtech.toaitran.model.UserRole;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(schema = "public", name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String username;
    private String password;
    private UserRole role;

    public User() {
        role = UserRole.USER;
    }
    //@Transient

}
