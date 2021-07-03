package com.nashtech.toaitran.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;
@Entity
@Getter
@Setter
public class FeatureDetail implements Serializable {
    @Id
    @ManyToOne
    @JoinColumn(name = "feature_id")
    private Feature feature;
    @Id
    @ManyToOne
    private Product product;
    private String description;
}
