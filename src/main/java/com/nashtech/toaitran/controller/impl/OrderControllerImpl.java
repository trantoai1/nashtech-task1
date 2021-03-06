package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.service.impl.OrderServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/orders")
@Tag(
        name = "Orders"
)
public class OrderControllerImpl implements IBaseController<OrderDTO, Long, OrderServiceImpl> {
    @Resource
    @Getter
    private OrderServiceImpl service;

    @GetMapping("")
    public List<OrderDTO> getAll(@RequestParam(required = false) Long userId) {
        if (userId == null)
            return getService().findAll();
        else
            return getService().findAll(userId);
    }
}
