package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IBaseService<ProductDTO, Long>, IModelMapper<ProductDTO, Product> {
    private final IProductRepository repository;
    private final ModelMapper modelMapper;

    public ProductServiceImpl(IProductRepository repository, ModelMapper modelMapper) {
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public List<ProductDTO> findAll() {
        return null;
    }

    public ProductDTO findById(Long aLong) {
        return null;
    }

    public ProductDTO update(Long aLong, ProductDTO productDTO) {
        return null;
    }

    public ProductDTO save(ProductDTO productDTO) {
        return null;
    }

    public ProductDTO delete(Long aLong) {
        return null;
    }

    public Product createFromD(ProductDTO dto) {
        return null;
    }

    public ProductDTO createFromE(Product entity) {
        return null;
    }

    public Product updateEntity(Product entity, ProductDTO dto) {
        return null;
    }
}
