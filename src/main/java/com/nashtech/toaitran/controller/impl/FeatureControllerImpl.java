package com.nashtech.toaitran.controller.impl;


import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.service.impl.FeatureServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("api/features")
@Tag(name = "Features")
public class FeatureControllerImpl implements IBaseController<FeatureDTO,Long, FeatureServiceImpl> {
    @Resource
    @Getter
    private FeatureServiceImpl service;


}
