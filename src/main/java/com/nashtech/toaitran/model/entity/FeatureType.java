package com.nashtech.toaitran.model.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;
import java.util.Collection;

@Entity
@Getter
@Setter
@Schema(hidden = true)
public class FeatureType {
    @Id
    private String id;

    private String name;
    private String unit;
    @Transient
    @OneToMany
    Collection<Feature> features;




}
