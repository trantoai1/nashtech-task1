package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface IProductRepository extends JpaRepository<Product,Long> {

    @Query(value = "SELECT * from products p where  p.id in (SELECT fd.product_id from feature_detail fd where fd.feature_id in ?1) and p.category_id = ?2",nativeQuery = true)
    List<Product> findAllByFilter(Set<Long> featureIds,Long cateId);

    List<Product> findAllByCategory_Id(Long categoryId);

    @Query(value = "SELECT * from products p where  p.id in (SELECT fd.product_id from feature_detail fd where fd.feature_id in ?1)",nativeQuery = true)
    List<Product> findAllByFeaturesID(Set<Long>featureIds);
    @Query(value = "SELECT * from products p where  p.id in ?1",nativeQuery = true)
    List<Product> findAllByProductID(Set<Long>featureIds);
}
