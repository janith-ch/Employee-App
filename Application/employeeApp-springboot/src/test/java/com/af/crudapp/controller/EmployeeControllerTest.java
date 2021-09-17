package com.af.crudapp.controller;
import com.af.crudapp.model.Employee;
import com.af.crudapp.service.EmployeeService;
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
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.hamcrest.CoreMatchers.is;




@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class EmployeeControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private EmployeeService employeeService;

    int size = 0;
    String id = "";
//    String status = null;
//    String name = null;
//    String code = null;


    @Before
    public void init() {
        List<Employee> employee = employeeService.findAll();
        size = employee.size();
        if (employee.size() != 0) {
            for (Employee forEmployee : employee) {
                id = forEmployee.getId();

                break;
            }
        }
    }
    @Test
    public void findByIdTest() throws Exception {
        int id = 1;
        if (id != -1) {
            mockMvc.perform(get("/employee/"+id+""))
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(status().isOk())
             .andExpect(jsonPath("id", is(id)));
        } else {
            mockMvc.perform(get("/employee/"+id+""))
                    .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8)).andExpect(status().isOk())
                    .andExpect(status().isNoContent());
        }
    }

}

