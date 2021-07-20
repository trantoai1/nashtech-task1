package com.nashtech.toaitran.model.embeded;

import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.model.entity.User;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Embeddable
@Getter
@Setter
public class RateKey implements Serializable {
    @ManyToOne
    private Product product;
    @ManyToOne
    private User user;

    public RateKey(User user, Product product) {
        setProduct(product);
        setUser(user);
    }
    public RateKey(){

    }
}
