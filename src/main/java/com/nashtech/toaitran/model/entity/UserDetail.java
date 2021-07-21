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
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    public UserDetail(Long id, String firstName, String lastName, String address, User user) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        //this.user = user;
        //orders = new ArrayList<>();
    }

    public UserDetail() {
    }

    @Override
    public String toString() {
        return "UserDetail{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", orders=" + orders +
                ", user=" + user +
                '}';
    }
}
