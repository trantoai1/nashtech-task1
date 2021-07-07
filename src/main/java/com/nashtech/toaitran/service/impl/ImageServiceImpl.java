package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.ImageDTO;
import com.nashtech.toaitran.model.entity.Image;
import com.nashtech.toaitran.repository.IImageRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements IBaseService<ImageDTO, Long>, IModelMapper<ImageDTO, Image> {
    private final IImageRepository repository;
    private final ModelMapper modelMapper;

    public ImageServiceImpl(IImageRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<ImageDTO> findAll() {
        return null;
    }

    public ImageDTO findById(Long aLong) {
        return null;
    }

    public ImageDTO update(Long aLong, ImageDTO imageDTO) {
        return null;
    }

    public ImageDTO save(ImageDTO imageDTO) {
        return null;
    }

    public ImageDTO delete(Long aLong) {
        return null;
    }

    public Image createFromD(ImageDTO dto) {
        return null;
    }

    public ImageDTO createFromE(Image entity) {
        return null;
    }

    public Image updateEntity(Image entity, ImageDTO dto) {
        return null;
    }
}
