package com.nashtech.toaitran.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Getter
@Setter

public class FeatureType {
    @Id
    private String id;

    private String name;
    private String unit;
    @Transient
    @OneToMany
    Collection<Feature> features;




}
