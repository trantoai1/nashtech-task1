package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.service.impl.RateServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping({"api/rates"})
@Tag(
        name = "Rate"
)
public class RateControllerImpl {//implements IBaseController<RateDTO, RateKey, RateServiceImpl> {
    @Resource
    @Getter
    private RateServiceImpl service;

    @GetMapping("")
    public List<RateDTO> getAll(@RequestParam(required = false) Long productId) {
        if(productId==null)
        return getService().findAll();
        else
            return getService().findAll(productId);
    }

    @GetMapping("/{productId}-{userId}")
    public RateDTO get1(@PathVariable Long productId, @PathVariable Long userId) {
        return service.findById(productId, userId);
    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{productId}-{userId}")
    public RateDTO update(@PathVariable Long productId, @PathVariable Long userId,@RequestBody RateDTO dto) {
        dto.setUserId(userId);
        dto.setProductId(productId);
        return service.update(productId, userId, dto);
    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @DeleteMapping("/{productId}-{userId}")
    public RateDTO delete(@PathVariable Long productId, @PathVariable Long userId) {
        return service.delete(productId, userId);
    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    public RateDTO insert(@Valid @RequestBody RateDTO d) {
        return getService().save(d);
    }
}
