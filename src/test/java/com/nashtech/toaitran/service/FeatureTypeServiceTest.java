package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.FeatureTypeDTO;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.repository.IFeatureTypeRepository;
import com.nashtech.toaitran.service.impl.FeatureTypeServiceImpl;
import org.jetbrains.annotations.NotNull;
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
public class FeatureTypeServiceTest {
    public static final String ID = "CPU";
    public static final String ENTITYNAME = "ENTITY_NAME";
    public static final String HAS_ID_NOT_FOUND = "FeatureType has id=" + String.valueOf(ID) + " not found!";
    public static final String DTONAME = "DTO_NAME";
    @Mock
    IFeatureTypeRepository repository;
    @Mock
    ModelMapper modelMapper;
    @InjectMocks
    FeatureTypeServiceImpl service;

    @NotNull
    private FeatureType newEntity() {
        FeatureType entity = new FeatureType();
        entity.setId(ID);
        entity.setName(ENTITYNAME);
        entity.setUnit("GB");
        return entity;
    }

    @NotNull
    private FeatureTypeDTO newDTO() {
        FeatureTypeDTO dto = new FeatureTypeDTO();
        dto.setId(ID);
        dto.setName(DTONAME);
        dto.setUnit("");
        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<FeatureType> list = new ArrayList<>();
        FeatureType entity = new FeatureType();
        FeatureType entity2 = new FeatureType();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<FeatureTypeDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        Optional<FeatureType> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), FeatureTypeDTO.class)).thenReturn(newDTO());
        FeatureTypeDTO dto2 = service.findById(ID);
        assertEquals(dto2.getName(), DTONAME);
    }

    @Test
    public void findById_Null() {
        when(repository.findById(Mockito.anyString())).thenThrow(new NotFoundException(FeatureType.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        Optional<FeatureType> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), FeatureTypeDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        FeatureTypeDTO dto2 = service.update(ID, dto);
        assertEquals(dto2.getName(), DTONAME);
    }

    @Test
    public void save() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        when(modelMapper.map(dto, FeatureType.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, FeatureTypeDTO.class)).thenReturn(newDTO());
        FeatureTypeDTO dto2 = service.save(dto);
        assertEquals(dto2.getName(), DTONAME);
    }

    @Test
    public void delete() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        Optional<FeatureType> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), FeatureTypeDTO.class)).thenReturn(newDTO());
        FeatureTypeDTO dto2 = service.delete(ID);
        assertEquals(dto2.getName(), DTONAME);
    }

    @Test
    public void updateEntity() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        service.updateEntity(entity, dto);
        assertEquals(entity.getName(), dto.getName());
    }

    @Test
    public void createFromE() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        when(modelMapper.map(entity, FeatureTypeDTO.class)).thenReturn(newDTO());
        FeatureTypeDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getName(), dto.getName());
    }

    @Test
    public void createFromD() {
        FeatureType entity = newEntity();
        FeatureTypeDTO dto = newDTO();
        when(modelMapper.map(dto, FeatureType.class)).thenReturn(newEntity());
        FeatureType test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getName(), entity.getName());
    }
}
