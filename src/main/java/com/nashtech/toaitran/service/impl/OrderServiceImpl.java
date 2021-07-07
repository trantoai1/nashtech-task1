package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.model.entity.Order;
import com.nashtech.toaitran.repository.IOrderRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderServiceImpl implements IBaseService<OrderDTO, Long>, IModelMapper<OrderDTO, Order> {
    private final IOrderRepository repository;
    private final ModelMapper modelMapper;

    public OrderServiceImpl(IOrderRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<OrderDTO> findAll() {
        return this.createFromEntities(this.repository.findAll());
    }

    public OrderDTO findById(Long aLong) {
        return null;
    }

    public OrderDTO update(Long aLong, OrderDTO t) {
        return null;
    }

    public OrderDTO save(OrderDTO t) {
        return null;
    }

    public OrderDTO delete(Long aLong) {
        return null;
    }

    public Order createFromD(OrderDTO dto) {
        return null;
    }

    public OrderDTO createFromE(Order entity) {
        return null;
    }

    public Order updateEntity(Order entity, OrderDTO dto) {
        return null;
    }
}
