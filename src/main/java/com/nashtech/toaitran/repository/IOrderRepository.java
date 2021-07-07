package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrderRepository extends JpaRepository<Order,Long> {
}
