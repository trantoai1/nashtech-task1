package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.model.entity.Feature;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.repository.IFeatureRepository;
import com.nashtech.toaitran.repository.IFeatureTypeRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeatureServiceImpl implements IBaseService<FeatureDTO,Long>, IModelMapper<FeatureDTO, Feature> {
    private final IFeatureRepository repository;

    private final ModelMapper modelMapper;

    private final IFeatureTypeRepository typeRepository;
    public FeatureServiceImpl(IFeatureRepository repository, ModelMapper modelMapper, IFeatureTypeRepository typeRepository) {
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.typeRepository = typeRepository;
    }

    @Override
    public List<FeatureDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    @Override
    public FeatureDTO findById(Long id) {
        Optional<Feature> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Feature.class,id));
        return createFromE(entity.get());
    }

    @Override
    public FeatureDTO update(Long id, FeatureDTO dto) {
        Optional<Feature> entity = repository.findById(id);
        entity.orElseThrow(() -> new NotFoundException(Feature.class, id));
        return createFromE(repository.save(updateEntity(entity.get(),dto)));
    }


    @Override
    public FeatureDTO save(FeatureDTO dto) {
        return createFromE(repository.save(createFromD(dto)));
    }

    @Override
    public FeatureDTO delete(Long id) {
        Optional<Feature> entity = Optional.ofNullable(repository.findById(id)
                .orElseThrow(() -> new NotFoundException(Feature.class, id)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }

    @Override
    public Feature createFromD(FeatureDTO dto) {
        Feature entity = modelMapper.map(dto,Feature.class);
        return entity;
    }

    @Override
    public FeatureDTO createFromE(Feature entity) {
        FeatureDTO dto = modelMapper.map(entity,FeatureDTO.class);
        return dto;
    }

    @Override
    public Feature updateEntity(Feature entity, FeatureDTO dto) {
        if (entity != null && dto != null) {
            entity.setFeatureType(typeRepository.findById(dto.getFeatureTypeId()).orElseThrow(()->new NotFoundException(FeatureType.class,dto.getFeatureId())));
            entity.setSpecific(dto.getSpecific());
            //entity.setFeatureId(dto.getFeatureId());

        }

        return entity;
    }
}
