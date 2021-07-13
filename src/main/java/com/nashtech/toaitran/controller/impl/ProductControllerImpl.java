package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.service.impl.ProductServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
@CrossOrigin("*")
@RestController
@RequestMapping({"api/products"})
@Tag(
        name = "Product"
)
public class ProductControllerImpl implements IBaseController<ProductDTO, Long, ProductServiceImpl> {
    @Resource
    @Getter
    private ProductServiceImpl service;

}
