package com.af.crudapp.service;

import com.af.crudapp.model.Department;
import com.af.crudapp.model.Employee;
import com.af.crudapp.repository.DepartmentRepository;
import com.af.crudapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService implements EmployeeImpl {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    DepartmentRepository departmentRepository;

    @Override
    public Employee createEmployee(Employee employee) {

        employeeRepository.save(employee);
        return employee;

    }

    @Override
    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    @Override
    public boolean updateEmployee(Employee employee, String id) {

        Optional<Employee> employee1 = employeeRepository.findById(id);
        if (employee1.equals(null)) {
            return false;
        } else {
            Employee employee2 = employee1.get();
            employee2.setName(employee.getName());
            employee2.setEmail(employee.getEmail());
            employee2.setPhone(employee.getPhone());
            employeeRepository.save(employee2);
        }
        return true;
    }

    @Override
    public boolean deleteEmployee(String id) {

        Optional<Employee> employee1 = employeeRepository.findById(id);
        if (employee1.equals(null)) {
            return false;
        } else {
            employeeRepository.deleteById(id);
            return true;
        }

    }

    @Override
    public Optional<Employee> findById(String id) {
        Optional<Employee> employee1 = employeeRepository.findById(id);
        return employee1;
    }

    @Override
    public List<Employee> getEmployeeByDepartment(String[] id) {
        return employeeRepository.getEmployeeByDepartment(id);
    }

    @Override
    public int calculationDepartmentSalary(String id) {
        String[] strings = {id};

        List<Employee> employees = employeeRepository.getEmployeeByDepartment(strings);
        Optional<Department> department = departmentRepository.findById(id);
        System.out.println(department);
        System.out.println(employees);
        Integer salary = Integer.parseInt(department.get().getSalary());
        int num = employees.size();
        int total = salary * num;
        return total;
    }

}
