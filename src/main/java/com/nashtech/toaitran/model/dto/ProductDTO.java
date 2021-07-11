package com.nashtech.toaitran.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;

@Setter
@Getter
public class ProductDTO {
    private Long productId;
    @DecimalMin(value = "1000")
    private BigDecimal price;
    @NotNull
    @NotBlank
    private String productName;

    private String productDesc;

    @NotNull
    private Long categoryId;


    @NotNull
    private Date createDate;
    @NotNull
    @DecimalMin("0")
    private Integer remain;
    @NotNull
    private Date updateDate;
}
