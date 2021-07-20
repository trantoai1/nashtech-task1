package com.nashtech.toaitran.controller.impl;


import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.service.impl.FeatureServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/features")
@Tag(name = "Features")
public class FeatureControllerImpl implements IBaseController<FeatureDTO,Long,FeatureServiceImpl> {
    @Resource
    @Getter
    private FeatureServiceImpl service;


    @GetMapping("")
    public List<FeatureDTO> getAll(@RequestParam(required = false) String featureType,@RequestParam(required = false) Long productId) {
        if(featureType!=null)
        return getService().findAll(featureType);

        if(productId!=null)
            return getService().findAll(productId);

        return getService().findAll();
    }

}
