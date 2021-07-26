package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IImageRepository extends JpaRepository<Image,Long> {

    List<Image> findAllByProduct_Productid(Long productId);
    @Modifying
    @Query(value = "DELETE FROM image fd where fd.product_id=?1",nativeQuery = true)
    void deleteAllByProductID(Long productId);
}
