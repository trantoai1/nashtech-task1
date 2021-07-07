package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
public class ProductDTO {
    private Long productId;

    private BigDecimal price;

    private String productName;

    private String productDesc;


    private Long categoryId;



    private Date createDate;


    private Date updateDate;
}
