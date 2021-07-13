package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.model.dto.OrderDetailDTO;
import com.nashtech.toaitran.service.impl.OrderDetailServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping({"api/orderDetails"})
@Tag(
        name = "OrderDetail"
)
public class OrderDetailControllerImpl {//implements IBaseController<OrderDetailDTO, OrderDetailKey, OrderDetailServiceImpl> {
    @Resource
    @Getter
    private OrderDetailServiceImpl service;

    @GetMapping("")
    public List<OrderDetailDTO> getAll() {
        return getService().findAll();
    }

    @GetMapping("/{productId}-{orderId}")
    public OrderDetailDTO get1(@PathVariable Long productId, @PathVariable Long orderId) {

        return service.findById(productId, orderId);
    }

    @PutMapping("/{productId}-{orderId}")
    public OrderDetailDTO update(@PathVariable Long productId, @PathVariable Long orderId, @Valid @RequestBody OrderDetailDTO dto) {
        dto.setProductId(productId);
        dto.setOrderId(orderId);
        return service.update(productId, orderId, dto);
    }

    @DeleteMapping("/{productId}-{orderId}")
    public OrderDetailDTO delete(@PathVariable Long productId, @PathVariable Long orderId) {
        return service.delete(productId, orderId);
    }

    @PostMapping("")
    public OrderDetailDTO insert(@Valid @RequestBody OrderDetailDTO d) {
        return getService().save(d);
    }
}
