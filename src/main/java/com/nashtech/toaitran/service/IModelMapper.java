package com.nashtech.toaitran.service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public interface IModelMapper <D, E>{
    E createFromD(D dto);

    D createFromE(E entity);

    E updateEntity(E entity, D dto);

    default List<D> createFromEntities(final Collection<E> entities) {
        return entities.stream()
                .map(this::createFromE)
                .collect(Collectors.toList());
    }

    default List<E> createFromDtos(final Collection<D> dtos) {
        return dtos.stream()
                .map(this::createFromD)
                .collect(Collectors.toList());
    }

}
