package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.OrderDetailDTO;
import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import com.nashtech.toaitran.model.entity.OrderDetail;
import com.nashtech.toaitran.repository.IOrderDetailRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailServiceImpl implements IBaseService<OrderDetailDTO, OrderDetailKey>, IModelMapper<OrderDetailDTO, OrderDetail> {
    private final IOrderDetailRepository repository;
    private final ModelMapper modelMapper;

    public OrderDetailServiceImpl(IOrderDetailRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<OrderDetailDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    public OrderDetailDTO findById(OrderDetailKey orderDetailKey) {
        Optional<OrderDetail> entity = repository.findById(orderDetailKey);
        entity.orElseThrow(()-> new NotFoundException(OrderDetail.class,orderDetailKey.getOrder().getOrderid()));
        return createFromE(entity.get());
    }

    public OrderDetailDTO update(OrderDetailKey orderDetailKey, OrderDetailDTO orderDetailDTO) {
        Optional<OrderDetail> entity = repository.findById(orderDetailKey);
        entity.orElseThrow(()-> new NotFoundException(OrderDetail.class,orderDetailKey.getOrder().getOrderid()));
        return createFromE(repository.save(updateEntity(entity.get(),orderDetailDTO)));
    }

    public OrderDetailDTO save(OrderDetailDTO orderDetailDTO) {
        return createFromE(repository.save(createFromD(orderDetailDTO)));
    }

    public OrderDetailDTO delete(OrderDetailKey orderDetailKey) {
        OrderDetail entity = repository.getById(orderDetailKey);
        repository.delete(entity);
        return createFromE(entity);
    }

    public OrderDetail createFromD(OrderDetailDTO dto) {
        OrderDetail entity = modelMapper.map(dto,OrderDetail.class);
        return entity;
    }

    public OrderDetailDTO createFromE(OrderDetail entity) {
        OrderDetailDTO dto = modelMapper.map(entity,OrderDetailDTO.class);
        return dto;
    }

    public OrderDetail updateEntity(OrderDetail entity, OrderDetailDTO dto) {
        if (entity != null && dto != null) {
            entity.setAmount(dto.getAmount());
            //entity.setKey(dto.getUnit());
            //entity.setId(dto.getId());

        }

        return entity;
    }
}