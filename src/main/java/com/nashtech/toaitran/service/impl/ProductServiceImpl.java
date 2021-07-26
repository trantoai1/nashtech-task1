package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.model.entity.Category;
import com.nashtech.toaitran.model.entity.Feature;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.ICategoryRepository;
import com.nashtech.toaitran.repository.IFeatureRepository;
import com.nashtech.toaitran.repository.IImageRepository;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements IBaseService<ProductDTO, Long>, IModelMapper<ProductDTO, Product> {
    private final IProductRepository repository;
    private final ModelMapper modelMapper;
    private final IFeatureRepository featureRepository;
    private final ICategoryRepository categoryRepository;
    private final IImageRepository imageRepository;
    public ProductServiceImpl(IProductRepository repository, ModelMapper modelMapper, IFeatureRepository featureRepository, ICategoryRepository categoryRepository, IImageRepository imageRepository) {
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.featureRepository = featureRepository;
        this.categoryRepository = categoryRepository;
        this.imageRepository = imageRepository;
    }
    private List<Feature> findAllFeature(Set<Long> featureIds)
    {
        return featureRepository.findAllByFeaturesID(featureIds);
    }


    public ProductDTO findById(Long id) {
        Optional<Product> entity = repository.findById(id);
        entity.orElseThrow(()-> new NotFoundException(Product.class,id));
        return createFromE(entity.get());
    }

    public ProductDTO update(Long id, ProductDTO productDTO) {
        Optional<Product> entity = repository.findById(id);

        entity.orElseThrow(()-> new NotFoundException(Product.class,id));
        entity.get().setUpdateDate(new Date());
        entity.get().setFeatures(findAllFeature(productDTO.getFeatureIds()));
        return createFromE(repository.save(updateEntity(entity.get(),productDTO)));
    }

    public ProductDTO save(ProductDTO productDTO) {
        Product entity = createFromD(productDTO);
        if(productDTO.getCreateDate()==null)
        {
            entity.setCreateDate(new Date());
        }
        return createFromE(repository.save(createFromD(productDTO)));
    }

    @Transactional
    public ProductDTO delete(Long id) {
        Optional<Product> entity = Optional.ofNullable(repository.findById(id)
                .orElseThrow(() -> new NotFoundException(Product.class, id)));
        imageRepository.deleteAllByProductID(id);
        featureRepository.deleteAllByProductID(id);
        repository.delete(entity.get());
        return createFromE(entity.get());
    }

    public Product createFromD(ProductDTO dto) {
        Product entity = modelMapper.map(dto,Product.class);
        entity.setFeatures(findAllFeature(dto.getFeatureIds()));
        return entity;
    }

    public ProductDTO createFromE(Product entity) {
        ProductDTO dto = modelMapper.map(entity,ProductDTO.class);
        dto.setCategoryName(entity.getCategory().getCateName());
        dto.setFeaturesName(entity.getFeatures().stream().map(Feature::getDetailFeature).collect(Collectors.joining(" ")));
        dto.setFeatureIds(entity.getFeatures().stream().map(Feature::getFeatureId).collect(Collectors.toSet()));
        dto.setFeatureTypes(entity.getFeatures().stream().map((e)->e.getFeatureType().getId()).collect(Collectors.toSet()));
        return dto;
    }

    public Product updateEntity(Product entity, ProductDTO dto) {
        if (entity != null && dto != null) {
            entity.setProductDesc(dto.getProductDesc());
            entity.setPrice(dto.getPrice());
            entity.setRemain(dto.getRemain());
            entity.setProductName(dto.getProductName());
            entity.setFeatures(findAllFeature(dto.getFeatureIds()));
            entity.setCategory(categoryRepository.findById(dto.getCategoryId())
                    .orElseThrow(()-> new NotFoundException(Category.class,dto.getCategoryId())));

        }

        return entity;
    }

    public List<ProductDTO> findAll(Long categoryId, Set<Long> featureIds) {

        return createFromEntities(repository.findAllByFilter(featureIds,categoryId));
    }


    public List<ProductDTO> findAll(Long categoryId) {

            return createFromEntities(repository.findAllByCategory_Id(categoryId));


    }
    public List<ProductDTO> findAllBySetProducts(Set<Long> productIds) {
        return createFromEntities(repository.findAllByProductID(productIds));
    }
    public List<ProductDTO> findAll(Set<Long> featureIds) {
        return createFromEntities(repository.findAllByFeaturesID(featureIds));
    }
    public List<ProductDTO> findAll() {
        return createFromEntities(repository.findAll());
    }
}
