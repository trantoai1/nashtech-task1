package com.nashtech.toaitran.model.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(name = "Category")
public class CateDTO {
    private Long id;

    private String cateName;
    private String description;
}
