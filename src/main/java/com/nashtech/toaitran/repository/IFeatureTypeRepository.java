package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.FeatureType;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IFeatureTypeRepository extends JpaRepository<FeatureType, String> {
    @Override
    @NotNull
    Optional<FeatureType> findById(String s);

    @Override
    <S extends FeatureType> S save(S entity);

    @Override
    void delete(FeatureType entity);
}
