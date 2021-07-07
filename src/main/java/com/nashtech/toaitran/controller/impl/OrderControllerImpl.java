package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.service.impl.OrderServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("api/orders")
@Tag(
        name = "Orders"
)
public class OrderControllerImpl implements IBaseController<OrderDTO,Long, OrderServiceImpl> {
    @Resource
    @Getter
    private OrderServiceImpl service;
}
