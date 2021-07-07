package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IImageRepository extends JpaRepository<Image,Long> {
}
