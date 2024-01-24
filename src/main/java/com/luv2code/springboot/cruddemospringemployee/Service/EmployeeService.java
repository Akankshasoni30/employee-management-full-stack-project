package com.luv2code.springboot.cruddemospringemployee.Service;

import java.util.List;
//import java.util.Optional;

import com.luv2code.springboot.cruddemospringemployee.entity.Employee;

public interface EmployeeService {
	
	
	List<Employee> findAll();
	 Employee findById(int theId);
     //update the employee
     Employee save(Employee thEmployee);
     //delete the employee
     void deleteById(int theId);
     Employee Login(String email,String password);

     
     


}
