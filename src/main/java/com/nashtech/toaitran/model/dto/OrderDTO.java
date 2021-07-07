package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class OrderDTO {
    private Long orderid;
    private String user;
    private String time;
    private String address;
    private String status;
}
