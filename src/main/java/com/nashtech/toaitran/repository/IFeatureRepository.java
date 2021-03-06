package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
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

    @Query(value = "SELECT * From features f where f.feature_id in (SELECT fd.feature_id From feature_detail fd where fd.product_id=?1)",nativeQuery = true)
    List<Feature> findAllByProductId(Long productId);
    @Modifying
    @Query(value = "DELETE FROM feature_detail fd where fd.product_id=?1",nativeQuery = true)
    void deleteAllByProductID(Long productId);
}
