package com.af.crudapp.controller;
import com.af.crudapp.model.Employee;
import com.af.crudapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;


    @PostMapping("/")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/")
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    @PutMapping("/{id}")
    public boolean updateEmployee(@PathVariable String id, @RequestBody Employee employee) {
        System.out.println(id);
        return employeeService.updateEmployee(employee, id);

    }

    @DeleteMapping("/{id}")
    public boolean deleteEmployee(@PathVariable String id) {
        return employeeService.deleteEmployee(id);
    }

    @GetMapping("/employee/{id}")
    public Optional<Employee> findById(@PathVariable String id) {
        return employeeService.findById(id);
    }

    @PostMapping("/list/")
    public List<Employee> getEmployeeByDepartment( @RequestParam String[] id) {
        return employeeService.getEmployeeByDepartment(id);
    }

    @PostMapping("/calculation/")
    public int calculationDepartmentSalary( @RequestParam String id) {
        return employeeService.calculationDepartmentSalary(id);
    }

}
