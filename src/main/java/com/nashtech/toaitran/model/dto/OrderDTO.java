package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Setter
@Getter
public class OrderDTO {
    private Long orderId;
    @NotNull
    private Long userId;
    @NotNull
    private String time;
    @NotNull
    private String address;
    @NotNull
    private String status;
}
