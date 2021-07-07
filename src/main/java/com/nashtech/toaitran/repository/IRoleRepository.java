package com.nashtech.toaitran.repository;


import com.nashtech.toaitran.model.RoleName;
import com.nashtech.toaitran.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IRoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
