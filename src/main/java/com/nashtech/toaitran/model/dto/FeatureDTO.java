package com.nashtech.toaitran.model.dto;

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
}
