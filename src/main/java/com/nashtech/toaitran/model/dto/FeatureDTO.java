package com.nashtech.toaitran.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nashtech.toaitran.model.entity.FeatureType;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class FeatureDTO {

    private Long featureId;
    @NotNull
    @NotBlank
    private String featureTypeId;
    private String specific;
    @JsonIgnore
    private FeatureType featureType;

    public String getTypeName()
    {
        return featureType.getName();
    }
    public String getTypeUnit()
    {
        return featureType.getUnit();
    }
}
