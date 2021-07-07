package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Feature;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IFeatureRepository extends JpaRepository<Feature,Long> {

    Optional<Feature> findById(Long aLong);
}
