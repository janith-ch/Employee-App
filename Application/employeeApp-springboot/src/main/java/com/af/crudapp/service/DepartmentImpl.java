package com.af.crudapp.service;

import com.af.crudapp.model.Department;


import java.util.List;

public interface DepartmentImpl {

    Department createDepartment(Department department);

    List<Department>findAll();
}
