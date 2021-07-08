package com.nashtech.toaitran.model.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(schema = "public", name = "userdetails")
@Getter
@Setter
@Schema(hidden = true)
public class UserDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = true)
    private String firstName;
    @Column(nullable = true)
    private String lastName;
    @Column(nullable = true)
    private String address;

//    @Column(nullable = true)
//    private String email;
    @Transient
    @OneToMany
    private Collection<Order> orders;
    //@Transient
    @OneToOne(optional = false)
    @PrimaryKeyJoinColumn
    private User user;
}
