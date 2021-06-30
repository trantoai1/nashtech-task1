package com.nashtech.toaitran.service;

import java.util.List;

public interface BaseService<T, ID> {
    List<T> findAll();

    T findById(ID id);

    void update(T t);

    void insert(T t);

    void save(T t);

    void delete(T t);
}
