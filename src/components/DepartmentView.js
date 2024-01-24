import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa"
import { Link } from 'react-router-dom'
import Search from '../common/Search';
import NavBar from './NavBar';

const DepartmentView = () => {
    const [departments,setdepartment]= useState([]);
   const[search,setSearch]=useState("");

    useEffect(() => {
		loaddepartment();
	}, []);

    const loaddepartment=async()=>{
        const result= await axios.get("http://localhost:8087/api/department");
        setdepartment(result.data);
    };



   const handleDelete =async(id)=>{
        await axios.delete(`http://localhost:8087/api/department/${id}`);
        loaddepartment();
   };



  return (
    <div>
        <NavBar/>
   
    <section >
        <Search  search={search}
        setSearch={setSearch}
        />
       
      
        <table className='table table-bordered table-hover shadow '>
            <thead>
                <tr className='text-center'>
                    <th>department id</th>
                    <th>Department NAME</th>
                   
                    <th colSpan="2">ACTION</th>
                   
                </tr>
            </thead>
            <tbody className='text-center'>
                {departments.filter((st)=>
                st.dept_name.toLowerCase().includes(search)).map((department,index)=>(
                       <tr key={department.dept_id}>
                        <td>{department.dept_id}</td>
                       <td>{department.dept_name} </td>
                       
                       
                       <td className='mx-2'>
                       <Link  to={`/edit-department/${department.dept_id}`} className='btn btn-warning'>
                       <FaEdit />
                        </Link> </td>


                       <td className='mx-2'>
                       <button className='btn btn-danger'
                       onClick= {()=> handleDelete(department.dept_id)}
                       
                       
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

export default DepartmentView
