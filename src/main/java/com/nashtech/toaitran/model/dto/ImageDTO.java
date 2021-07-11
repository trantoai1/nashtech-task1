package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class ImageDTO {
    private Long id;
    @NotNull
    private String url;
    private String alt;
    @DecimalMin(value = "0")
    private Integer width;
    @DecimalMin(value = "0")
    private Integer height;
    @NotNull
    private Long productId;
}
