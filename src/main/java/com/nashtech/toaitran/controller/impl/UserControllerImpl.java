package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.model.dto.JwtResponse;
import com.nashtech.toaitran.service.impl.UserDetailServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
@CrossOrigin("*")
@RestController
@RequestMapping({"api/users"})
@Tag(
        name = "User"
)
public class UserControllerImpl implements IBaseController<JwtResponse, Long, UserDetailServiceImpl> {
    @Resource
    @Getter
    private UserDetailServiceImpl service;
}
