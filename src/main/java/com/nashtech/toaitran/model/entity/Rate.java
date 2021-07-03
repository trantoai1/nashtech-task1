package com.nashtech.toaitran.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(schema = "public", name = "rates")
public class Rate implements Serializable {

    private Integer point;
    private String comment;
    @Id
    @OneToOne
    private Product product;
    @Id
    @OneToOne
    private User user;
}
