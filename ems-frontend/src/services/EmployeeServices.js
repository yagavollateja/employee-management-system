import axios from 'axios'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/employees';
export const ListOfEmployees =()=>  axios.get(API_BASE_URL);
export const createEmployee = (employee) => axios.post(API_BASE_URL,employee);
export const getEmployee = (employeeId)=>axios.get(API_BASE_URL+'/'+employeeId);
export const updateEmployee = (employeeId,employee)=>axios.put(API_BASE_URL+'/'+employeeId,employee);
export const deleteEmployee = (employeeId) =>axios.delete(API_BASE_URL+'/'+employeeId);
