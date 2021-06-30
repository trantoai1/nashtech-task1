package com.nashtech.toaitran.service;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

public class BaseRepositoryImpl<T> {


    private EntityManager entityManager;


    public EntityManager getSessionFactory() {
        return entityManager;
    }

    public final void setSessionFactory(EntityManager sessionFactory) {
        this.entityManager = sessionFactory;
    }

    public boolean save(T entity) {
        boolean result = false;
        Session session = entityManager.unwrap(Session.class);
        Transaction ts = session.beginTransaction();
        try {

            session.save(entity);
            ts.commit();
            result = true;
        } catch (Exception e) {
            ts.rollback();
            e.printStackTrace();
            //return false;
        } finally {

            session.close();

        }
        return result;
    }

    public boolean update(T entity) {
        boolean result = false;
        Session session = entityManager.unwrap(Session.class);
        Transaction ts = session.beginTransaction();
        try {


            session.update(entity);
            ts.commit();
            result = true;
        } catch (Exception e) {
            ts.rollback();
            e.printStackTrace();

        } finally {
            session.close();
        }
        return result;
    }

    public boolean delete(T entity) {
        boolean result = false;
        Session session = entityManager.unwrap(Session.class);
        Transaction ts = session.beginTransaction();
        try {


            session.delete(entity);
            ts.commit();
            result = true;
        } catch (Exception e) {
            e.printStackTrace();
            ts.rollback();
        } finally {
            session.close();
        }
        return result;
    }
    //@Override

}