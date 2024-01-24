package com.luv2code.springboot.cruddemospringemployee;

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

import com.luv2code.springboot.cruddemospringemployee.Service.EmployeeService;
import com.luv2code.springboot.cruddemospringemployee.entity.Employee;
import com.luv2code.springboot.cruddemospringemployee.rest.EmployeeRestController;

@ExtendWith(MockitoExtension.class)
class EmployeeRestControllerTest {

    @Mock
    private EmployeeService employeeService;

    @InjectMocks
    private EmployeeRestController employeeController;

    private List<Employee> employees;

    @BeforeEach
    void setUp() {
        // Initialize mock data
        Employee employee1 = new Employee();
        Employee employee2 = new Employee();
        employees = Arrays.asList(employee1, employee2);
    }

    @Test
    void testFindAll() {
        // Arrange
        when(employeeService.findAll()).thenReturn(employees);

        // Act
        List<Employee> result = employeeController.findAll();

        // Assert
        verify(employeeService).findAll();
        // Add additional assertions based on your specific requirements
    }

    @Test
    void testGetEmployee1() {
        // Arrange
        int employeeId = 1;
        when(employeeService.findById(employeeId)).thenReturn(employees.get(0));

        // Act
        Employee result = employeeController.getEmployee(employeeId);

        // Assert
        verify(employeeService).findById(employeeId);
        // Add additional assertions based on your specific requirements
    }

    // Add more test methods for other controller methods as needed
    

    @Test
    void testAddEmployee() {
        // Arrange
        Employee newEmployee = new Employee();
        when(employeeService.save(any(Employee.class))).thenReturn(newEmployee);

        // Act
        Employee result = employeeController.addEmployee(newEmployee);

        // Assert
        verify(employeeService).save(any(Employee.class));
        // Add additional assertions based on your specific requirements
    }

    @Test
    void testUpdateEmployee() {
        // Arrange
        int employeeId = 1;
        Employee employeeDetails = new Employee();
        when(employeeService.findById(employeeId)).thenReturn(employees.get(0));

        // Act
        ResponseEntity<Employee> result = employeeController.updateEmployee(employeeId, employeeDetails);

        // Assert
        verify(employeeService).findById(employeeId);
        verify(employeeService).save(any(Employee.class));
        // Add additional assertions based on your specific requirements
    }

    @Test
    void testDeleteEmployee() {
        // Arrange
        int employeeId = 1;
        when(employeeService.findById(employeeId)).thenReturn(employees.get(0));

        // Act
        String result = employeeController.deleteEmployee(employeeId);

        // Assert
        verify(employeeService).findById(employeeId);
        verify(employeeService).deleteById(employeeId);
        // Add additional assertions based on your specific requirements
    }
}
