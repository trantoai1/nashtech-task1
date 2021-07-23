package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.Map;

@Setter
@Getter
public class OrderDTO {
    private Long orderId;
    @NotNull
    private Long userId;

    private String time;
    private String phone;
    @NotNull
    private String address;

    private String status;
    @NotNull
    private Map<Long,Integer> details;
}
