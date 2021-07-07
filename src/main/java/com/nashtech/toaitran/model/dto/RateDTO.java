package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RateDTO {
    private Integer point;
    private String comment;

    private Long productId;
    private String userId;
}
