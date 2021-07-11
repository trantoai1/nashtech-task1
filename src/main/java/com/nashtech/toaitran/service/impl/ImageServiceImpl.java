package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.ImageDTO;
import com.nashtech.toaitran.model.entity.Image;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.IImageRepository;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements IBaseService<ImageDTO, Long>, IModelMapper<ImageDTO, Image> {
    private final IImageRepository repository;
    private final ModelMapper modelMapper;
    private final IProductRepository productRepository;
    public ImageServiceImpl(IImageRepository repository, ModelMapper modelMapper, IProductRepository productRepository) {
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.productRepository = productRepository;
    }

    public List<ImageDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    public ImageDTO findById(Long id) {
        Optional<Image> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Image.class,id));
        return createFromE(entity.get());
    }

    public ImageDTO update(Long id, ImageDTO dto) {
        Optional<Image> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Image.class,id));
        return createFromE(repository.save(updateEntity(entity.get(),dto)));
    }

    public ImageDTO save(ImageDTO dto) {
        return createFromE(repository.save(createFromD(dto)));
    }

    public ImageDTO delete(Long id) {
        Optional<Image> entity = Optional.ofNullable(repository.findById(id)
                .orElseThrow(() -> new NotFoundException(Image.class, id)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }

    public Image createFromD(ImageDTO dto) {
        Image entity = modelMapper.map(dto,Image.class);
        return entity;
    }

    public ImageDTO createFromE(Image entity) {
        ImageDTO dto = modelMapper.map(entity,ImageDTO.class);
        return dto;
    }

    public Image updateEntity(Image entity, ImageDTO dto) {
        if (entity != null && dto != null) {
            entity.setAlt(dto.getAlt());
            entity.setHeight(dto.getHeight());
            //entity.setId(dto.getId());
            entity.setProduct(productRepository.findById(dto.getProductId()).orElseThrow(()-> new NotFoundException(Product.class,dto.getProductId())));
            entity.setUrl(dto.getUrl());
            entity.setWidth(dto.getWidth());

        }

        return entity;
    }
}
