package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.model.entity.Rate;
import com.nashtech.toaitran.model.entity.User;
import com.nashtech.toaitran.repository.IRateRepository;
import com.nashtech.toaitran.service.impl.RateServiceImpl;
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
public class RateServiceTest {
    public static final long OID = 1;
    public static final long PID = 2;
    public static final int ENTITYNAME = 3;
    public static final String HAS_ID_NOT_FOUND = "Rate has id=" + OID + "-" + PID + " not found!";
    public static final int DTONAME = 5;
    @Mock
    IRateRepository repository;
    @Mock
    ModelMapper modelMapper;

    @InjectMocks
    RateServiceImpl service;

    @NotNull
    private Rate newEntity() {
        Rate entity = new Rate();
        RateKey key = new RateKey();
        Product product = new Product();
        product.setProductid(PID);
        User user = new User();
        user.setId(OID);
        key.setUser(user);
        key.setProduct(product);
        entity.setKey(key);
        entity.setPoint(ENTITYNAME);
        return entity;
    }

    @NotNull
    private RateDTO newDTO() {
        RateDTO dto = new RateDTO();
        dto.setUserId(OID);
        dto.setProductId(PID);
        dto.setPoint(DTONAME);
        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<Rate> list = new ArrayList<>();
        Rate entity = new Rate();
        Rate entity2 = new Rate();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<RateDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        Rate entity = newEntity();
        //RateDTO dto = newDTO();
        Optional<Rate> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findByKey_Product_ProductidAndKey_User_Id(PID, OID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), RateDTO.class)).thenReturn(newDTO());
        RateDTO dto2 = service.findById(PID, OID);
        assertEquals(dto2.getPoint(), DTONAME);
    }

    @Test
    public void findById_Null() {

        when(repository.findByKey_Product_ProductidAndKey_User_Id(PID, OID)).thenThrow(new NotFoundException(Rate.class, OID + "-" + PID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(PID, OID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void findByIdKey_Null() {
        Rate entity = newEntity();
        assertNull(service.findById(entity.getKey()));
    }

    @Test
    public void update_Key() {
        Rate entity = newEntity();
        assertNull(service.update(entity.getKey(), newDTO()));
    }

    @Test
    public void delete_Key() {
        Rate entity = newEntity();
        assertNull(service.delete(entity.getKey()));
    }

    @Test
    public void update() {
        Rate entity = newEntity();
        RateDTO dto = newDTO();
        Optional<Rate> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findByKey_Product_ProductidAndKey_User_Id(PID, OID)).thenReturn(optional);
        //when(typeRepository.findById(dto.getRateTypeId())).thenReturn(Optional.ofNullable(entity.getRateType()));
        when(modelMapper.map(optional.get(), RateDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        RateDTO dto2 = service.update(PID, OID, dto);
        assertEquals(dto2.getPoint(), DTONAME);
    }

    @Test
    public void save() {
        Rate entity = newEntity();
        RateDTO dto = newDTO();
        when(modelMapper.map(dto, Rate.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, RateDTO.class)).thenReturn(newDTO());
        RateDTO dto2 = service.save(dto);
        assertEquals(dto2.getPoint(), DTONAME);
    }

    @Test
    public void delete() {
        Rate entity = newEntity();
        //RateDTO dto = newDTO();
        Optional<Rate> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findByKey_Product_ProductidAndKey_User_Id(PID, OID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), RateDTO.class)).thenReturn(newDTO());
        RateDTO dto2 = service.delete(PID, OID);
        assertEquals(dto2.getPoint(), DTONAME);
    }

    @Test
    public void updateEntity() {
        Rate entity = newEntity();
        RateDTO dto = newDTO();
        //when(typeRepository.findById(dto.getRateTypeId())).thenReturn(Optional.ofNullable(entity.getRateType()));
        service.updateEntity(entity, dto);
        assertEquals(entity.getPoint(), dto.getPoint());
    }

    @Test
    public void createFromE() {
        Rate entity = newEntity();
        RateDTO dto = newDTO();
        when(modelMapper.map(entity, RateDTO.class)).thenReturn(newDTO());
        RateDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getPoint(), dto.getPoint());
    }

    @Test
    public void createFromD() {
        Rate entity = newEntity();
        RateDTO dto = newDTO();
        when(modelMapper.map(dto, Rate.class)).thenReturn(newEntity());
        Rate test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getPoint(), entity.getPoint());
    }
}
