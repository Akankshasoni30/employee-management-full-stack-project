import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

const AddDepartment = () => {
    let navigate=useNavigate();

    const[department,setDepartment]=useState({
    
        dept_name:''
       
    })
    const {dept_name}=department;
    const handleInputChange=(e)=>{
        setDepartment({...department,[e.target.name] : e.target.value});
    console.log(department);
    
    };
    const saveDepartment =async(e) =>{
        e.preventDefault();
       
    
      await axios.post("http://localhost:8087/api/departments", department).then((response) => {
        console.log(response.data);
      })
        .catch((error) => {
          if (error.response) {
            console.error('Server responded with:', error.response.status);
            console.error('Data:', error.response.data);
          } else {
            console.error('No response received:', error.message);
          }
        });
    console.log(department);
       navigate("/view-departments")
    };
    
    
      return (
        <div>
            <NavBar/>
        
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
          
          <form onSubmit={(e)=> saveDepartment(e)}>
            <div className="input-group mb-5">
                <label 
                className="input-group-text"
                htmlFor="dept_name"
                >DEPARTMENT NAME
                </label>
               
               <input className="form-control col-sm-6"
               type="text"
               name="dept_name"
               id="dept_name"
               required
               value={dept_name}
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
            <Link to={"/view-departments"}
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

export default AddDepartment
