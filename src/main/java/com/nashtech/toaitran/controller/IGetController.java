package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.service.IBaseService;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public interface IGetController <D, ID, S extends IBaseService<D,ID>> {
        S getService();

        @GetMapping("")
        default List<D> getAll() {
            return getService().findAll();
        }
}
