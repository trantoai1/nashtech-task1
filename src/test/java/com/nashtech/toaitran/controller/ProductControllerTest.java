package com.nashtech.toaitran.controller;

import com.google.gson.Gson;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.service.impl.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@SpringBootTest
@AutoConfigureMockMvc
public class ProductControllerTest implements IBaseControllerTest<ProductDTO, Long, ProductServiceImpl> {
    @Autowired
    MockMvc mockMvc;
    @MockBean
    ProductServiceImpl service;

    final String endpoint = "/api/products";
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
    public ProductServiceImpl getService() {
        return service;
    }

    @Override
    public ArrayList<ProductDTO> list() {
        return new ArrayList<>();
    }

    @Override
    public ProductDTO dto() {
        ProductDTO dto = new ProductDTO();
        dto.setProductId(1L);
        dto.setCategoryId(2L);

        try {
            DateFormat df1 = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
            String string1 = "2001-07-04T12:08:56.235-0700";
            Date result1 = df1.parse(string1);
            dto.setCreateDate(result1);
            dto.setUpdateDate(result1);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        dto.setRemain(100);
        dto.setProductName("123");
        return dto;
    }

    @Override
    public Long getID(ProductDTO productDTO) {
        return productDTO.getProductId();
    }

    @Override
    public String json() {
        Gson gson = new Gson();
        String json = gson.toJson(dto());
        json = json.replaceAll("Jul 5, 2001 2:08:56 AM", "2001-07-04T12:08:56.235");
        return json;
    }
}
