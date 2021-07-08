package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements IBaseService<ProductDTO, Long>, IModelMapper<ProductDTO, Product> {
    private final IProductRepository repository;
    private final ModelMapper modelMapper;

    public ProductServiceImpl(IProductRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<ProductDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    public ProductDTO findById(Long id) {
        Optional<Product> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Product.class,id));
        return createFromE(entity.get());
    }

    public ProductDTO update(Long id, ProductDTO productDTO) {
        Optional<Product> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Product.class,id));
        return createFromE(repository.save(updateEntity(entity.get(),productDTO)));
    }

    public ProductDTO save(ProductDTO productDTO) {
        return createFromE(repository.save(createFromD(productDTO)));
    }

    public ProductDTO delete(Long id) {
        Product entity = repository.getById(id);
        repository.delete(entity);
        return createFromE(entity);
    }

    public Product createFromD(ProductDTO dto) {
        Product entity = modelMapper.map(dto,Product.class);
        return entity;
    }

    public ProductDTO createFromE(Product entity) {
        ProductDTO dto = modelMapper.map(entity,ProductDTO.class);
        return dto;
    }

    public Product updateEntity(Product entity, ProductDTO dto) {
        if (entity != null && dto != null) {
            entity.setProductDesc(dto.getProductDesc());
            entity.setPrice(dto.getPrice());
            entity.setProductid(dto.getProductId());

        }

        return entity;
    }
}
