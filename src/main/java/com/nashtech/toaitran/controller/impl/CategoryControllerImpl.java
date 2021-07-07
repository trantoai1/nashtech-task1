package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.CateDTO;
import com.nashtech.toaitran.service.impl.CategoryServiceImpl;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("api/categories")
@Tag( name = "Categories")
public class CategoryControllerImpl implements IBaseController<CateDTO, Long, CategoryServiceImpl> {
    @Resource
    @Getter
    private CategoryServiceImpl service;
}
