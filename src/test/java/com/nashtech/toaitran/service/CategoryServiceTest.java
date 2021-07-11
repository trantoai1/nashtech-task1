package com.nashtech.toaitran.service;

import com.nashtech.toaitran.exception.NotFoundException;
import com.nashtech.toaitran.model.dto.CateDTO;
import com.nashtech.toaitran.model.entity.Category;
import com.nashtech.toaitran.repository.ICategoryRepository;
import com.nashtech.toaitran.service.impl.CategoryServiceImpl;
import org.jetbrains.annotations.NotNull;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest

public class CategoryServiceTest {
    public static final long ID = 1L;
    public static final String CATE_NAME = "CateTest";
    public static final String HAS_ID_NOT_FOUND = "Category has id=" + ID + " not found!";
    public static final String DTONAME = "DTONAME";
    @Mock
    ICategoryRepository repository;
    @Mock
    ModelMapper modelMapper;
    @InjectMocks
    CategoryServiceImpl service;

    @NotNull
    private Category newCate() {
        Category cate = new Category();
        cate.setId(ID);
        cate.setCateName(CATE_NAME);
        cate.setDescription("");
        return cate;
    }

    @NotNull
    private CateDTO newDTO() {
        CateDTO dto = new CateDTO();
        dto.setId(ID);
        dto.setCateName(DTONAME);
        dto.setDescription("");
        return dto;
    }

    @Test
    public void findAll() {
        assertNotNull(service);
        List<Category> list = new ArrayList<>();
        Category cate = new Category();
        Category cate2 = new Category();
        list.add(cate);
        list.add(cate2);
        when(repository.findAll()).thenReturn(list);
        Collection<CateDTO> result = service.findAll();
        assertEquals(2, result.size());
    }

    @Test
    public void findById() {
        Category cate = newCate();
        //CateDTO dto = newDTO();
        Optional<Category> optional = Optional.of(cate);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), CateDTO.class)).thenReturn(newDTO());
        CateDTO dto2 = service.findById(ID);
        assertEquals(dto2.getCateName(), DTONAME);
    }

    @Test
    public void findById_Null() {
        when(repository.findById(ID)).thenThrow(new NotFoundException(Category.class, ID));
        NotFoundException exception = assertThrows(NotFoundException.class, () -> service.findById(ID));
        assertEquals(HAS_ID_NOT_FOUND, exception.getMessage());
    }

    @Test
    public void update() {
        Category cate = newCate();
        CateDTO dto = newDTO();
        Optional<Category> optional = Optional.of(cate);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), CateDTO.class)).thenReturn(newDTO());
        when(repository.save(optional.get())).thenReturn(cate);
        CateDTO dto2 = service.update(ID, dto);
        assertEquals(dto2.getCateName(), DTONAME);
    }

    @Test
    public void save() {
        Category cate = newCate();
        CateDTO dto = newDTO();
        when(modelMapper.map(dto, Category.class)).thenReturn(cate);
        when(repository.save(cate)).thenReturn(cate);
        when(modelMapper.map(cate, CateDTO.class)).thenReturn(newDTO());
        CateDTO dto2 = service.save(dto);
        assertEquals(dto2.getCateName(), DTONAME);
    }

    @Test
    public void delete() {
        Category cate = newCate();
        //CateDTO dto = newDTO();
        Optional<Category> optional = Optional.of(cate);
        assertNotNull(optional);
        when(repository.findById(ID)).thenReturn(optional);
        when(modelMapper.map(optional.get(), CateDTO.class)).thenReturn(newDTO());
        CateDTO dto2 = service.delete(ID);
        assertEquals(dto2.getCateName(), DTONAME);
    }

    @Test
    public void updateEntity() {
        Category cate = newCate();
        CateDTO dto = newDTO();
        service.updateEntity(cate, dto);
        assertEquals(cate.getCateName(), dto.getCateName());
    }

    @Test
    public void createFromE() {
        Category category = newCate();
        CateDTO dto = newDTO();
        when(modelMapper.map(category, CateDTO.class)).thenReturn(newDTO());
        CateDTO test = service.createFromE(category);
        assertNotNull(test);
        assertEquals(test.getCateName(), dto.getCateName());
    }

    @Test
    public void createFromD() {
        Category category = newCate();
        CateDTO dto = newDTO();
        when(modelMapper.map(dto, Category.class)).thenReturn(newCate());
        Category test = service.createFromD(dto);
        assertNotNull(test);
        assertEquals(test.getCateName(), category.getCateName());
    }
}
