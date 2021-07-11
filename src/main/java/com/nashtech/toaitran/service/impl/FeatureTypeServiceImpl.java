package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.FeatureTypeDTO;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.repository.IFeatureTypeRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeatureTypeServiceImpl implements IBaseService<FeatureTypeDTO, String>, IModelMapper<FeatureTypeDTO, FeatureType> {
    private final IFeatureTypeRepository repository;
    private final ModelMapper modelMapper;

    public FeatureTypeServiceImpl(IFeatureTypeRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }
    @Override
    public List<FeatureTypeDTO> findAll() {
        return createFromEntities(repository.findAll());
    }
    @Override
    public FeatureTypeDTO findById(String id) {
        Optional<FeatureType> entity = Optional.of(repository.findById(id.toUpperCase()).orElseThrow(() -> new NotFoundException(FeatureType.class, id.toUpperCase())));
        return createFromE(entity.get());
    }
    @Override
    public FeatureTypeDTO update(String id, FeatureTypeDTO dto) {
        Optional<FeatureType> entity = repository.findById(id.toUpperCase());
        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,id));
        return createFromE(repository.save(updateEntity(entity.get(),dto)));
    }
    @Override
    public FeatureTypeDTO save(FeatureTypeDTO dto) {
        return createFromE(repository.save(createFromD(dto)));
    }
    @Override
    public FeatureTypeDTO delete(String id) {
        Optional<FeatureType> entity = Optional.ofNullable(repository.findById(id)
                .orElseThrow(() -> new NotFoundException(FeatureType.class, id)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }
    @Override
    public FeatureType createFromD(FeatureTypeDTO dto) {
        FeatureType entity = modelMapper.map(dto,FeatureType.class);
        return entity;
    }

    public FeatureTypeDTO createFromE(FeatureType entity) {
        FeatureTypeDTO dto = modelMapper.map(entity,FeatureTypeDTO.class);
        return dto;

    }

    public FeatureType updateEntity(FeatureType entity, FeatureTypeDTO dto) {
        if (entity != null && dto != null) {
            entity.setName(dto.getName());
            entity.setUnit(dto.getUnit());
            //entity.setId(dto.getId());

        }

        return entity;
    }
}