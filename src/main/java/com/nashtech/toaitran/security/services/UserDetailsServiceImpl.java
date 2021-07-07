package com.nashtech.toaitran.security.services;


import com.nashtech.toaitran.model.entity.User;
import com.nashtech.toaitran.repository.IUserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final IUserRepository IUserRepository;

    public UserDetailsServiceImpl (IUserRepository IUserRepository) {
        this.IUserRepository = IUserRepository;
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        User user = IUserRepository.findByUsername(username)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User Not Found with -> username or email : " + username)
                );

        return UserDetailsImpl.build(user);
    }
}
