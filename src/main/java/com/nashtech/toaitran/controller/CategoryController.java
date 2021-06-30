package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.Category;
import com.nashtech.toaitran.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {
    @Resource
    CategoryService service;

    @GetMapping("/")
    public List<Category> getAll() {
        return service.findAll();
    }

    @PostMapping("/")
    public void insert() {
        Category cate = new Category();
        cate.setCateName(String.valueOf(Math.random()));
        cate.setDescription("");
        service.save(cate);
    }
}
