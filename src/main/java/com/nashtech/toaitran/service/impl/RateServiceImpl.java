package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.Rate;
import com.nashtech.toaitran.repository.IRateRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RateServiceImpl implements IBaseService<RateDTO, RateKey>, IModelMapper<RateDTO, Rate> {
    private final IRateRepository repository;
    private final ModelMapper modelMapper;

    public RateServiceImpl(IRateRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<RateDTO> findAll() {
        return null;
    }

    public RateDTO findById(RateKey rateKey) {
        return null;
    }

    public RateDTO update(RateKey rateKey, RateDTO rateDTO) {
        return null;
    }

    public RateDTO save(RateDTO rateDTO) {
        return null;
    }

    public RateDTO delete(RateKey rateKey) {
        return null;
    }

    public Rate createFromD(RateDTO dto) {
        return null;
    }

    public RateDTO createFromE(Rate entity) {
        return null;
    }

    public Rate updateEntity(Rate entity, RateDTO dto) {
        return null;
    }
}
