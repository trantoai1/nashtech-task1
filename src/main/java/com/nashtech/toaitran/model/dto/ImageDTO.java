package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ImageDTO {
    private Long id;
    private String url;
    private String alt;
    private Integer width;
    private Integer height;

    private Long productId;
}
