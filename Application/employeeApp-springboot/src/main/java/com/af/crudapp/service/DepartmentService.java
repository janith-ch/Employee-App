package com.af.crudapp.service;

import com.af.crudapp.model.Department;
import com.af.crudapp.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService implements DepartmentImpl {
    @Autowired
    DepartmentRepository departmentRepository;

    @Override
    public Department createDepartment(Department department) {
        departmentRepository.save(department);
        return department;
    }

    @Override
    public List<Department> findAll() {
        return departmentRepository.findAll();
    }
}
