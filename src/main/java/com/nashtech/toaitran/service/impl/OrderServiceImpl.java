package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.model.entity.Order;
import com.nashtech.toaitran.repository.IOrderRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public OrderDTO findById(Long id) {
        Optional<Order> entity = Optional.ofNullable(repository.findById(id)
                .orElseThrow(() -> new NotFoundException(Order.class, id)));
        return createFromE(entity.get());
    }

    public OrderDTO update(Long id, OrderDTO dto) {
        Optional<Order> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Order.class,id));
        return createFromE(repository.save(updateEntity(entity.get(),dto)));
    }

    public OrderDTO save(OrderDTO t) {
        return createFromE(repository.save(createFromD(t)));
    }

    public OrderDTO delete(Long id) {
        Optional<Order> entity = Optional.ofNullable(repository.findById(id)
                .orElseThrow(() -> new NotFoundException(Order.class, id)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }

    public Order createFromD(OrderDTO dto) {
        Order entity = modelMapper.map(dto,Order.class);
        return entity;
    }

    public OrderDTO createFromE(Order entity) {
        OrderDTO dto = modelMapper.map(entity,OrderDTO.class);
        return dto;
    }

    public Order updateEntity(Order entity, OrderDTO dto) {
        if (entity != null && dto != null) {
            entity.setAddress(dto.getAddress());
            //entity.setOrderid(dto.getOrderId());
            //entity.setStatus(dto.getStatus());
            //entity.setTime(dto.getTime());

        }

        return entity;
    }
}
