package com.nashtech.toaitran.model.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@Schema(name = "Category")
public class CateDTO {
    private Long id;
    @NotNull
    private String cateName;
    private String description;
}
