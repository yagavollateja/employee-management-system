import React,{useState,useEffect} from 'react'
import Swal from "sweetalert2";
import { createEmployee,getEmployee ,updateEmployee} from "./../services/EmployeeServices.js";
import { successAlert } from "./PopUp.js";
import {useNavigate,useParams} from 'react-router-dom'
function EmployeeAdd() {
    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')
    const {id} = useParams()
    const [error,setError] = useState({
        firstName:'',
        lastName:'',
        email:''
    })
    useEffect(() => {
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
            }).catch((err)=>console.log(err))
        }
    }, [id])
    const navigator = useNavigate()
    function saveOrUpdateEmployee(e) {
        e.preventDefault();
        if(formValidation()){
            const employee = { firstName, lastName, email };
            console.log(employee);
            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    successAlert("Employee Update Successfully")
                    navigator('/employees')
                }).catch((err)=>console.log(err))
            }else{
                createEmployee(employee)
                .then((response) => {
                    console.log(response.data);

                    // Swal.close(); // 🛑 stop loading popup

                    // ✅ Show success popup
                    successAlert("Employee Added Successfully")
                        .then(() => {
                            navigator("/employees"); // 👉 navigate AFTER popup OK
                        });
                });
            }
        }
    }
    function formValidation() {
        let valid = true;
        const copyError = {...error}
        if(firstName.trim()){
            copyError.firstName = ''
        }else{
            copyError.firstName = 'First Name is requeired'
            valid = false
        }
        if(lastName.trim()){
            copyError.lastName = ''
        }else{
            copyError.lastName = 'Last Name is requeired'
            valid = false
        }
        if(email.trim()){
            copyError.email = ''
        }else{
            copyError.email = 'Email is requeired'
            valid=false
        }
        setError(copyError)
        return valid;
    }
    function updateTitle() {
        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center">Add Employee</h2>
        }
    }
    const handleBackNav=()=>{
        navigator("/employees")
    }
    return (
        <div className="container mt-4">
            <br/><br />
            <button className="btn btn-dark position-absolute" onClick={handleBackNav}>Back To Home</button>
            <div className="row">
                <div className="card mt-2 col-md-6 offset-md-3 offset-md-3">
                    {updateTitle()}
                    <div className="card-body">
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-label">Employee First Name:</label>
                                <input 
                                    type="text"
                                    placeholder="Enter Employee First Name"
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${error.firstName ?'is-invalid':''}`}
                                    required
                                    onChange={(e)=>setFirstName(e.target.value)}
                                />
                                {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Employee Last Name:</label>
                                <input 
                                    type="text"
                                    placeholder="Enter Employee Last Name"
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${error.lastName?'is-invalid':''}`}
                                    required
                                    onChange={(e)=>setLastName(e.target.value)}
                                    
                                />
                                {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Employee Email:</label>
                                <input 
                                    type="email"
                                    placeholder="Enter Employee Email"
                                    name='email'
                                    value={email}
                                    className={`form-control ${error.email?'is-invalid':''}`}
                                    required
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                                {error.email && <div className='invalid-feedback'>{error.email}</div>} 
                            </div>
                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>{id?"Update":"Submit"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeAdd
