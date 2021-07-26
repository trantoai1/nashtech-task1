package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.FeatureTypeDTO;
import com.nashtech.toaitran.service.impl.FeatureTypeServiceImpl;
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
public class FeatureTypeControllerTest implements IBaseControllerTest<FeatureTypeDTO, String, FeatureTypeServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    FeatureTypeServiceImpl service;
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
