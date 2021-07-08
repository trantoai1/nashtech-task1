package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.model.entity.Rate;
import com.nashtech.toaitran.repository.IRateRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RateServiceImpl implements IBaseService<RateDTO, RateKey>, IModelMapper<RateDTO, Rate> {
    private final IRateRepository repository;
    private final ModelMapper modelMapper;

    public RateServiceImpl(IRateRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<RateDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    public RateDTO findById(RateKey rateKey) {
        Optional<Rate> entity = repository.findById(rateKey);
        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,rateKey.getProduct().getProductid()));
        return createFromE(entity.get());
    }

    public RateDTO update(RateKey rateKey, RateDTO rateDTO) {
        Optional<Rate> entity = repository.findById(rateKey);
        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,rateKey.getProduct().getProductid()));
        return createFromE(repository.save(updateEntity(entity.get(),rateDTO)));
    }

    public RateDTO save(RateDTO rateDTO) {
        return createFromE(repository.save(createFromD(rateDTO)));
    }

    public RateDTO delete(RateKey rateKey) {
        Rate entity = repository.getById(rateKey);
        repository.delete(entity);
        return createFromE(entity);
    }

    public Rate createFromD(RateDTO dto) {
        Rate entity = modelMapper.map(dto,Rate.class);
        return entity;
    }

    public RateDTO createFromE(Rate entity) {
        RateDTO dto = modelMapper.map(entity,RateDTO.class);
        return dto;
    }

    public Rate updateEntity(Rate entity, RateDTO dto) {
        if (entity != null && dto != null) {
            entity.setComment(dto.getComment());
            entity.setPoint(dto.getPoint());
            //entity.s(dto.getId());

        }

        return entity;
    }
}
