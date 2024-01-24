package com.luv2code.springboot.cruddemospringemployee.Service;

import java.util.List;
import java.util.Optional;

import org.hibernate.bytecode.internal.bytebuddy.PrivateAccessorException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.luv2code.springboot.cruddemospringemployee.DAO.EmployeeDAO;
import com.luv2code.springboot.cruddemospringemployee.DAO.EmployeeREpository;
import com.luv2code.springboot.cruddemospringemployee.entity.Employee;

import jakarta.transaction.Transactional;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	
	private EmployeeREpository employrREpository;
	
	
	@Autowired
	public EmployeeServiceImpl(EmployeeREpository thEmployeerEpository) {
		employrREpository=thEmployeerEpository;
	}
      
	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return employrREpository.findAllByOrderByFirstNameAsc();
	}

	@Override
	public Employee findById(int theId) {
		// TODO Auto-generated method stub
		Optional<Employee> result = employrREpository.findById(theId);
		
		Employee thEmployee=null;
		if(result.isPresent()) {
			thEmployee=result.get();
		}
		else {
			throw new RuntimeException("did nt find employee id " +theId);
		}
		
		return thEmployee;
	}
	//for modifying the databse need to use transactional annotation
    @Transactional
	@Override
	public Employee save(Employee thEmployee) {
		// TODO Auto-generated method stub
		return employrREpository.save(thEmployee);
	}

	@Override
	public void deleteById(int theId) {
		// TODO Auto-generated method stub
		employrREpository.deleteById(theId);
		
	}

	@Override
	public Employee Login(String email , String password) {
		// TODO Auto-generated method stub
		Optional<Employee> result = null;
		try {
			result = employrREpository.findByEmail(email);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

		Employee thEmployee=null;
		if(result.isPresent()) {
			thEmployee=result.get();
		}
		else {
			throw new RuntimeException("did nt find employee email " +email);
		}
		
		return thEmployee;
	}

	
			
			
			
}
	


