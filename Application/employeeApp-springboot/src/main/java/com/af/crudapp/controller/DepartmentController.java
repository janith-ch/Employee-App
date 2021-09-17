package com.af.crudapp.controller;
import com.af.crudapp.model.Department;
import com.af.crudapp.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/department")
public class DepartmentController {
    @Autowired
    DepartmentService departmentService;

    @PostMapping("/")
    public Department createDepartment(@RequestBody Department department)
    {
        return departmentService.createDepartment(department);
    }
    @GetMapping("/")
    public List<Department> findAll() {return departmentService.findAll();
    }
}
