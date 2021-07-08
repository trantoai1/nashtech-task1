package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.OrderDetailDTO;
import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import com.nashtech.toaitran.service.impl.OrderDetailServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping({"api/orderDetails"})
@Tag(
        name = "OrderDetail"
)
public class OrderDetailControllerImpl implements IBaseController<OrderDetailDTO, OrderDetailKey, OrderDetailServiceImpl> {
    @Resource
    @Getter
    private OrderDetailServiceImpl service;

}