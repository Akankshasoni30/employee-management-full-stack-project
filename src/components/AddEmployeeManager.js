import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavBarManager from './NavBarManager'

const AddEmployeeManager = () => {


    let navigate=useNavigate();

    const[employee,setEmployee]=useState({
    
        firstName:'',
        lastName : '',
        email :'',
        role:'',
        password:'',
        dept_id:''
    })
    const {firstName,lastName,email,role,password,dept_id}=employee;
    const handleInputChange=(e)=>{
    setEmployee({...employee,[e.target.name] : e.target.value});
    console.log(employee);
    
    };
    const saveEmployee =async(e) =>{
        e.preventDefault();
       
        employee.password=employee.firstName+employee.lastName;
      await axios.post("http://localhost:8087/api/employees",employee).then((response) => {
            // Handle successful response
          alert(response.status)
          
          })
          .catch((error) => {
            // Handle error for this specific request
            alert("email id already exist");
        
            // You can also throw a custom error or perform other actions
          });
        console.log(employee);
       navigate("/view-employeesmanager")
    };
    
    
     
    


  return (
    <div>
      <NavBarManager/>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      
      <form onSubmit={(e)=> saveEmployee(e)}>
        <div className="input-group mb-5">
            <label 
            className="input-group-text"
            htmlFor="firstName"
            >First Name
            </label>
           
           <input className="form-control col-sm-6"
           type="text"
           name="firstName"
           id="firstName"
           required
           value={firstName}
           onChange={(e) => handleInputChange(e)}
/>
  </div>

 
     
        <div className="input-group mb-5">
            <label 
            className="input-group-text"
            htmlFor="lastName"
            >Last Name
            </label>
           
           <input className="form-control col-sm-6"
           type="text"
           name="lastName"
           id="lastName"
           required
           value={lastName}
           onChange={(e) => handleInputChange(e)}
/>
  </div>



        <div className="input-group mb-5">
            <label 
            className="input-group-text"
            htmlFor="email"
            >email
            </label>
           
           <input className="form-control col-sm-6"
           type="email"
           name="email"
           id="email"
           required
           value={email}
           onChange={(e) => handleInputChange(e)}
/>
  </div>

  <div className="input-group mb-5">
            <label 
            className="input-group-text"
            htmlFor="email"
            >Role
            </label>
           
           <input className="form-control col-sm-6"
           type="text"
           name="role"
           id="role"
           required
           value={role}
           onChange={(e) => handleInputChange(e)}
/>
  </div>


 
        <div className="input-group mb-5">
            <label 
            className="input-group-text"
            htmlFor="dept_id"
            >department
            </label>
           
           <input className="form-control col-sm-6"
           type="text"
           name="dept_id"
           id="dept_id"
           required
           value={dept_id}
           onChange={(e) => handleInputChange(e)}
/>
  </div>

  <div className="row mb-5">
    <div className="col-sm-2">
        <button
      type="submit"
        className="btn btn-outline-success btn-lg">
            Save
        </button>
    </div>


    <div className="col-sm-2">
        <Link to={"/view-employeesmanager"}
        type="submit"
        className="btn btn-outline-warning btn-lg">
            Cancel
        </Link>
    </div>


  </div>

</form>


    </div>


    </div>
  )
}

export default AddEmployeeManager
