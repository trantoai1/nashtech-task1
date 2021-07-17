package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.model.dto.ImageDTO;
import com.nashtech.toaitran.service.impl.ImageServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping({"api/images"})
@Tag(
        name = "Image"
)
public class ImageControllerImpl implements IBaseController<ImageDTO, Long, ImageServiceImpl> {
    @Resource
    @Getter
    private ImageServiceImpl service;
    @GetMapping("")
    public List<ImageDTO> getAll(@RequestParam(required = false) Long productId) {
        if(productId!=null)
            return getService().findAll(productId);
        else
            return getService().findAll();
    }
}
