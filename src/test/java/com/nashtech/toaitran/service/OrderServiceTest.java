package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.model.entity.Order;
import com.nashtech.toaitran.repository.IOrderRepository;
import com.nashtech.toaitran.service.impl.OrderServiceImpl;
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
public class OrderServiceTest {
    public static final long ID = 1;
    public static final String ENTITYNAME = "CateTest";
    public static final String HAS_ID_NOT_FOUND = "Order has id=" + String.valueOf(ID) + " not found!";
    public static final String DTONAME = "DTONAME";
    @Mock
    IOrderRepository repository;
    @Mock
    ModelMapper modelMapper;

    @InjectMocks
    OrderServiceImpl service;

    @NotNull
    private Order newEntity() {
        Order entity = new Order();
        entity.setOrderid(ID);
        entity.setAddress(ENTITYNAME);
        return entity;
    }

    @NotNull
    private OrderDTO newDTO() {
        OrderDTO dto = new OrderDTO();
        dto.setOrderId(ID);
        dto.setAddress(DTONAME);
        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<Order> list = new ArrayList<>();
        Order entity = new Order();
        Order entity2 = new Order();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<OrderDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        Optional<Order> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), OrderDTO.class)).thenReturn(newDTO());
        OrderDTO dto2 = service.findById(ID);
        assertEquals(dto2.getAddress(), DTONAME);
    }

    @Test
    public void findById_Null() {

        when(repository.findById(ID)).thenThrow(new NotFoundException(Order.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        Optional<Order> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), OrderDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        OrderDTO dto2 = service.update(ID, dto);
        assertEquals(dto2.getAddress(), DTONAME);
    }

    @Test
    public void save() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        when(modelMapper.map(dto, Order.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, OrderDTO.class)).thenReturn(newDTO());
        OrderDTO dto2 = service.save(dto);
        assertEquals(dto2.getAddress(), DTONAME);
    }

    @Test
    public void delete() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        Optional<Order> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), OrderDTO.class)).thenReturn(newDTO());
        OrderDTO dto2 = service.delete(ID);
        assertEquals(dto2.getAddress(), DTONAME);
    }

    @Test
    public void updateEntity() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        service.updateEntity(entity, dto);
        assertEquals(entity.getAddress(), dto.getAddress());
    }

    @Test
    public void createFromE() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        when(modelMapper.map(entity, OrderDTO.class)).thenReturn(newDTO());
        OrderDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getAddress(), dto.getAddress());
    }

    @Test
    public void createFromD() {
        Order entity = newEntity();
        OrderDTO dto = newDTO();
        when(modelMapper.map(dto, Order.class)).thenReturn(newEntity());
        Order test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getAddress(), entity.getAddress());
    }
}
