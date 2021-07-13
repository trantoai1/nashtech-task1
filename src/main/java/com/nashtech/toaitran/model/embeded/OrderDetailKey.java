package com.nashtech.toaitran.model.embeded;

import com.nashtech.toaitran.model.entity.Order;
import com.nashtech.toaitran.model.entity.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
public class OrderDetailKey implements Serializable {
    @ManyToOne
    @JoinColumn(
            name = "order_id"
    )
    private Order order;
    @ManyToOne
    @JoinColumn(
            name = "product_id"
    )
    private Product product;

    public OrderDetailKey(Order order, Product product) {
        this.order = order;
        this.product = product;
    }

    public OrderDetailKey() {
    }
}
