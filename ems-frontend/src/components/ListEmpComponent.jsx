import React,{useState,useEffect} from 'react'
import {ListOfEmployees,deleteEmployee} from './../services/EmployeeServices.js'
import { successAlert } from "./PopUp.js";
import {useNavigate} from 'react-router-dom'
function ListEmpComponent() {
    const [employees, setEmployees] = useState([])
    const navigator = useNavigate()
    // const id = useParams()
    useEffect(()=>{
        ListOfEmployees().then((response)=>{
            setEmployees(response.data)
        }).catch((error)=>console.error(error)
    )
    })
    const addEmployee = ()=>{
        navigator('/add-employee')
    }
    function updateEmployee(id) {
        navigator(`/edit-employee/${id}`)
    }
    function deleteEmployeeData(id) {
        successAlert("Employee Deleted Successfully") 
        deleteEmployee(id).then(navigator('/employees'))
    }
    return (
        <div className="container overflow-auto mb-5 mt-5">
            <h2 className="text-center mt-3">List Of Employees</h2>
            <button type="button" className="btn bg-primary text-white mb-1" onClick={addEmployee}>Add Employee</button>
            <table className="table table-striped table-bordered overflow-auto mt-3">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Employee Email</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(emp=>(
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td className="d-flex justify-content-center justify-content-around">
                                    <button className="btn btn-primary " onClick={()=>updateEmployee(emp.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={()=>deleteEmployeeData(emp.id)}>Delete</button>
                                </td>
                            </tr>)
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmpComponent
