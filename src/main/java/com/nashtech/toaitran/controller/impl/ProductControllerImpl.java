package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.ProductDTO;
import com.nashtech.toaitran.service.impl.ProductServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Set;

@CrossOrigin("*")
@RestController
@RequestMapping({"api/products"})
@Tag(
        name = "Product"
)
public class ProductControllerImpl implements IBaseController<ProductDTO, Long, ProductServiceImpl> {
    @Resource
    @Getter
    private ProductServiceImpl service;
    @GetMapping("")
    public List<ProductDTO> getAll(@RequestParam(required = false) Long categoryId, @RequestParam(required = false) Set<Long> featureIds, @RequestParam(required = false) Set<Long> products ) {
        if(products!=null)
        {
            return getService().findAllBySetProducts(products);
        }
        if(categoryId!=null && featureIds!=null) {
            //FilterProductRequest filterProductRequest = new FilterProductRequest(categoryId,featureIds);
            return getService().findAll(categoryId,featureIds);
        }
        else if (categoryId!=null)
        {
            return getService().findAll(categoryId);
        }
        else if (featureIds!=null)
            return getService().findAll(featureIds);
        else
            return getService().findAll();
    }
}
