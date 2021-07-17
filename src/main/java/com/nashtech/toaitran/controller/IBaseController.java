package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.service.IBaseService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

public interface IBaseController<D, ID, S extends IBaseService<D,ID> > {
    S getService();



    @GetMapping("/{id}")
    default D get1(@PathVariable ID id) {
        return getService().findById(id);
    }

    @PostMapping("")
    default D insert(@Valid @RequestBody D d) {
        return getService().save(d);
    }

    @PutMapping("/{id}")
    default D update(@PathVariable ID id, @Valid @RequestBody D d) {
        return getService().update(id, d);
    }

    @DeleteMapping("/{id}")
    default D delete(@PathVariable ID id) {
        return getService().delete(id);
    }
}
