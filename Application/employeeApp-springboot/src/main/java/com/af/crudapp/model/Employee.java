package com.af.crudapp.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class Employee {

    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private List<Department> department;
}

