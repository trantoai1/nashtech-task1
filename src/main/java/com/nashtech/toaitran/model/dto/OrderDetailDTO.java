package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.DecimalMin;

@Getter
@Setter
public class OrderDetailDTO {
    private Long orderId;
    private Long productId;
    @DecimalMin(value = "1")
    private Integer amount;
}
