package com.nashtech.toaitran.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Getter
@Setter
@Table(schema = "public", name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cateName;
    private String description;
    @Transient
    @OneToMany(fetch = FetchType.LAZY)
    private Collection<Product> products;

}
