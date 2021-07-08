package com.nashtech.toaitran.model.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(schema = "public", name = "features")
@Getter
@Setter
@Schema(hidden = true)
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long featureId;
    //@Transient
    @ManyToOne
    private FeatureType featureType;

    private Double specific;

    @Override
    public String toString() {
        return "Feature{" +
                "featureId=" + featureId +
                ", featureType=" + featureType.getId() +
                ", specific=" + specific +

                '}';
    }
}
