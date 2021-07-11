package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.OrderDetailDTO;
import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import com.nashtech.toaitran.model.entity.Order;
import com.nashtech.toaitran.model.entity.OrderDetail;

import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.IOrderDetailRepository;

import com.nashtech.toaitran.service.impl.OrderDetailServiceImpl;
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
public class OrderDetailServiceTest {
    public static final long OID = 1;
    public static final long PID = 2;
    public static final int ENTITYNAME = 10;
    public static final String HAS_ID_NOT_FOUND = "OrderDetail has id=" + String.valueOf(OID) + "-" + String.valueOf(PID) + " not found!";
    public static final int DTONAME = 15;
    @Mock
    IOrderDetailRepository repository;
    @Mock
    ModelMapper modelMapper;
    //    @Mock
//    IOrderDetailTypeRepository typeRepository;
    @InjectMocks
    OrderDetailServiceImpl service;

    @NotNull
    private OrderDetail newEntity() {
        OrderDetail entity = new OrderDetail();
        OrderDetailKey key = new OrderDetailKey();
        Order order = new Order();
        order.setOrderid(OID);
        Product product = new Product();
        product.setProductid(PID);
        key.setOrder(order);
        key.setProduct(product);
        entity.setKey(key);
        entity.setAmount(ENTITYNAME);
        return entity;
    }

    @NotNull
    private OrderDetailDTO newDTO() {
        OrderDetailDTO dto = new OrderDetailDTO();
        dto.setOrderId(OID);
        dto.setProductId(PID);
        dto.setAmount(DTONAME);
        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<OrderDetail> list = new ArrayList<>();
        OrderDetail entity = new OrderDetail();
        OrderDetail entity2 = new OrderDetail();
        list.add(entity);
        list.add(entity2);
        when(repository.findAll()).thenReturn(list);
        Collection<OrderDetailDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        Optional<OrderDetail> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findByKey_Product_ProductidAndKey_Order_Orderid(PID, OID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), OrderDetailDTO.class)).thenReturn(newDTO());
        OrderDetailDTO dto2 = service.findById(PID, OID);
        assertEquals(dto2.getAmount(), DTONAME);
    }

    @Test
    public void findById_Null() {

        when(repository.findByKey_Product_ProductidAndKey_Order_Orderid(PID, OID)).thenThrow(new NotFoundException(OrderDetail.class, OID + "-" + PID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(PID, OID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void findByIdKey_Null() {
        OrderDetail entity = newEntity();
        assertNull(service.findById(entity.getKey()));
    }

    @Test
    public void update_Key() {
        OrderDetail entity = newEntity();
        assertNull(service.update(entity.getKey(), newDTO()));
    }

    @Test
    public void delete_Key() {
        OrderDetail entity = newEntity();
        assertNull(service.delete(entity.getKey()));
    }

    @Test
    public void update() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        Optional<OrderDetail> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findByKey_Product_ProductidAndKey_Order_Orderid(PID, OID)).thenReturn(optional);
        //when(typeRepository.findById(dto.getOrderDetailTypeId())).thenReturn(Optional.ofNullable(entity.getOrderDetailType()));
        when(modelMapper.map(optional.get(), OrderDetailDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(entity);
        OrderDetailDTO dto2 = service.update(PID, OID, dto);
        assertEquals(dto2.getAmount(), DTONAME);
    }

    @Test
    public void save() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        when(modelMapper.map(dto, OrderDetail.class)).thenReturn(entity);
        when(repository.save(entity)).thenReturn(entity);
        when(modelMapper.map(entity, OrderDetailDTO.class)).thenReturn(newDTO());
        OrderDetailDTO dto2 = service.save(dto);
        assertEquals(dto2.getAmount(), DTONAME);
    }

    @Test
    public void delete() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        Optional<OrderDetail> optional = Optional.of(entity);
        assertNotNull(optional);
        when(repository.findByKey_Product_ProductidAndKey_Order_Orderid(PID, OID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), OrderDetailDTO.class)).thenReturn(newDTO());
        OrderDetailDTO dto2 = service.delete(PID, OID);
        assertEquals(dto2.getAmount(), DTONAME);
    }

    @Test
    public void updateEntity() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        //when(typeRepository.findById(dto.getOrderDetailTypeId())).thenReturn(Optional.ofNullable(entity.getOrderDetailType()));
        service.updateEntity(entity, dto);
        assertEquals(entity.getAmount(), dto.getAmount());
    }

    @Test
    public void createFromE() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        when(modelMapper.map(entity, OrderDetailDTO.class)).thenReturn(newDTO());
        OrderDetailDTO test = service.createFromE(entity);
        assertNotNull(test);
        assertEquals(test.getAmount(), dto.getAmount());
    }

    @Test
    public void createFromD() {
        OrderDetail entity = newEntity();
        OrderDetailDTO dto = newDTO();
        when(modelMapper.map(dto, OrderDetail.class)).thenReturn(newEntity());
        OrderDetail test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getAmount(), entity.getAmount());
    }
}
