package com.nashtech.toaitran.service;

import com.nashtech.toaitran.model.Category;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class CategoryService extends BaseRepositoryImpl<Category> {
    @Autowired
    public CategoryService(EntityManager sessionFactory) {
        super();
        this.setSessionFactory(sessionFactory);
        // TODO Auto-generated constructor stub
    }
    public List<Category> getAll()
    {
        Session session = this.getSessionFactory().unwrap(Session.class);
        Query qry = session.createQuery("FROM Category");

        return (List<Category>) qry.list();
    }
    public Category findById(String id)
    {
        Category b = null;
        Session session = this.getSessionFactory().unwrap(Session.class);
        Query qry = session.createQuery("FROM Category where id=:id");
        qry.setParameter("id", id);
        b = (Category) qry.uniqueResult();
        return b;
    }
}