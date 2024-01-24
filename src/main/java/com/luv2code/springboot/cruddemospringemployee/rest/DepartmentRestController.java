package com.luv2code.springboot.cruddemospringemployee.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.luv2code.springboot.cruddemospringemployee.Service.DepartmentService;
import com.luv2code.springboot.cruddemospringemployee.entity.Department;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DepartmentRestController {
	
	
	
private DepartmentService departmentService;
	
	@Autowired
	public DepartmentRestController(DepartmentService theDepartmentService) {
		
		departmentService=theDepartmentService;
	}
	
	
	//expose "/employee" and return a list of employee
	@GetMapping("/department")
	public List<Department> findAll(){
		return departmentService.findAll();
	}
	
	@GetMapping("/department/{deptId}")
	public Department getDepartment(@PathVariable int deptId) {
		Department theDepartment = departmentService.findById(deptId);
		if(theDepartment==null) {
			throw new RuntimeException("department is not found ...");
		}
		return theDepartment;
	}
	@PostMapping("/departments")
	public Department addDepartment(@RequestBody Department theDepartment) {
		//also just in case they pass as id in JSON ... set id to 0
		//this is to force a save of new item... instead of update
		
		theDepartment.setDept_id(0);
		Department dbDepartment=departmentService.save(theDepartment);
		return dbDepartment;
	}
/*	@PutMapping("/employees")
	public Employee updatEmployee(@RequestBody Employee theEmployee) {
		//also just in case they pass as id in JSON ... set id to 0
		//this is to force a save of new item... instead of update
		
	
		Employee dbEmployee=employeeService.save(theEmployee);
		return dbEmployee;
	}*/
	
	@PutMapping("/update/{theid}")
	public ResponseEntity<Department>updateDepartment(@PathVariable int theid,@RequestBody Department departmentdetails){
		Department updateDepartment = departmentService.findById(theid);
		
		updateDepartment.setDept_name(departmentdetails.getDept_name());
		
		departmentService.save(updateDepartment);
		return ResponseEntity.ok(updateDepartment);
		
		
		
		
	}

	
	
	
	@DeleteMapping("/department/{deptId}")
    public String deleteDepartment(@PathVariable int deptId) {
		Department theDepartment = departmentService.findById(deptId);
		if(theDepartment==null) {
			throw new RuntimeException("department not found");
			
		}
		departmentService.deleteById(deptId);
		return "delete employee id " + deptId;
	}
	

}
