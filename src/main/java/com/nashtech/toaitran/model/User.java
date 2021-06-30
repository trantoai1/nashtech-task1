package com.nashtech.toaitran.model;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(schema = "public", name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String address;
    private Integer isAdmin;
    @NotNull
    private String email;
    @Transient
    @OneToMany
    private Collection<Order> orders;

}
