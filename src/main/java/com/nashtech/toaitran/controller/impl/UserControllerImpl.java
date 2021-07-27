package com.nashtech.toaitran.controller.impl;

import com.nashtech.toaitran.controller.IBaseController;
import com.nashtech.toaitran.controller.IGetController;
import com.nashtech.toaitran.model.dto.UserDetailDTO;
import com.nashtech.toaitran.service.impl.UserDetailServiceImpl;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@CrossOrigin("*")
@RestController
@RequestMapping({"api/users"})
@Tag(
        name = "User"
)
public class UserControllerImpl implements IBaseController<UserDetailDTO, Long, UserDetailServiceImpl>
        , IGetController<UserDetailDTO, Long, UserDetailServiceImpl> {
    @Resource
    @Getter
    private UserDetailServiceImpl service;

    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping("/{id}")
    public UserDetailDTO update(@PathVariable Long id, @RequestBody UserDetailDTO dto) {
        return getService().update(id, dto);
    }
}
