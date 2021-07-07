package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRateRepository extends JpaRepository<Rate, RateKey> {
}
