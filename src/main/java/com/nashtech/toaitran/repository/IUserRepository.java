package com.nashtech.toaitran.repository;


import com.nashtech.toaitran.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Long> {
	
    Optional<User> findByUsername(String username);
    
    Boolean existsByUsername(String username);
    
    Boolean existsByEmail(String email);
    Optional<User> findByUsernameAndPassword(String username,String pass);
}
