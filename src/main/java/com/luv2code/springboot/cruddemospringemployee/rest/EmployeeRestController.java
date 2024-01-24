package com.luv2code.springboot.cruddemospringemployee.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.luv2code.springboot.cruddemospringemployee.DAO.EmployeeDAO;
import com.luv2code.springboot.cruddemospringemployee.Service.EmployeeService;
//import com.luv2code.springboot.cruddemospringemployee.Service.EmployeeServiceImpl;
import com.luv2code.springboot.cruddemospringemployee.entity.Employee;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeRestController {
	
//quick and dirty: inject employee dao
	
	private EmployeeService employeeService;
	
	@Autowired
	public EmployeeRestController(EmployeeService thEmployeeService) {
		
		employeeService=thEmployeeService;
	}
	
	
	//expose "/employee" and return a list of employee
	@GetMapping("/employee")
	public List<Employee> findAll(){
		return employeeService.findAll();
	}
	
	@GetMapping("/employee/{employeeId}")
	public Employee getEmployee(@PathVariable int employeeId) {
		Employee theEmployee = employeeService.findById(employeeId);
		if(theEmployee==null) {
			throw new RuntimeException("employee is not found ...");
		}
		return theEmployee;
	}
	
	
	@GetMapping("/employee/{employeeemail}/{employeepassword}")
	public Employee getEmployee(@PathVariable String employeeemail,@PathVariable String employeepassword ) {
		Employee theEmployee = employeeService.Login(employeeemail,employeepassword);
		System.out.println(employeeemail);
		System.out.println(employeepassword);
		System.out.println(theEmployee.getEmail());
		System.out.println(theEmployee.getPassword());
		if(theEmployee!=null &&(theEmployee.getEmail().equals(employeeemail) && theEmployee.getPassword().equals(employeepassword))) {
			return theEmployee;
		}
		else {
			throw new RuntimeException("employee is not found ...");
		}
		
	}
	
	
    @PostMapping("/employees")
	public Employee addEmployee(@RequestBody Employee theEmployee) {
		//also just in case they pass as id in JSON ... set id to 0
		//this is to force a save of new item... instead of update
		theEmployee.setId(0);
		Employee dbEmployee=employeeService.save(theEmployee);
		return dbEmployee;
	}
/*	@PutMapping("/employees")
	public Employee updatEmployee(@RequestBody Employee theEmployee) {
		//also just in case they pass as id in JSON ... set id to 0
		//this is to force a save of new item... instead of update
		
	
		Employee dbEmployee=employeeService.save(theEmployee);
		return dbEmployee;
	}*/
	
	@PutMapping("/updateemployee/{theid}")
	public ResponseEntity<Employee>updateEmployee(@PathVariable int theid,@RequestBody Employee employeedetails){
		Employee updateEmployee = employeeService.findById(theid);
		
		updateEmployee.setFirstName(employeedetails.getFirstName());
		updateEmployee.setLastName(employeedetails.getLastName());
		updateEmployee.setEmail(employeedetails.getEmail());
		updateEmployee.setDept_id(employeedetails.getDept_id());
		updateEmployee.setRole(employeedetails.getRole());
		updateEmployee.setPassword(employeedetails.getPassword());
		
		
		
		employeeService.save(updateEmployee);
		return ResponseEntity.ok(updateEmployee);
		
		
		
		
	}

	
	
	
	
	@DeleteMapping("/employee/{employeeid}")
    public String deleteEmployee(@PathVariable int employeeid) {
		Employee theEmployee = employeeService.findById(employeeid);
		if(theEmployee==null) {
			throw new RuntimeException("employee not found");
			
		}
		employeeService.deleteById(employeeid);
		return "delete employee id " +employeeid;
	}
	
}
