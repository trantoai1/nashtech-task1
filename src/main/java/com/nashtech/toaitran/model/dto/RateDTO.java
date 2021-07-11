package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class RateDTO {
    @NotNull
    @DecimalMin("0")
    @DecimalMax("5")
    private Integer point;
    private String comment;
    @NotNull
    private Long productId;
    @NotNull
    private Long userId;
}
