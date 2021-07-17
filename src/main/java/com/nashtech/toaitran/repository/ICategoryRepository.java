package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICategoryRepository extends JpaRepository<Category, Long> {
    @Override
    Optional<Category> findById(Long aLong);

    @Query(value = "SELECT count(p.id) from products p where p.category_id=?1",nativeQuery = true)
    int countProductByCateId(Long id);
}
