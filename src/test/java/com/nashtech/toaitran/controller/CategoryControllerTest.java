package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.CateDTO;
import com.nashtech.toaitran.service.impl.CategoryServiceImpl;
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
public class CategoryControllerTest implements IBaseControllerTest<CateDTO, Long, CategoryServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    CategoryServiceImpl service;
    public ResultMatcher UNAUTHORIZED_GET() {return  status().isOk();};
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
