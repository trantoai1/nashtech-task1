package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.FeatureType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IFeatureTypeRepository extends JpaRepository<FeatureType,String> {
}
