package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.model.entity.FeatureType;
import com.nashtech.toaitran.service.impl.FeatureServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class FeatureControllerTest implements IBaseControllerTest<FeatureDTO, Long, FeatureServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    FeatureServiceImpl service;
    public ResultMatcher UNAUTHORIZED_GET() {return  status().isOk();};
    public ResultMatcher UNAUTHORIZED_POST () {return   status().isUnauthorized();};
    public ResultMatcher UNAUTHORIZED_PUT () {return   status().isUnauthorized();};
    public ResultMatcher UNAUTHORIZED_DELETE () {return    status().isUnauthorized();};
    public ResultMatcher USER_GET () {return    status().isOk();};
    public ResultMatcher USER_POST () {return    status().isForbidden();};
    public ResultMatcher USER_PUT () {return    status().isForbidden();};
    public ResultMatcher USER_DELETE () {return   status().isForbidden();};
    public ResultMatcher ADMIN_GET () {return    status().isOk();};
    public ResultMatcher ADMIN_POST () {return    status().isCreated();};
    public ResultMatcher ADMIN_PUT () {return    status().isAccepted();};
    public ResultMatcher ADMIN_DELETE () {return    status().isAccepted();};
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
        FeatureType type = new FeatureType();
        type.setId("ROMSSD");
        dto.setFeatureType(type);
        return dto;
    }

    @Override
    public Long getID(FeatureDTO featureDTO) {
        return featureDTO.getFeatureId();
    }

    @Test
    void unAuthorized_GetAll_params() throws Exception {
        when(getService().findAll()).thenReturn(new ArrayList<FeatureDTO>());
        getMockMvc().perform(get(getEndpoint()).param("featureType","CPU"))
                .andExpect(UNAUTHORIZED_GET());
    }
}
