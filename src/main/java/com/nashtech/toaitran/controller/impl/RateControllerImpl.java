package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.service.impl.RateServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping({"api/rates"})
@Tag(
        name = "Rate"
)
public class RateControllerImpl implements IBaseController<RateDTO, RateKey, RateServiceImpl> {
    @Resource
    @Getter
    private RateServiceImpl service;

}
