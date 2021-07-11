package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IFeatureRepository extends JpaRepository<Feature,Long> {
    @Override
    Optional<Feature> findById(Long aLong);
}
