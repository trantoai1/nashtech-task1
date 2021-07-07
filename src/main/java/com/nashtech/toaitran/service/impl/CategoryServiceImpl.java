package com.nashtech.toaitran.service.impl;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.CateDTO;
import com.nashtech.toaitran.model.entity.Category;
import com.nashtech.toaitran.repository.ICategoryRepository;
import com.nashtech.toaitran.service.IBaseService;
import com.nashtech.toaitran.service.IModelMapper;
import lombok.Getter;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
//@Transactional
public class CategoryServiceImpl implements IBaseService<CateDTO, Long>, IModelMapper<CateDTO,Category> {


    private final ICategoryRepository categoryRepository;
    @Getter
    private final ModelMapper modelMapper;

    public CategoryServiceImpl(ICategoryRepository categoryRepository, ModelMapper modelMapper) {
        this.categoryRepository = categoryRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CateDTO> findAll() {
        return createFromEntities(categoryRepository.findAll());
    }

    @Override
    public CateDTO findById(Long id) {
        Optional<Category> cate = categoryRepository.findById(id);
        cate.orElseThrow(()-> new NotFoundException(Category.class,id));
        return createFromE(cate.get());
    }

    @Override
    public CateDTO update(Long id,CateDTO cateDTO) {
        Optional<Category> cate = categoryRepository.findById(id);
        cate.orElseThrow(()-> new NotFoundException(Category.class,id));
        return createFromE(categoryRepository.save(updateEntity(cate.get(),cateDTO)));
    }

    @Override
    public CateDTO save(CateDTO category) {
        return createFromE(categoryRepository.save(createFromD(category)));
    }

    @Override
    public CateDTO delete(Long id) {
        Category category = categoryRepository.getById(id);
        categoryRepository.delete(category);
        return createFromE(category);
    }

    @Override
    public Category createFromD(CateDTO dto) {
        Category entity = modelMapper.map(dto,Category.class);
        return entity;
    }

    @Override
    public CateDTO createFromE(Category entity) {
        CateDTO dto = modelMapper.map(entity,CateDTO.class);
        return dto;
    }

    @Override
    public Category updateEntity(Category entity, CateDTO dto) {
        if (entity != null && dto != null) {
            entity.setCateName(dto.getCateName());
            entity.setDescription(dto.getDescription());
            entity.setId(dto.getId());
        }

        return entity;
    }
//    @Autowired
//    public CategoryService(EntityManager sessionFactory) {
//        super();
//        this.setSessionFactory(sessionFactory);
//        // TODO Auto-generated constructor stub
//    }
//    public List<Category> getAll()
//    {
//        Session session = this.getSessionFactory().unwrap(Session.class);
//        Query qry = session.createQuery("FROM Category");
//
//        return (List<Category>) qry.list();
//    }
//    public Category findById(String id)
//    {
//        Category b = null;
//        Session session = this.getSessionFactory().unwrap(Session.class);
//        Query qry = session.createQuery("FROM Category where id=:id");
//        qry.setParameter("id", id);
//        b = (Category) qry.uniqueResult();
//        return b;
//    }
}
