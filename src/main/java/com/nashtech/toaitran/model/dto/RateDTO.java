package com.nashtech.toaitran.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.nashtech.toaitran.model.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class RateDTO {
    @NotNull
    @DecimalMin("0")
    @DecimalMax("5")
    private Integer point;
    private String comment;
    @NotNull
    private Long productId;
    @NotNull
    private Long userId;
    @JsonIgnore
    private User user;
    public String getUserName(){
        return user.getUsername();
    }
    public String getUserEmail(){
        return user.getEmail();
    }
}
