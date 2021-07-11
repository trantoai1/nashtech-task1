package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.service.impl.FeatureServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

@SpringBootTest
@AutoConfigureMockMvc
public class FeatureControllerTest implements IBaseControllerTest<FeatureDTO, Long, FeatureServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    FeatureServiceImpl service;

    final String endpoint = "/api/features";
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
    public FeatureServiceImpl getService() {
        return service;
    }

    @Override
    public ArrayList<FeatureDTO> list() {
        return new ArrayList<>();
    }

    @Override
    public FeatureDTO dto() {
        FeatureDTO dto = new FeatureDTO();
        dto.setFeatureTypeId("ROMSSD");
        dto.setSpecific("GB");
        dto.setFeatureId(1L);
        return dto;
    }

    @Override
    public Long getID(FeatureDTO featureDTO) {
        return featureDTO.getFeatureId();
    }
}
