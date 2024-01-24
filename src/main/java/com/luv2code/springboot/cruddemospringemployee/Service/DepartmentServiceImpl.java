package com.luv2code.springboot.cruddemospringemployee.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.luv2code.springboot.cruddemospringemployee.DAO.DepartmentRepository;

import com.luv2code.springboot.cruddemospringemployee.entity.Department;


import jakarta.transaction.Transactional;
@Service
public class DepartmentServiceImpl implements DepartmentService {
private DepartmentRepository departmentRepository;
	
	
	@Autowired
	public DepartmentServiceImpl(DepartmentRepository theDepartmentRepository) {
		departmentRepository=theDepartmentRepository;
	}


	@Override
	public List<Department> findAll() {
		
		return departmentRepository.findAll();
	}


	@Override
	public Department findById(int theId) {
Optional<Department> result = departmentRepository.findById(theId);
		
		Department theDepartment=null;
		if(result.isPresent()) {
			theDepartment=result.get();
		}
		else {
			throw new RuntimeException("did nt find department id " +theId);
		}
		
		return theDepartment;
	}

    @Transactional
	@Override
	public Department save(Department theDepartment) {
		// TODO Auto-generated method stub
		return departmentRepository.save(theDepartment);
	}


	@Override
	public void deleteById(int theId) {
		// TODO Auto-generated method stub
		departmentRepository.deleteById(theId);
	}
      
	
		

}
