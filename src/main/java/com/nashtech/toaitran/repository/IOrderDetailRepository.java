package com.nashtech.toaitran.repository;

import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import com.nashtech.toaitran.model.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailKey> {
    Optional<OrderDetail> findByKey_Product_ProductidAndKey_Order_Orderid(Long productid, Long orderid);


    List<OrderDetail> findByKey_Order_Orderid(Long orderId);
}
