package com.nashtech.toaitran.exception;


public class NotFoundException extends RuntimeException{
    public NotFoundException(Class<?> clazz,Long id) {
        super(clazz.getName().replace("com.nashtech.toaitran.model.entity.","")+" has id="+ id +" not found!");
    }
    public NotFoundException(Class<?> clazz,String id) {
        super(clazz.getName().replace("com.nashtech.toaitran.model.entity.","")+" has id="+ id +" not found!");
    }


}
