package com.nashtech.toaitran.controller;

import com.google.gson.Gson;
import com.nashtech.toaitran.service.IBaseService;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public interface IBaseControllerTest<D, ID, S extends IBaseService> {
    String getEndpoint();

    String role = "USER";
    String username = "user";

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
    default void getAll_UnAuthorized() throws Exception {
        when(getService().findAll()).thenReturn(new ArrayList<D>());
        getMockMvc().perform(get(getEndpoint()))
                .andExpect(status()
                        .isUnauthorized());
    }

    @Test
    default void get1_UnAuthorized() throws Exception {
        when(getService().findById(getID(dto()))).thenReturn(null);
        getMockMvc().perform(
                get(getEndpoint() + "/" + getID(dto())))
                .andExpect(status().isUnauthorized());
    }

    @Test
    default void post_UnAuthorized() throws Exception {
        when(getService().save(dto())).thenReturn(null);
        getMockMvc().perform(
                post(getEndpoint())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(status().isUnauthorized());
    }

    @Test
    default void update_UnAuthorized() throws Exception {
        when(getService().update(getID(dto()), dto())).thenReturn(null);
        getMockMvc().perform(
                put(getEndpoint() + "/" + getID(dto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(status().isUnauthorized());
    }

    @Test
    default void delete_UnAuthorized() throws Exception {

        when(getService().delete(getID(dto()))).thenReturn(null);
        getMockMvc().perform(
                delete(getEndpoint() + "/" + getID(dto())))
                .andExpect(status().isUnauthorized());
    }

    @Test
    default void save_UnAuthorized() throws Exception {

        when(getService().save(dto())).thenReturn(null);
        getMockMvc().perform(
                get(getEndpoint()))
                .andExpect(status().isUnauthorized());
    }

    @Test
    @WithMockUser(username = username, roles = role)
    default void getAll() throws Exception {
        when(getService().findAll()).thenReturn(list());
        getMockMvc().perform(
                get(getEndpoint()))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = username, roles = role)
    default void get1() throws Exception {
        when(getService().findById(getID(dto()))).thenReturn(dto());
        getMockMvc().perform(
                get(getEndpoint() + "/" + getID(dto())))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = username, roles = role)
    default void insert() throws Exception {
        when(getService().save(dto())).thenReturn(dto());
        getMockMvc().perform(
                post(getEndpoint())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = username, roles = role)
    default void update() throws Exception {
        when(getService().update(getID(dto()), dto())).thenReturn(dto());
        getMockMvc().perform(
                put(getEndpoint() + "/" + getID(dto()))
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json()))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser(username = username, roles = role)
    default void delete1() throws Exception {
        when(getService().delete(getID(dto()))).thenReturn(dto());
        getMockMvc().perform(
                delete(getEndpoint() + "/" + getID(dto())))
                .andExpect(status().isOk());
    }
}
