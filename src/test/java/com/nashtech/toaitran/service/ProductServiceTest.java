package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.model.entity.Category;
import com.nashtech.toaitran.model.entity.Product;

import com.nashtech.toaitran.repository.ICategoryRepository;
import com.nashtech.toaitran.repository.IProductRepository;

import com.nashtech.toaitran.service.impl.ProductServiceImpl;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ProductServiceTest {
    public static final long ID = 1;
    public static final String ENTITYNAME = "CateTest";
    public static final String HAS_ID_NOT_FOUND = "Product has id=" + String.valueOf(ID) + " not found!";
    public static final String DTONAME = "DTONAME";
    @Mock
    IProductRepository repository;
    @Mock
    ModelMapper modelMapper;
    @Mock
    ICategoryRepository typeRepository;
    @InjectMocks
    ProductServiceImpl service;

    @NotNull
    private Product newEntity() {
        Product entity = new Product();
        entity.setProductid(ID);
        entity.setProductName(ENTITYNAME);
        Category type = new Category();
        type.setId(ID);
        entity.setCategory(type);
        //entity.se("GB");
        return entity;
    }

    @NotNull
    private ProductDTO newDTO() {
        ProductDTO dto = new ProductDTO();
        dto.setProductId(ID);
        dto.setProductName(DTONAME);
        dto.setCategoryId(ID + 1);

        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<Product> list = new ArrayList<>();
        Product entity = new Product();
        Product entity2 = new Product();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<ProductDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        Optional<Product> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), ProductDTO.class)).thenReturn(newDTO());
        ProductDTO dto2 = service.findById(ID);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void findById_Null() {

        when(repository.findById(ID)).thenThrow(new NotFoundException(Product.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update() {
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
    public void save() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(modelMapper.map(dto, Product.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, ProductDTO.class)).thenReturn(newDTO());
        ProductDTO dto2 = service.save(dto);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void delete() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        Optional<Product> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), ProductDTO.class)).thenReturn(newDTO());
        ProductDTO dto2 = service.delete(ID);
        assertEquals(dto2.getProductName(), DTONAME);
    }

    @Test
    public void updateEntity() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(typeRepository.findById(dto.getCategoryId())).thenReturn(Optional.ofNullable(entity.getCategory()));
        service.updateEntity(entity, dto);
        assertEquals(entity.getProductName(), dto.getProductName());
    }

    @Test
    public void createFromE() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(modelMapper.map(entity, ProductDTO.class)).thenReturn(newDTO());
        ProductDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getProductName(), dto.getProductName());
    }

    @Test
    public void createFromD() {
        Product entity = newEntity();
        ProductDTO dto = newDTO();
        when(modelMapper.map(dto, Product.class)).thenReturn(newEntity());
        Product test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getProductName(), entity.getProductName());
    }
}
