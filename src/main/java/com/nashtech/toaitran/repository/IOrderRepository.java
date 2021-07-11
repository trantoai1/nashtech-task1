package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Long> {
    @Override
    Optional<Order> findById(Long aLong);
}
