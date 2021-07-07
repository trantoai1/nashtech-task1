package com.nashtech.toaitran.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException{
    public NotFoundException(Class<?> clazz,Long id) {
        super(clazz.getName()+ id +" not found!");
    }
    public NotFoundException(Class<?> clazz,String id) {
        super(clazz.getName()+ id +" not found!");
    }
}
