package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.model.entity.Feature;
import com.nashtech.toaitran.repository.IFeatureRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FeatureServiceImpl implements IBaseService<FeatureDTO,Long>, IModelMapper<FeatureDTO, Feature> {
    private final IFeatureRepository repository;

    private final ModelMapper modelMapper;

    public FeatureServiceImpl(IFeatureRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<FeatureDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    @Override
    public FeatureDTO findById(Long aLong) {
        return null;
    }

    @Override
    public FeatureDTO update(Long aLong, FeatureDTO t) {
        return null;
    }


    @Override
    public FeatureDTO save(FeatureDTO t) {
        return null;
    }

    @Override
    public FeatureDTO delete(Long aLong) {
        return null;
    }

    @Override
    public Feature createFromD(FeatureDTO dto) {
        return null;
    }

    @Override
    public FeatureDTO createFromE(Feature entity) {
        return null;
    }

    @Override
    public Feature updateEntity(Feature entity, FeatureDTO dto) {
        return null;
    }
}
