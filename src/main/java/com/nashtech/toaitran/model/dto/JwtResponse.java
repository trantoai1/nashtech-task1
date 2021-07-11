package com.nashtech.toaitran.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class JwtResponse {
    //@JsonIgnore
    private String token;


    @JsonIgnore
    private String type = "Bearer";
    private Long id;
    private String username;
    private String email;
    //@JsonIgnore
    private List<String> roles;

    public JwtResponse() {
    }

    public JwtResponse(String accessToken, Long id, String username, String email, List<String> roles) {

        this.id = id;
        this.username = username;
        this.email = email;
        this.roles = roles;
        this.token = accessToken;
    }

}