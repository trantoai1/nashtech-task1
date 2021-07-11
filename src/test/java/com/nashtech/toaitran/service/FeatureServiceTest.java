package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.model.entity.Feature;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.repository.IFeatureRepository;
import com.nashtech.toaitran.repository.IFeatureTypeRepository;
import com.nashtech.toaitran.service.impl.FeatureServiceImpl;
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
public class FeatureServiceTest {
    public static final long ID = 1;
    public static final String ENTITYNAME = "CateTest";
    public static final String HAS_ID_NOT_FOUND = "Feature has id=" + ID + " not found!";
    public static final String DTONAME = "DTONAME";
    @Mock
    IFeatureRepository repository;
    @Mock
    ModelMapper modelMapper;
    @Mock
    IFeatureTypeRepository typeRepository;
    @InjectMocks
    FeatureServiceImpl service;

    @NotNull
    private Feature newEntity() {
        Feature entity = new Feature();
        entity.setFeatureId(ID);
        entity.setSpecific(ENTITYNAME);
        FeatureType type = new FeatureType();
        type.setId(String.valueOf(ID));
        entity.setFeatureType(type);
        //entity.se("GB");
        return entity;
    }

    @NotNull
    private FeatureDTO newDTO() {
        FeatureDTO dto = new FeatureDTO();
        dto.setFeatureId(ID);
        dto.setSpecific(DTONAME);
        dto.setFeatureTypeId(String.valueOf(ID + 1));

        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<Feature> list = new ArrayList<>();
        Feature entity = new Feature();
        Feature entity2 = new Feature();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<FeatureDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        Feature entity = newEntity();
        //FeatureDTO dto = newDTO();
        Optional<Feature> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), FeatureDTO.class)).thenReturn(newDTO());
        FeatureDTO dto2 = service.findById(ID);
        assertEquals(dto2.getSpecific(), DTONAME);
    }

    @Test
    public void findById_Null() {

        when(repository.findById(ID)).thenThrow(new NotFoundException(Feature.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update() {
        Feature entity = newEntity();
        FeatureDTO dto = newDTO();
        Optional<Feature> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(typeRepository.findById(dto.getFeatureTypeId())).thenReturn(Optional.ofNullable(entity.getFeatureType()));
        when(modelMapper.map(optional.get(), FeatureDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        FeatureDTO dto2 = service.update(ID, dto);
        assertEquals(dto2.getSpecific(), DTONAME);
    }

    @Test
    public void save() {
        Feature entity = newEntity();
        FeatureDTO dto = newDTO();
        when(modelMapper.map(dto, Feature.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, FeatureDTO.class)).thenReturn(newDTO());
        FeatureDTO dto2 = service.save(dto);
        assertEquals(dto2.getSpecific(), DTONAME);
    }

    @Test
    public void delete() {
        Feature entity = newEntity();
        //FeatureDTO dto = newDTO();
        Optional<Feature> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), FeatureDTO.class)).thenReturn(newDTO());
        FeatureDTO dto2 = service.delete(ID);
        assertEquals(dto2.getSpecific(), DTONAME);
    }

    @Test
    public void updateEntity() {
        Feature entity = newEntity();
        FeatureDTO dto = newDTO();
        when(typeRepository.findById(dto.getFeatureTypeId())).thenReturn(Optional.ofNullable(entity.getFeatureType()));
        service.updateEntity(entity, dto);
        assertEquals(entity.getSpecific(), dto.getSpecific());
    }

    @Test
    public void createFromE() {
        Feature entity = newEntity();
        FeatureDTO dto = newDTO();
        when(modelMapper.map(entity, FeatureDTO.class)).thenReturn(newDTO());
        FeatureDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getSpecific(), dto.getSpecific());
    }

    @Test
    public void createFromD() {
        Feature entity = newEntity();
        FeatureDTO dto = newDTO();
        when(modelMapper.map(dto, Feature.class)).thenReturn(newEntity());
        Feature test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getSpecific(), entity.getSpecific());
    }
}
