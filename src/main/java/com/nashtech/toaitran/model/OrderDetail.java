package com.nashtech.toaitran.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(schema = "public", name = "orderdetails")
@Getter
@Setter
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailId;

    @ManyToOne
    private Order order;
    @OneToOne(fetch = FetchType.LAZY)
    private Product product;
    private Integer amount;
}
