package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.model.entity.Category;
import com.nashtech.toaitran.model.entity.Feature;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.ICategoryRepository;
import com.nashtech.toaitran.repository.IFeatureRepository;
import com.nashtech.toaitran.repository.IImageRepository;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.impl.ProductServiceImpl;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ProductServiceTest {
    public static final long ID = 1;
    public static final String ENTITYNAME = "CateTest";
    public static final String HAS_ID_NOT_FOUND = "Product has id=" + ID + " not found!";
    public static final String DTONAME = "DTONAME";
    @Mock
    IProductRepository repository;
    @Mock
    ModelMapper modelMapper;
    @Mock
    IFeatureRepository featureRepository;
    @Mock
    ICategoryRepository typeRepository;
    @Mock
    IImageRepository imageRepository;
    @InjectMocks
    ProductServiceImpl service;
    private static  List<Product> list;
    private static Set<Long> set;
    @BeforeEach
    void initLoop()
    {

        when(featureRepository.findById(Mockito.anyLong())).thenReturn(Optional.of(newFeature()));
        list = new ArrayList<>();
        Product entity = newEntity();
        Product entity2 = newEntity();
        //System.out.println(entity.getCategory().getCateName());
        list.add(entity);
        list.add(entity2);
        when(modelMapper.map(entity, ProductDTO.class)).thenReturn(newDTO());
        when(modelMapper.map(entity2, ProductDTO.class)).thenReturn(newDTO());
        set = new HashSet<>();
        set.add(ID);
    }
    private Feature newFeature()
    {
        Feature feature = new Feature();
        feature.setFeatureId(1L);
        FeatureType type = new FeatureType();
        type.setUnit("GB");
        feature.setFeatureType(type);
        feature.setSpecific("s");
        return feature;
    }

    @NotNull
    private Product newEntity() {
        Product entity = new Product();
        entity.setProductid(ID);
        entity.setProductName(ENTITYNAME);
        Category type = new Category();
        type.setId(ID);
        type.setCateName("CATE");

        entity.setCategory(type);
        List <Feature> featureList = new ArrayList<>();
        featureList.add(newFeature());
        entity.setFeatures(featureList);
        //entity.se("GB");
        return entity;
    }

    @NotNull
    private ProductDTO newDTO() {
        ProductDTO dto = new ProductDTO();
        dto.setProductId(ID);
        dto.setProductName(DTONAME);
        dto.setCategoryId(ID + 1);
        dto.setFeaturesName("FEATURE");
        dto.setCategoryName("CATE");
        return dto;
    }

    @Test
    public void findAll_Return_LengthList() {
        assertNotNull(service);

        when(repository.findAll()).thenReturn(list);
        Collection<ProductDTO> result = service.findAll();
        assertEquals(2, result.size());
    }
    @Test
    public void findAll_CategoryId_FeatureIds_Return_LengthList() {
        assertNotNull(service);

        when(repository.findAllByFilter(set,ID)).thenReturn(list);
        Collection<ProductDTO> result = service.findAll(ID,set);
        assertEquals(2, result.size());
    }

    @Test
    public void findAll_CategoryId_Return_LengthList() {
        assertNotNull(service);

        when(repository.findAllByCategory_Id(ID)).thenReturn(list);
        Collection<ProductDTO> result = service.findAll(ID);
        assertEquals(2, result.size());
    }
    @Test
    public void findAll_FeatureIds_Return_LengthList() {
        assertNotNull(service);

        when(repository.findAllByFeaturesID(set)).thenReturn(list);
        Collection<ProductDTO> result = service.findAll(set);
        assertEquals(2, result.size());
    }
    @Test
    public void findAll_ListProduct_Return_LengthList() {
        assertNotNull(service);

        when(repository.findAllByProductID(set)).thenReturn(list);
        Collection<ProductDTO> result = service.findAllBySetProducts(set);
        assertEquals(2, result.size());
    }

    @Test
    public void findById_ReturnDTO_WithName() {
        Product entity = newEntity();
        //ProductDTO dto = newDTO();
        Optional<Product> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), ProductDTO.class)).thenReturn(newDTO());
        ProductDTO dto2 = service.findById(ID);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void findById_ReturnNull() {

        when(repository.findById(ID)).thenThrow(new NotFoundException(Product.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update_ReturnDTO_WithName() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        Optional<Product> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(typeRepository.findById(dto.getCategoryId())).thenReturn(Optional.ofNullable(entity.getCategory()));
        when(modelMapper.map(optional.get(), ProductDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        ProductDTO dto2 = service.update(ID, dto);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void save_ReturnDTO_WithName() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(modelMapper.map(dto, Product.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, ProductDTO.class)).thenReturn(newDTO());
        ProductDTO dto2 = service.save(dto);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void delete_ReturnDTO_WithName() {
        Product entity = newEntity();
        //ProductDTO dto = newDTO();
        Optional<Product> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), ProductDTO.class)).thenReturn(newDTO());
        ProductDTO dto2 = service.delete(ID);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void updateEntity_ReturnEntity_WithName() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(typeRepository.findById(dto.getCategoryId())).thenReturn(Optional.ofNullable(entity.getCategory()));
        service.updateEntity(entity, dto);
        assertEquals(entity.getProductName(), dto.getProductName());
    }

    @Test
    public void createFromE_ReturnDTO_WithName() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(modelMapper.map(entity, ProductDTO.class)).thenReturn(newDTO());
        ProductDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getProductName(), dto.getProductName());
    }

    @Test
    public void createFromD_ReturnEntity_WithName() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(modelMapper.map(dto, Product.class)).thenReturn(newEntity());
        Product test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getProductName(), entity.getProductName());
    }
}
