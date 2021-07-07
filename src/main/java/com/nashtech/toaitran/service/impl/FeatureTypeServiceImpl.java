package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.FeatureTypeDTO;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.repository.IFeatureTypeRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeatureTypeServiceImpl implements IBaseService<FeatureTypeDTO, String>, IModelMapper<FeatureTypeDTO, FeatureType> {
    private final IFeatureTypeRepository repository;
    private final ModelMapper modelMapper;

    public FeatureTypeServiceImpl(IFeatureTypeRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<FeatureTypeDTO> findAll() {
        return null;
    }

    public FeatureTypeDTO findById(String s) {
        return null;
    }

    public FeatureTypeDTO update(String s, FeatureTypeDTO featureTypeDTO) {
        return null;
    }

    public FeatureTypeDTO save(FeatureTypeDTO featureTypeDTO) {
        return null;
    }

    public FeatureTypeDTO delete(String s) {
        return null;
    }

    public FeatureType createFromD(FeatureTypeDTO dto) {
        return null;
    }

    public FeatureTypeDTO createFromE(FeatureType entity) {
        return null;
    }

    public FeatureType updateEntity(FeatureType entity, FeatureTypeDTO dto) {
        return null;
    }
}