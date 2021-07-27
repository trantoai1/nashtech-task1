package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.EntityPrimaryKeyExistsException;
import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.RateDTO;
import com.nashtech.toaitran.model.embeded.RateKey;
import com.nashtech.toaitran.model.entity.OrderDetail;
import com.nashtech.toaitran.model.entity.Product;
import com.nashtech.toaitran.model.entity.Rate;
import com.nashtech.toaitran.model.entity.User;
import com.nashtech.toaitran.repository.IOrderDetailRepository;
import com.nashtech.toaitran.repository.IProductRepository;
import com.nashtech.toaitran.repository.IRateRepository;
import com.nashtech.toaitran.repository.IUserRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RateServiceImpl implements IBaseService<RateDTO, RateKey>, IModelMapper<RateDTO, Rate> {
    private final IRateRepository repository;
    private final ModelMapper modelMapper;
    private final IProductRepository productRepository;
    private final IUserRepository userRepository;
    private final IOrderDetailRepository orderDetailRepository;
    public RateServiceImpl(IRateRepository repository, ModelMapper modelMapper, IProductRepository productRepository, IUserRepository userRepository, IOrderDetailRepository orderDetailRepository) {
        this.repository = repository;
        this.modelMapper = modelMapper;
        this.productRepository = productRepository;
        this.userRepository = userRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    private boolean checkIsOrder(Long productId,Long userId)
    {
        List<OrderDetail> list =
                orderDetailRepository.findAllByProductAndOrder(productId,
                        userId);
        if(list.isEmpty()) return false;
        return true;
    }
    public List<RateDTO> findAll() {
        return createFromEntities(repository.findAll());
    }

    public RateDTO findById(RateKey rateKey) {
//        Optional<Rate> entity = repository.findById(rateKey);
//        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,rateKey.getProduct().getProductid()));
//        return createFromE(entity.get());
        return null;
    }

    public RateDTO update(RateKey rateKey, RateDTO rateDTO) {
//        Optional<Rate> entity = repository.findById(rateKey);
//        entity.orElseThrow(()-> new NotFoundException(FeatureType.class,rateKey.getProduct().getProductid()));
//        return createFromE(repository.save(updateEntity(entity.get(),rateDTO)));
        return null;
    }

    public RateDTO save(RateDTO rateDTO) {
        if(!checkIsOrder(rateDTO.getProductId(), rateDTO.getUserId()))
            throw new NotFoundException("You must buy this product first");
        Optional<Rate> entity = repository.findByKey_Product_ProductidAndKey_User_Id(rateDTO.getProductId(), rateDTO.getUserId());
        if(entity.isPresent())
            throw new EntityPrimaryKeyExistsException(Rate.class,rateDTO.getProductId() + "-" + rateDTO.getUserId());
        //entity.get().setKey(findKey(rateDTO));
        return createFromE(repository.save(createFromD(rateDTO)));
    }

    public RateDTO delete(RateKey rateKey) {
//        Optional<Rate> entity = Optional.ofNullable(repository.findById(rateKey)
//                .orElseThrow(() -> new NotFoundException(Feature.class, rateKey.getProduct().getProductid())));
//        repository.delete(entity.get());
//        return createFromE(entity.get());
        return null;
    }

    public Rate createFromD(RateDTO dto) {
        Rate entity = modelMapper.map(dto,Rate.class);
        entity.setKey(findKey(dto));
        return entity;
    }

    public RateDTO createFromE(Rate entity) {
        RateDTO dto = modelMapper.map(entity,RateDTO.class);
        dto.setUser(entity.getKey().getUser());
        dto.setProductId(entity.getKey().getProduct().getProductid());
        dto.setUserId(entity.getKey().getUser().getId());
        return dto;
    }

    public Rate updateEntity(Rate entity, RateDTO dto) {
        if (entity != null && dto != null) {
            entity.setComment(dto.getComment());
            entity.setPoint(dto.getPoint());
        }
        return entity;
    }
    private RateKey findKey(RateDTO dto){
        return findKey(dto.getProductId(),dto.getUserId());
    }
    public RateDTO findById(Long productId, Long userId) {
        Optional<Rate> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_User_Id(productId, userId)
                .orElseThrow(() -> new NotFoundException(Rate.class, productId + "-" + userId)));
        return createFromE(entity.get());
    }
    private RateKey findKey(Long productId, Long userId) {
        Optional<User> user = Optional.ofNullable(userRepository.findById(userId)
                .orElseThrow(()-> new NotFoundException(User.class,userId)));
        Optional<Product> product = Optional.ofNullable(productRepository.findById(productId)
                .orElseThrow(()-> new NotFoundException(Product.class,productId)));
        return new RateKey(user.get(),product.get());
    }
    public RateDTO update(Long productId, Long userId, RateDTO dto) {
        Optional<Rate> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_User_Id(productId, userId)
                .orElseThrow(() -> new NotFoundException(Rate.class, productId + "-" + userId)));
        entity.get().setKey(findKey(dto));
        return createFromE(repository.save(updateEntity(entity.get(), dto)));
    }

    public RateDTO delete(Long productId, Long userId) {
        Optional<Rate> entity = Optional.ofNullable(repository.findByKey_Product_ProductidAndKey_User_Id(productId, userId)
                .orElseThrow(() -> new NotFoundException(Rate.class, productId + "-" + userId)));
        repository.delete(entity.get());
        return createFromE(entity.get());
    }

    public List<RateDTO> findAll(Long productId) {
        return createFromEntities(repository.findAllByKey_Product_ProductidOrderByPointDesc(productId));
    }
}
