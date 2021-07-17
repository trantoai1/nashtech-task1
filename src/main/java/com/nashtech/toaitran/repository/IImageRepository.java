package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IImageRepository extends JpaRepository<Image,Long> {

    List<Image> findAllByProduct_Productid(Long productId);
}
