package com.nashtech.toaitran.model.entity;

import com.nashtech.toaitran.model.embeded.RateKey;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(schema = "public", name = "rates")
public class Rate {

    private Integer point;
    private String comment;
    @EmbeddedId
    private RateKey key;
}
