package com.nashtech.toaitran.exception;

public class EntityPrimaryKeyExistsException extends RuntimeException {
    public EntityPrimaryKeyExistsException(Class<?> clazz, Long id) {
        super(clazz.getName().replace("com.nashtech.toaitran.model.entity.", "") + " has id=" + id + " found!");
    }

    public EntityPrimaryKeyExistsException(Class<?> clazz, String id) {
        super(clazz.getName().replace("com.nashtech.toaitran.model.entity.", "") + " has id=" + id + " found!");
    }
}
