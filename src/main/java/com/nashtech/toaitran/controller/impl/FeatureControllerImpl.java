package com.nashtech.toaitran.controller.impl;


import com.nashtech.toaitran.model.dto.FeatureDTO;
import com.nashtech.toaitran.service.impl.FeatureServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/features")
@Tag(name = "Features")
public class FeatureControllerImpl  {
    @Resource
    @Getter
    private FeatureServiceImpl service;


    @GetMapping("")
    public List<FeatureDTO> getAll(@RequestParam(required = false) String featureType) {
        if(featureType!=null)
        return getService().findAll(featureType);
        else
            return getService().findAll();
    }
    @GetMapping("/{id}")
    public FeatureDTO get1(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public FeatureDTO update(@PathVariable Long id,  @Valid @RequestBody FeatureDTO dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public FeatureDTO delete(@PathVariable Long id) {
        return service.delete(id);
    }

    @PostMapping("")
    public FeatureDTO insert(@Valid @RequestBody FeatureDTO d) {
        return getService().save(d);
    }
}
