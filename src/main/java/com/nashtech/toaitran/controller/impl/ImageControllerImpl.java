package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.ImageDTO;
import com.nashtech.toaitran.service.impl.ImageServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping({"api/images"})
@Tag(
        name = "Image"
)
public class ImageControllerImpl implements IBaseController<ImageDTO, Long, ImageServiceImpl> {
    @Resource
    @Getter
    private ImageServiceImpl service;

}
