package com.nashtech.toaitran.model.entity;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;

@Entity
@Getter
@Setter
@Table(schema = "public", name = "products")
@Schema(hidden = true)
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long productid;

    private BigDecimal price;
    @Column(name = "name")
    private String productName;
    @Column(name = "description")
    private String productDesc;

    @ManyToOne
    private Category category;
    private Integer remain;
    @Transient
    @OneToMany
    private Collection<Image> images;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private Date createDate;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss")
    private Date updateDate;



    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "feature_detail",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "feature_id"))
    Collection<Feature> features;
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return Objects.equals(getProductid(), product.getProductid()) && Objects.equals(getPrice(), product.getPrice()) && Objects.equals(getProductName(), product.getProductName()) && Objects.equals(getProductDesc(), product.getProductDesc()) && Objects.equals(getCategory(), product.getCategory()) && Objects.equals(getImages(), product.getImages()) && Objects.equals(getCreateDate(), product.getCreateDate()) && Objects.equals(getUpdateDate(), product.getUpdateDate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getProductid());
    }

    @Override
    public String toString() {
        return "Product{" +
                "productid=" + productid +
                ", price=" + price +
                ", productName='" + productName + '\'' +
                ", productDesc='" + productDesc + '\'' +
                ", category=" + category +
                ", images=" + images +
                ", createDate=" + createDate +
                ", updateDate=" + updateDate +

                '}';
    }
}
