package com.nashtech.toaitran.controller;

import com.google.gson.Gson;
import com.nashtech.toaitran.service.IBaseService;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

public interface IBaseControllerTest<D, ID, S extends IBaseService> {



    ResultMatcher UNAUTHORIZED_GET ();
    ResultMatcher UNAUTHORIZED_POST();
    ResultMatcher UNAUTHORIZED_PUT ();
    ResultMatcher UNAUTHORIZED_DELETE ();
    ResultMatcher USER_GET ();
    ResultMatcher USER_POST ();
    ResultMatcher USER_PUT ();
    ResultMatcher USER_DELETE ();
    ResultMatcher ADMIN_GET ();
    ResultMatcher ADMIN_POST ();
    ResultMatcher ADMIN_PUT ();
    ResultMatcher ADMIN_DELETE ();

    String username = "user";

    String adminName = "admin";

    String getEndpoint();
    MockMvc getMockMvc();

    S getService();

    ArrayList<D> list();

    D dto();

    ID getID(D d);

    default String json() {
        Gson gson = new Gson();
        return gson.toJson(dto());
    }

    @Test
    default void unAuthorized_GetAll() throws Exception {
        when(getService().findAll()).thenReturn(new ArrayList<D>());
        getMockMvc().perform(get(getEndpoint()))
                .andExpect(UNAUTHORIZED_GET());
    }

    @Test
    default void unAuthorized_Get() throws Exception {
        when(getService().findById(getID(dto()))).thenReturn(null);
        getMockMvc().perform(
                get(getEndpoint() + "/" + getID(dto())))
                .andExpect(UNAUTHORIZED_GET());
    }

    @Test
    default void unAuthorized_Insert() throws Exception {
        when(getService().save(dto())).thenReturn(null);
        getMockMvc().perform(
                post(getEndpoint())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(UNAUTHORIZED_POST());
    }

    @Test
    default void unAuthorized_Update() throws Exception {
        when(getService().update(getID(dto()), dto())).thenReturn(null);
        getMockMvc().perform(
                put(getEndpoint() + "/" + getID(dto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(UNAUTHORIZED_PUT());
    }

    @Test
    default void unAuthorized_Delete() throws Exception {

        when(getService().delete(getID(dto()))).thenReturn(null);
        getMockMvc().perform(
                delete(getEndpoint() + "/" + getID(dto())))
                .andExpect(UNAUTHORIZED_DELETE());
    }

//    @Test
//    default void save_UnAuthorized() throws Exception {
//
//        when(getService().save(dto())).thenReturn(null);
//        getMockMvc().perform(
//                get(getEndpoint()))
//                .andExpect(status().isUnauthorized());
//    }

    @Test
    @WithMockUser(username = username, roles = "USER")
    default void user_GetAll() throws Exception {
        when(getService().findAll()).thenReturn(list());
        getMockMvc().perform(
                get(getEndpoint()))
                .andExpect(USER_GET());
    }

    @Test
    @WithMockUser(username = username, roles = "USER")
    default void user_Get() throws Exception {
        when(getService().findById(getID(dto()))).thenReturn(dto());
        getMockMvc().perform(
                get(getEndpoint() + "/" + getID(dto())))
                .andExpect(USER_GET());
    }

    @Test
    @WithMockUser(username = username, roles = "USER")
    default void user_Insert() throws Exception {
        when(getService().save(dto())).thenReturn(dto());
        getMockMvc().perform(
                post(getEndpoint())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(USER_POST());
    }

    @Test
    @WithMockUser(username = username, roles = "USER")
    default void user_Update() throws Exception {
        when(getService().update(getID(dto()), dto())).thenReturn(dto());
        getMockMvc().perform(
                put(getEndpoint() + "/" + getID(dto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(USER_PUT());
    }

    @Test
    @WithMockUser(username = username, roles = "USER")
    default void user_Delete() throws Exception {
        when(getService().delete(getID(dto()))).thenReturn(dto());
        getMockMvc().perform(
                delete(getEndpoint() + "/" + getID(dto())))
                .andExpect(USER_DELETE());
    }
    @Test
    @WithMockUser(username = adminName, roles = "ADMIN")
    default void admin_GetAll() throws Exception {
        when(getService().findAll()).thenReturn(list());
        getMockMvc().perform(
                get(getEndpoint()))
                .andExpect(ADMIN_GET());
    }

    @Test
    @WithMockUser(username = adminName, roles = "ADMIN")
    default void admin_Get() throws Exception {
        when(getService().findById(getID(dto()))).thenReturn(dto());
        getMockMvc().perform(
                get(getEndpoint() + "/" + getID(dto())))
                .andExpect(ADMIN_GET());
    }

    @Test
    @WithMockUser(username = adminName, roles = "ADMIN")
    default void admin_Insert() throws Exception {
        when(getService().save(dto())).thenReturn(dto());
        getMockMvc().perform(
                post(getEndpoint())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(ADMIN_POST());
    }

    @Test
    @WithMockUser(username = adminName, roles = "ADMIN")
    default void admin_Update() throws Exception {
        when(getService().update(getID(dto()), dto())).thenReturn(dto());
        getMockMvc().perform(
                put(getEndpoint() + "/" + getID(dto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(ADMIN_PUT());
    }

    @Test
    @WithMockUser(username = adminName, roles = "ADMIN")
    default void admin_Delete() throws Exception {
        when(getService().delete(getID(dto()))).thenReturn(dto());
        getMockMvc().perform(
                delete(getEndpoint() + "/" + getID(dto())))
                .andExpect(ADMIN_DELETE());
    }
}
