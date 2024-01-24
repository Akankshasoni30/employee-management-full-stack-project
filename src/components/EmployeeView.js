import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Search from '../common/Search';
import NavBar from "./NavBar";

const EmployeeView = () => {

    const [employees,setemployee]= useState([]);
    const[search,setSearch]=useState("");

    useEffect(() => {
		loadEmployee();
	}, []);

    const loadEmployee=async()=>{
        const result= await axios.get("http://localhost:8087/api/employee");
        setemployee(result.data);
    };



    const handleDelete =async(id)=>{
        await axios.delete(`http://localhost:8087/api/employee/${id}`);
        loadEmployee();
    };



  return (
    <div>
        <NavBar/>
   
    <section>
        <Search  search={search}
        setSearch={setSearch}
        />
        <table className='table table-bordered table-hover shadow '>
            <thead>
                <tr className='text-center'>
                    <th>GAID</th>
                    <th>FIRSTNAME</th>
                    <th>LASTNAME</th>
                    <th>EMAIl</th>
                    <th>Role</th>
                    <th>Password</th>
                    <th>DEPARTMENt</th>
                    <th colSpan="3">ACTION</th>
                   
                </tr>
            </thead>
            <tbody className='text-center'>
                {employees.filter((st)=>
                st.firstName.toLowerCase().includes(search))
                
                
                
                .map((employee,index)=>(
                       <tr key={employee.id}>
                        <td>{employee.id}</td>
                       <td>{employee.firstName} </td>
                       <td>{employee.lastName} </td>
                       <td>{employee.email} </td>
                       <td>{employee.role} </td>
                       <td>{employee.password} </td>
                       <td>{employee.dept_id} </td>
                       <td className='mx-2'>
                       <Link  to={`/employee-profile/${employee.id}`} className='btn btn-info'>
                       <FaEye/>
                        </Link> </td>

                       <td className='mx-2'>
                       <Link  to={`/edit-employee/${employee.id}`} className='btn btn-warning'>
                       <FaEdit />
                        </Link> </td>
                       <td className='mx-2'>
                       <button className='btn btn-danger'
                       onClick= {()=> handleDelete(employee.id)}
                       
                       
                       >
                       <FaTrashAlt />
                        </button> </td>
                   </tr>

                ))}
               
            </tbody>
        </table>
      
    </section>
    </div>
  )
}

export default EmployeeView
