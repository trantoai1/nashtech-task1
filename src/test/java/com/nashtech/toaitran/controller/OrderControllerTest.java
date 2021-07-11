package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

@SpringBootTest
@AutoConfigureMockMvc
public class OrderControllerTest implements IBaseControllerTest<OrderDTO, Long, OrderServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    OrderServiceImpl service;

    final String endpoint = "/api/orders";
    final String role = "admin";
    final String username = "admin";

    @Override
    public String getEndpoint() {
        return endpoint;
    }

    @Override
    public MockMvc getMockMvc() {
        return mockMvc;
    }

    @Override
    public OrderServiceImpl getService() {
        return service;
    }

    @Override
    public ArrayList<OrderDTO> list() {
        return new ArrayList<>();
    }

    @Override
    public OrderDTO dto() {
        OrderDTO dto = new OrderDTO();
        dto.setAddress("");
        dto.setUserId(1L);
        dto.setStatus("");
        dto.setTime("");
        dto.setOrderId(1L);
        return dto;
    }

    @Override
    public Long getID(OrderDTO dto) {
        return dto.getOrderId();
    }
}
