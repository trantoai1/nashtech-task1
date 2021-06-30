package com.nashtech.toaitran.service;

import com.nashtech.toaitran.model.Category;
import com.nashtech.toaitran.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
//@Transactional
public class CategoryService implements BaseService<Category, Long> {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category findById(Long id) {
        return categoryRepository.getById(id);
    }

    @Override
    public void update(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public void insert(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public void save(Category category) {
        categoryRepository.save(category);
    }

    @Override
    public void delete(Category category) {
        categoryRepository.delete(category);
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
