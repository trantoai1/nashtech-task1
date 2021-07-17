package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface IFeatureRepository extends JpaRepository<Feature,Long> {
    @Override
    Optional<Feature> findById(Long aLong);


    List<Feature> findAllByFeatureType_Id(String featureTypeId);
    @Query(value = "SELECT * from features f where  f.feature_id in ?1",nativeQuery = true)
    List<Feature> findAllByFeaturesID(Set<Long> featureIds);
}
