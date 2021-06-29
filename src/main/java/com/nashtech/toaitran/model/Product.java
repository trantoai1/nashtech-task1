package com.nashtech.toaitran.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(schema = "public",name = "products")
public class Product {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long productid;

    private BigDecimal price;
    @Column(name = "name")
    private String productName;
    @Column(name = "description")
    private String productDesc;

    @ManyToOne
    private Category category;

    private Integer rate;
    private String image;
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private Date createDate;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private Date updateDate;

    @Transient
    @OneToMany
    private Collection<Feature> features;

}
