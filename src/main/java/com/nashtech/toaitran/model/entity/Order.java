package com.nashtech.toaitran.model.entity;

import com.nashtech.toaitran.model.OrderStatus;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(schema = "public", name = "orders")
@Getter
@Setter

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderid;

    @ManyToOne
    private User user;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private Date time;

    private String phone;
    private String address;


    @Enumerated(EnumType.STRING)
    private OrderStatus status;
    @Transient
    @OneToMany
    private Collection<OrderDetail> orderDetails;

}
