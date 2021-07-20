package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IRateRepository extends JpaRepository<Rate, RateKey> {

    Optional<Rate> findByKey_Product_ProductidAndKey_User_Id(Long productId, Long userId);

    //@Query(value = "SELECT * From features f where f.feature_id in (SELECT fd.feature_id From rates fd where fd.product_id=?1)",nativeQuery = true)
    List<Rate> findAllByKey_Product_ProductidOrderByPointDesc(Long productId);
}
