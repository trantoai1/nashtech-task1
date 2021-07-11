package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class FeatureTypeDTO {
    private String id;
    @NotNull
    private String name;
    private String unit;
}
