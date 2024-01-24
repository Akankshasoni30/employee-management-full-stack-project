import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate=useNavigate();

    const[login,setLogin]=useState({

       
        email :'',
      password:''
        
    });

    const[employee,setEmployee]=useState({
    
        firstName:'',
        lastName : '',
        eemail :'',
        role:'',
        epassword:'',
        dept_id:''
    })
    const {firstName,lastName,eemail,role,epassword,dept_id}=employee;
   const {email,password}=login;
    const handleInputChange=(e)=>{
        setLogin({...login,[e.target.name] : e.target.value});
    console.log(login);
    
    };
    const saveLogin =async(e) =>{
        e.preventDefault();

       // alert(email+password);
        const result = await axios.get(
            `http://localhost:8087/api/employee/${login.email}/${login.password}`
            ) .then((response) => {
                // Handle successful response
             // console.log(result);
              //setLogin(response.data);
              setEmployee(response.data);

              // Setting the ID in session storage
            sessionStorage.setItem('employeeId', response.data.id);
            

              const role= response.data.role;

              switch (role) {
                case 'Admin':
                    navigate("/home");
                  break;
                case 'manager':
                    navigate("/homemanager");
                  break;

                  case 'employee':
                    navigate("/homeemployee");
                    break;

                default:
                  alert("cant login.");
              }

              console.log(employee);
              })
              .catch((error) => {
                 //Handle error for this specific request
                alert("login falied invalid credentials");
            
                // You can also throw a custom error or perform other actions
              });
       // alert(id);
        
       // console.log("insideview");

        };

  return (
    <div >



<div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    Login
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={(e)=> saveLogin(e)}>
                            
                            <div className="form-group">
                                <label  htmlFor="email" className="form-control-label">EmailAddress</label>
                                <input type="email" className="form-control" id="email" name="email"  value={email}
           onChange={(e) => handleInputChange(e)}/>
                                
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">Password</label>
                                <input type="password" className="form-control" id="password"  name="password" value={password} 
           onChange={(e) => handleInputChange(e)}/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                               
                                <div class="col-lg-6 login-btm login-button">
                                    <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
         </div>
         </div>
  )
}

export default Login
