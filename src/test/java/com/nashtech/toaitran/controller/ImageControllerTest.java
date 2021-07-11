package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.ImageDTO;
import com.nashtech.toaitran.service.impl.ImageServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

@SpringBootTest
@AutoConfigureMockMvc
public class ImageControllerTest implements IBaseControllerTest<ImageDTO, Long, ImageServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    ImageServiceImpl service;

    final String endpoint = "/api/images";
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
    public ImageServiceImpl getService() {
        return service;
    }

    @Override
    public ArrayList<ImageDTO> list() {
        return new ArrayList<>();
    }

    @Override
    public ImageDTO dto() {
        ImageDTO dto = new ImageDTO();
        dto.setId(1L);
        dto.setUrl("/images");
        dto.setProductId(1L);
        //dto.set
        return dto;
    }

    @Override
    public Long getID(ImageDTO dto) {
        return dto.getId();
    }
}
