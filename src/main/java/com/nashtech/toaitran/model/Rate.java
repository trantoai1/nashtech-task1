package com.nashtech.toaitran.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(schema = "public", name = "rates")
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer point;
    private String comment;

    @OneToOne
    private Product product;
    @OneToOne
    private User user;
}
