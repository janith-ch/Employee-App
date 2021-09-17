package com.af.crudapp.service;

import com.af.crudapp.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeImpl {

    public Employee createEmployee(Employee employee);

    public List<Employee> findAll();

    public boolean updateEmployee(Employee employee, String id);

    public boolean deleteEmployee(String id);

    public Optional<Employee> findById(String id);

    List<Employee> getEmployeeByDepartment(String[] id);

    int calculationDepartmentSalary(String id);
}
