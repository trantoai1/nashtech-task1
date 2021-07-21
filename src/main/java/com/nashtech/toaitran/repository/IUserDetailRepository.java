package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.entity.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserDetailRepository extends JpaRepository<UserDetail,Long> {
}
