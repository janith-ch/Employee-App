package com.af.crudapp.controller;

import com.af.crudapp.model.Department;
import com.af.crudapp.service.DepartmentService;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import java.util.List;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class DepartmentControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private DepartmentService departmentService;

    int size = 0;
    int id = -1;
//    String status = null;
//    String name = null;
//    String code = null;


    @Before
    public void init() {
        List<Department> department = departmentService.findAll();
        size = department.size();
        if (department.size() != 0) {
            for (Department forDepartment : department) {

                break;
            }
        }
    }
    @Test
    public void findAllTest() throws Exception {
        if (id != -1) {
            mockMvc.perform(get("/department/"))
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(status().isOk());
        } else {
            mockMvc.perform(get("/department/"))
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(status().isOk());
        }
    }


}
