package com.luv2code.springboot.cruddemospringemployee.DAO;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luv2code.springboot.cruddemospringemployee.entity.Employee;

public interface EmployeeREpository extends JpaRepository<Employee,Integer> {
   //thats it .. no need to write any code
	public List<Employee> findAllByOrderByFirstNameAsc();
	public Optional<Employee> findByEmail(String email) ;
}
