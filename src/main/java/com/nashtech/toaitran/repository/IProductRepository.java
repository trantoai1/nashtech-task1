package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product,Long> {
}
