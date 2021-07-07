package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.OrderDetailDTO;
import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import com.nashtech.toaitran.model.entity.OrderDetail;
import com.nashtech.toaitran.repository.IOrderDetailRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailServiceImpl implements IBaseService<OrderDetailDTO, OrderDetailKey>, IModelMapper<OrderDetailDTO, OrderDetail> {
    private final IOrderDetailRepository repository;
    private final ModelMapper modelMapper;

    public OrderDetailServiceImpl(IOrderDetailRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<OrderDetailDTO> findAll() {
        return null;
    }

    public OrderDetailDTO findById(OrderDetailKey orderDetailKey) {
        return null;
    }

    public OrderDetailDTO update(OrderDetailKey orderDetailKey, OrderDetailDTO orderDetailDTO) {
        return null;
    }

    public OrderDetailDTO save(OrderDetailDTO orderDetailDTO) {
        return null;
    }

    public OrderDetailDTO delete(OrderDetailKey orderDetailKey) {
        return null;
    }

    public OrderDetail createFromD(OrderDetailDTO dto) {
        return null;
    }

    public OrderDetailDTO createFromE(OrderDetail entity) {
        return null;
    }

    public OrderDetail updateEntity(OrderDetail entity, OrderDetailDTO dto) {
        return null;
    }
}