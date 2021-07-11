package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.CateDTO;
import com.nashtech.toaitran.service.impl.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

@SpringBootTest
@AutoConfigureMockMvc
public class CategoryControllerTest implements IBaseControllerTest<CateDTO, Long, CategoryServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    CategoryServiceImpl service;

    final String endpoint = "/api/categories";
    final String role = "admin";
    final String username = "admin";

    @Override
    public CategoryServiceImpl getService() {
        return service;
    }

    @Override
    public ArrayList<CateDTO> list() {
        return new ArrayList<CateDTO>();
    }

    @Override
    public CateDTO dto() {
        CateDTO dto = new CateDTO();
        dto.setId(1L);
        dto.setCateName("1234");
        return dto;
    }

    @Override
    public Long getID(CateDTO cateDTO) {
        return cateDTO.getId();
    }

    @Override
    public String getEndpoint() {
        return endpoint;
    }


    @Override
    public MockMvc getMockMvc() {
        return mockMvc;
    }


}
