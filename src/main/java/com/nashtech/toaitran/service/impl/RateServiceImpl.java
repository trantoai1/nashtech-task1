package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.model.embeded.RateKey;
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
//        Optional<Rate> entity = repository.findById(rateKey);
//        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,rateKey.getProduct().getProductid()));
//        return createFromE(entity.get());
        return null;
    }

    public RateDTO update(RateKey rateKey, RateDTO rateDTO) {
//        Optional<Rate> entity = repository.findById(rateKey);
//        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,rateKey.getProduct().getProductid()));
//        return createFromE(repository.save(updateEntity(entity.get(),rateDTO)));
        return null;
    }

    public RateDTO save(RateDTO rateDTO) {
        return createFromE(repository.save(createFromD(rateDTO)));
    }

    public RateDTO delete(RateKey rateKey) {
//        Optional<Rate> entity = Optional.ofNullable(repository.findById(rateKey)
//                .orElseThrow(() -> new NotFoundException(Feature.class, rateKey.getProduct().getProductid())));
//        repository.delete(entity.get());
//        return createFromE(entity.get());
        return null;
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
        }
        return entity;
    }

    public RateDTO findById(Long productId, Long userId) {
        Optional<Rate> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_User_Id(productId, userId).orElseThrow(() -> new NotFoundException(Rate.class, productId + "-" + userId)));
        return createFromE(entity.get());
    }

    public RateDTO update(Long productId, Long userId, RateDTO dto) {
        Optional<Rate> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_User_Id(productId, userId).orElseThrow(() -> new NotFoundException(Rate.class, productId + "-" + userId)));

        return createFromE(repository.save(updateEntity(entity.get(), dto)));
    }

    public RateDTO delete(Long productId, Long userId) {
        Optional<Rate> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_User_Id(productId, userId).orElseThrow(() -> new NotFoundException(Rate.class, productId + "-" + userId)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }
}
