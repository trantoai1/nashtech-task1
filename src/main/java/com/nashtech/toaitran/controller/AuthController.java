package com.nashtech.toaitran.controller;

import com.nashtech.toaitran.model.dto.ChangePassRequest;
import com.nashtech.toaitran.model.dto.LoginRequest;
import com.nashtech.toaitran.model.dto.SignupRequest;
import com.nashtech.toaitran.service.impl.UserDetailServiceImpl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserDetailServiceImpl service;

    public AuthController(UserDetailServiceImpl service) {

        this.service = service;
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        return service.checkLogin(loginRequest);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

        return service.register(signUpRequest);
    }
    @PostMapping("/changePass")
    public ResponseEntity<?> changePass(@Valid @RequestBody ChangePassRequest signUpRequest) {

        return service.changePass(signUpRequest);
    }
}