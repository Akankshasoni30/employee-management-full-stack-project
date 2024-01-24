package com.luv2code.springboot.cruddemospringemployee;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.ResponseEntity;

import com.luv2code.springboot.cruddemospringemployee.Service.DepartmentService;
import com.luv2code.springboot.cruddemospringemployee.entity.Department;
import com.luv2code.springboot.cruddemospringemployee.entity.Employee;
import com.luv2code.springboot.cruddemospringemployee.rest.DepartmentRestController;





@ExtendWith(MockitoExtension.class)
class DepartmentRestControllerTest {

    @Mock
    private DepartmentService departmentService;

    @InjectMocks
    private DepartmentRestController departmentController;

    private List<Department> departments;

    @BeforeEach
    void setUp() {
        // Initialize mock data
    	Department department1 = new Department();
    	Department department2 = new Department();
    	departments = Arrays.asList(department1, department2);
    }

    @Test
    void testFindAll() {
        // Arrange
        when(departmentService.findAll()).thenReturn(departments);

        // Act
        List<Department> result = departmentController.findAll();

        // Assert
        verify(departmentService).findAll();
        // Add additional assertions based on your specific requirements
    }
    
    
    @Test
    void testGetDepartment() {
        // Mock data
    	 int dept_id = 1;

        // Mocking the service method
        when(departmentService.findById(dept_id)).thenReturn(departments.get(0));

        // Call the controller method
        Department result = departmentController.getDepartment(dept_id);

        // Verify the results
        verify(departmentService).findById(dept_id);
    }
    
    
    @Test
    void testAddDepartment() {
        // Mock data
        Department department = new Department();

        // Mocking the service method
        when(departmentService.save(any(Department.class))).thenReturn(department);

        // Call the controller method
        Department result = departmentController.addDepartment(department);

        // Verify the results
        verify(departmentService).save(any(Department.class));
    }
    
    @Test
    void testUpdateDepartment() {
        // Mock data
    	 int dept_id = 1;
    	 Department departmentDetails = new Department();

        // Mocking the service methods
        when(departmentService.findById(dept_id)).thenReturn(departments.get(0));
        

        // Call the controller method
        ResponseEntity<Department> result = departmentController.updateDepartment(dept_id, departmentDetails);

        
        verify(departmentService).findById(dept_id);
        verify(departmentService).save(any(Department.class));
      
    }
    
    @Test
    void testDeleteDepartment() {
        // Mock data
       int dept_id=1;
        // Mocking the service method
        when(departmentService.findById(dept_id)).thenReturn(departments.get(0));

        // Call the controller method
        String result = departmentController.deleteDepartment(dept_id);

        // Verify the results
        verify(departmentService).findById(dept_id);
        verify(departmentService).deleteById(dept_id);
    }

    
  
    
   
    
    
    
}