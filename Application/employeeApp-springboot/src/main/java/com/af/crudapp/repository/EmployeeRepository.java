package com.af.crudapp.repository;

import com.af.crudapp.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface EmployeeRepository extends MongoRepository<Employee,String> {
    @Query("{'department.id':{$in:?0}}")
    List<Employee> getEmployeeByDepartment(String[] id);
}
