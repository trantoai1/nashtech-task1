package com.nashtech.toaitran.model.entity;

import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema = "public", name = "orderdetails")
@Getter
@Setter
public class OrderDetail {
    @EmbeddedId
    private OrderDetailKey key;

    private Integer amount;
}
