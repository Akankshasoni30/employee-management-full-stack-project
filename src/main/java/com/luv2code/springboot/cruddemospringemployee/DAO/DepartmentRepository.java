package com.luv2code.springboot.cruddemospringemployee.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.luv2code.springboot.cruddemospringemployee.entity.Department;


public interface DepartmentRepository extends JpaRepository<Department,Integer> {
	   //thats it .. no need to write any code
	}
