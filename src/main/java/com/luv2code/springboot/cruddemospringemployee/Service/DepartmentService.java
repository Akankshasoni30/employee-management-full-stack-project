package com.luv2code.springboot.cruddemospringemployee.Service;

import java.util.List;

import com.luv2code.springboot.cruddemospringemployee.entity.Department;


public interface DepartmentService {
	
	List<Department> findAll();
	 Department findById(int theId);
    //update the employee
    Department save(Department theDepartment);
    //delete the employee
    void deleteById(int theId);

}
