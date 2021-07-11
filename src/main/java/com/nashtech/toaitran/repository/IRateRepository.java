package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRateRepository extends JpaRepository<Rate, RateKey> {

    Optional<Rate> findByKey_Product_ProductidAndKey_User_Id(Long productId, Long userId);
}
