package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.FeatureTypeDTO;
import com.nashtech.toaitran.service.impl.FeatureTypeServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
@CrossOrigin("*")
@RestController
@RequestMapping({"api/featureTypes"})
@Tag(
        name = "FeatureType"
)
public class FeatureTypeControllerImpl implements IBaseController<FeatureTypeDTO, String, FeatureTypeServiceImpl> {
    @Resource
    @Getter
    private FeatureTypeServiceImpl service;

}
