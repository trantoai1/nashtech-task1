package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.model.RoleName;
import com.nashtech.toaitran.model.dto.JwtResponse;
import com.nashtech.toaitran.model.dto.LoginRequest;
import com.nashtech.toaitran.model.dto.MessageResponse;
import com.nashtech.toaitran.model.dto.SignupRequest;
import com.nashtech.toaitran.model.entity.Role;
import com.nashtech.toaitran.model.entity.User;
import com.nashtech.toaitran.repository.IRoleRepository;
import com.nashtech.toaitran.repository.IUserRepository;
import com.nashtech.toaitran.security.jwt.JwtUtils;
import com.nashtech.toaitran.security.services.UserDetailsImpl;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserDetailServiceImpl implements IBaseService<JwtResponse, Long>, IModelMapper<JwtResponse, User> {
    final private AuthenticationManager authenticationManager;
    final private IRoleRepository roleRepository;
    final private PasswordEncoder encoder;
    final private JwtUtils jwtUtils;
    private final IUserRepository repository;
    private final ModelMapper modelMapper;

    public UserDetailServiceImpl(AuthenticationManager authenticationManager, IRoleRepository roleRepository, PasswordEncoder encoder, JwtUtils jwtUtils, IUserRepository repository, ModelMapper modelMapper) {
        this.authenticationManager = authenticationManager;
        this.roleRepository = roleRepository;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
        this.repository = repository;
        this.modelMapper = modelMapper;
    }

    public ResponseEntity<?> checkLogin(LoginRequest loginRequest) {
        // TODO, authenticate when login
        // Username, pass from client
        // com.nashtech.rookies.security.WebSecurityConfig.configure(org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder)
//        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
        // on this step, we tell to authenticationManager how we load data from database
        // and the password encoder
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        // if go there, the user/password is correct
        SecurityContextHolder.getContext().setAuthentication(authentication);
        // generate jwt to return to client
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

    public ResponseEntity<?> register(SignupRequest signUpRequest) {
        if (repository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (repository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(signUpRequest.getUsername(), signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role.toLowerCase()) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "pm":
                        Role modRole = roleRepository.findByName(RoleName.ROLE_PM)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        repository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @Override
    public List<JwtResponse> findAll() {
        return createFromEntities(repository.findAll());
    }

    @Override
    public JwtResponse findById(Long aLong) {
        return null;
    }

    @Override
    public JwtResponse update(Long aLong, JwtResponse jwtResponse) {
        return null;
    }

    @Override
    public JwtResponse save(JwtResponse jwtResponse) {
        return null;
    }

    @Override
    public JwtResponse delete(Long aLong) {
        return null;
    }

    @Override
    public User createFromD(JwtResponse dto) {
        return null;
    }

    @Override
    public JwtResponse createFromE(User entity) {
        JwtResponse dto = modelMapper.map(entity, JwtResponse.class);
        return dto;
    }

    @Override
    public User updateEntity(User entity, JwtResponse dto) {
        return null;
    }
}
