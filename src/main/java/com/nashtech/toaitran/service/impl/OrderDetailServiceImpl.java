package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.EntityPrimaryKeyExistsException;
import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.exception.NumberErrorException;
import com.nashtech.toaitran.model.dto.OrderDetailDTO;
import com.nashtech.toaitran.model.embeded.OrderDetailKey;
import com.nashtech.toaitran.model.entity.Order;
import com.nashtech.toaitran.model.entity.OrderDetail;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.repository.IOrderDetailRepository;
import com.nashtech.toaitran.repository.IOrderRepository;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class OrderDetailServiceImpl implements IBaseService<OrderDetailDTO, OrderDetailKey>, IModelMapper<OrderDetailDTO, OrderDetail> {
    private final IOrderDetailRepository repository;
    private final ModelMapper modelMapper;
    private final IProductRepository productRepository;
    private final IOrderRepository orderRepository;
    public OrderDetailServiceImpl(IOrderDetailRepository repository, ModelMapper modelMapper, IProductRepository productRepository, IOrderRepository orderRepository) {
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
    }

    public List<OrderDetailDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    public OrderDetailDTO findById(OrderDetailKey orderDetailKey) {
//        Optional<OrderDetail> entity = repository.findById(orderDetailKey);
//        entity.orElseThrow(()-> new NotFoundException(OrderDetail.class,orderDetailKey.getOrder().getOrderid()));
//        return createFromE(entity.get());
        return null;
    }

    public OrderDetailDTO update(OrderDetailKey orderDetailKey, OrderDetailDTO orderDetailDTO) {
//        Optional<OrderDetail> entity = repository.findById(orderDetailKey);
//        entity.orElseThrow(()-> new NotFoundException(OrderDetail.class,orderDetailKey.getOrder().getOrderid()));
//        return createFromE(repository.save(updateEntity(entity.get(),orderDetailDTO)));
        return null;
    }
    @Transactional
    public OrderDetailDTO save(OrderDetailDTO orderDetailDTO) {
        Optional<OrderDetail> entity = repository.findByKey_Product_ProductidAndKey_Order_Orderid(orderDetailDTO.getProductId(), orderDetailDTO.getOrderId());
        if(entity.isPresent())
            throw new EntityPrimaryKeyExistsException(OrderDetail.class,orderDetailDTO.getProductId() + "-" + orderDetailDTO.getOrderId());
        minusRemainProduct(orderDetailDTO, 0);
        return createFromE(repository.save(createFromD(orderDetailDTO)));
    }

    private void minusRemainProduct(OrderDetailDTO orderDetailDTO, int currentNum) {
        Product product = productRepository.findById(orderDetailDTO.getProductId())
                .orElseThrow(()->new NotFoundException(Product.class,orderDetailDTO.getProductId()));
        int remain = product.getRemain();
        if(remain < (orderDetailDTO.getAmount()-currentNum))
            throw new NumberErrorException("Number of product "+product.getProductid()+" not enough");
        product.setRemain(remain-(orderDetailDTO.getAmount()-currentNum));
        productRepository.save(product);
    }

    public OrderDetailDTO delete(OrderDetailKey orderDetailKey) {
//        Optional<OrderDetail> entity = Optional.ofNullable(repository.findById(orderDetailKey)
//                .orElseThrow(() -> new NotFoundException(OrderDetail.class, "id")));
//        repository.delete(entity.get());
//        return createFromE(entity.get());
        return null;
    }
    private OrderDetailKey findKey(OrderDetailDTO dto){
        return findKey(dto.getProductId(),dto.getOrderId());

    }
    public OrderDetail createFromD(OrderDetailDTO dto) {
        OrderDetail entity = modelMapper.map(dto,OrderDetail.class);

        entity.setKey(findKey(dto));
        return entity;
    }

    public OrderDetailDTO createFromE(OrderDetail entity) {
        OrderDetailDTO dto = modelMapper.map(entity,OrderDetailDTO.class);
        dto.setOrderId(entity.getKey().getOrder().getOrderid());
        dto.setProductId(entity.getKey().getProduct().getProductid());
        return dto;
    }

    public OrderDetail updateEntity(OrderDetail entity, OrderDetailDTO dto) {
        if (entity != null && dto != null) {
            entity.setAmount(dto.getAmount());
            //entity.setKey(dto.getUnit());
            //entity.setId(dto.getId());

        }

        return entity;
    }

    public OrderDetailDTO findById(Long productId, Long orderId) {
        Optional<OrderDetail> orderDetail = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_Order_Orderid(productId, orderId)
                .orElseThrow(() -> new NotFoundException(OrderDetail.class, productId + "-" + orderId)));
        return createFromE(orderDetail.get());
    }

    public OrderDetailDTO update(Long productId, Long orderId, OrderDetailDTO orderDetailDTO) {
        Optional<OrderDetail> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_Order_Orderid(productId, orderId)
                .orElseThrow(() -> new NotFoundException(OrderDetail.class, productId + "-" + orderId)));
        entity.get().setKey(findKey(productId, orderId));
        int currentNum = entity.get().getAmount();
        minusRemainProduct(orderDetailDTO,currentNum);
        return createFromE(repository.save(updateEntity(entity.get(), orderDetailDTO)));
    }

    private OrderDetailKey findKey(Long productId, Long orderId) {
        Optional<Order> order = Optional.ofNullable(orderRepository.findById(orderId)
                .orElseThrow(()-> new NotFoundException(Order.class,orderId)));
        Optional<Product> product = Optional.ofNullable(productRepository.findById(productId)
                .orElseThrow(()-> new NotFoundException(Product.class,productId)));
        return new OrderDetailKey(order.get(),product.get());
    }

    public OrderDetailDTO delete(Long productId, Long orderId) {
        Optional<OrderDetail> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_Order_Orderid(productId, orderId)
                .orElseThrow(() -> new NotFoundException(OrderDetail.class, productId + "-" + orderId)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }
}