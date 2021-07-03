package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.CateDTO;
import com.nashtech.toaitran.model.entity.Category;
import com.nashtech.toaitran.service.impl.CategoryService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {
    @Resource
    CategoryService service;
    @GetMapping("/")
    public List<CateDTO> getAll() {
        return service.findAll();
    }
    @GetMapping("/{id}")
    public CateDTO get1(@PathVariable Long id) {
        return service.findById(id);
    }
    @PostMapping("/")
    public CateDTO insert(@RequestBody Category cate) {
        return service.save(cate);
    }
    @PutMapping("/{id}")
    public CateDTO update(@PathVariable Long id,@RequestBody Category cate) {
        return service.update(id,cate);
    }
    @DeleteMapping("/{id}")
    public CateDTO delete(@PathVariable Long id) {

        return  service.delete(id);
    }
}
