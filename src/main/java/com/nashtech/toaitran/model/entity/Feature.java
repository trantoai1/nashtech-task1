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
@NamedQueries({
        @NamedQuery(name = "Feature.findByType",
                query = "SELECT a FROM Feature a WHERE a.featureType in :type")
})
public class Feature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long featureId;
    //@Transient
    @ManyToOne
    private FeatureType featureType;

    private String specific;

    @Override
    public String toString() {
        return "Feature{" +
                "featureId=" + featureId +
                ", featureType=" + featureType.getId() +
                ", specific=" + specific +

                '}';
    }
}
