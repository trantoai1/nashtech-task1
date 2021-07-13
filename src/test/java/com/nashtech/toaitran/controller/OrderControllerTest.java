package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.OrderDTO;
import com.nashtech.toaitran.service.impl.OrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class OrderControllerTest implements IBaseControllerTest<OrderDTO, Long, OrderServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    OrderServiceImpl service;
    public ResultMatcher UNAUTHORIZED_GET() {return  status().isUnauthorized();};
    public ResultMatcher UNAUTHORIZED_POST () {return   status().isUnauthorized();};
    public ResultMatcher UNAUTHORIZED_PUT () {return   status().isUnauthorized();};
    public ResultMatcher UNAUTHORIZED_DELETE () {return    status().isUnauthorized();};
    public ResultMatcher USER_GET () {return    status().isOk();};
    public ResultMatcher USER_POST () {return    status().isOk();};
    public ResultMatcher USER_PUT () {return    status().isOk();};
    public ResultMatcher USER_DELETE () {return   status().isOk();};
    public ResultMatcher ADMIN_GET () {return    status().isOk();};
    public ResultMatcher ADMIN_POST () {return    status().isOk();};
    public ResultMatcher ADMIN_PUT () {return    status().isOk();};
    public ResultMatcher ADMIN_DELETE () {return    status().isOk();};
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
