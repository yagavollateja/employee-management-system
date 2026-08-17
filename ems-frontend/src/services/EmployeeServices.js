import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const ListOfEmployees =()=>  axios.get(API_BASE_URL);
export const createEmployee = (employee) => axios.post(API_BASE_URL,employee);
export const getEmployee = (employeeId)=>axios.get(API_BASE_URL+'/'+employeeId);
export const updateEmployee = (employeeId,employee)=>axios.put(API_BASE_URL+'/'+employeeId,employee);
export const deleteEmployee = (employeeId) =>axios.delete(API_BASE_URL+'/'+employeeId);
