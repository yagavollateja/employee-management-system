package com.springboot.ems.service;

import com.springboot.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    //Create an employee method
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    //Get an employeeById
    EmployeeDto getEmployeeById(Long employeeId);
    //Get All EmployeesDetails
    List<EmployeeDto> getAllEmployees();
    //Update the Employee Details
    EmployeeDto updateEmployee(Long employeeId,EmployeeDto updateEmployeeDto);
    //Delete the Employee
    void deleteEmployee(Long employeeId);
}
