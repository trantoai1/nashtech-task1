package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OrderDetailDTO {
    private Long orderId;
    private Long productId;
    private Integer amount;
}
