package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.ImageDTO;
import com.nashtech.toaitran.model.entity.Image;

import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.IImageRepository;

import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.impl.ImageServiceImpl;
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
public class ImageServiceTest {
    public static final long ID = 1;
    public static final String ENTITYNAME = "CateTest";
    public static final String HAS_ID_NOT_FOUND = "Image has id=" + String.valueOf(ID) + " not found!";
    public static final String DTONAME = "DTONAME";
    @Mock
    IImageRepository repository;
    @Mock
    ModelMapper modelMapper;
    @Mock
    IProductRepository typeRepository;
    @InjectMocks
    ImageServiceImpl service;

    @NotNull
    private Image newEntity() {
        Image entity = new Image();
        entity.setId(ID);
        entity.setUrl(ENTITYNAME);
        Product product = new Product();
        product.setProductid(ID);
        entity.setProduct(product);

        return entity;
    }

    @NotNull
    private ImageDTO newDTO() {
        ImageDTO dto = new ImageDTO();
        dto.setId(ID);
        dto.setUrl(DTONAME);
        dto.setProductId(ID + 1);

        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<Image> list = new ArrayList<>();
        Image entity = new Image();
        Image entity2 = new Image();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<ImageDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        Optional<Image> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), ImageDTO.class)).thenReturn(newDTO());
        ImageDTO dto2 = service.findById(ID);
        assertEquals(dto2.getUrl(), DTONAME);
    }

    @Test
    public void findById_Null() {

        when(repository.findById(ID)).thenThrow(new NotFoundException(Image.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        Optional<Image> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(typeRepository.findById(dto.getProductId())).thenReturn(Optional.ofNullable(entity.getProduct()));
        when(modelMapper.map(optional.get(), ImageDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        ImageDTO dto2 = service.update(ID, dto);
        assertEquals(dto2.getUrl(), DTONAME);
    }

    @Test
    public void save() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        when(modelMapper.map(dto, Image.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, ImageDTO.class)).thenReturn(newDTO());
        ImageDTO dto2 = service.save(dto);
        assertEquals(dto2.getUrl(), DTONAME);
    }

    @Test
    public void delete() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        Optional<Image> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), ImageDTO.class)).thenReturn(newDTO());
        ImageDTO dto2 = service.delete(ID);
        assertEquals(dto2.getUrl(), DTONAME);
    }

    @Test
    public void updateEntity() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        when(typeRepository.findById(dto.getProductId())).thenReturn(Optional.ofNullable(entity.getProduct()));
        service.updateEntity(entity, dto);
        assertEquals(entity.getUrl(), dto.getUrl());
    }

    @Test
    public void createFromE() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        when(modelMapper.map(entity, ImageDTO.class)).thenReturn(newDTO());
        ImageDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getUrl(), dto.getUrl());
    }

    @Test
    public void createFromD() {
        Image entity = newEntity();
        ImageDTO dto = newDTO();
        when(modelMapper.map(dto, Image.class)).thenReturn(newEntity());
        Image test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getUrl(), entity.getUrl());
    }
}
