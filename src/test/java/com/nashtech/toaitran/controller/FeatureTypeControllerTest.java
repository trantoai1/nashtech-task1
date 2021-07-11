package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.FeatureTypeDTO;
import com.nashtech.toaitran.service.impl.FeatureTypeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

@SpringBootTest
@AutoConfigureMockMvc
public class FeatureTypeControllerTest implements IBaseControllerTest<FeatureTypeDTO, String, FeatureTypeServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    FeatureTypeServiceImpl service;

    final String endpoint = "/api/featureTypes";
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
    public FeatureTypeServiceImpl getService() {
        return service;
    }

    @Override
    public ArrayList<FeatureTypeDTO> list() {
        return new ArrayList<>();
    }

    @Override
    public FeatureTypeDTO dto() {
        FeatureTypeDTO dto = new FeatureTypeDTO();
        dto.setId("CPU");
        dto.setName("GPU");
        return dto;
    }

    @Override
    public String getID(FeatureTypeDTO dto) {
        return dto.getId();
    }
}
