import React from 'react'
import { Link } from 'react-router-dom'

import Logout from './Logout'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">Employee Management System</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">


          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/home"}>Home</Link>
          </li>
        
          
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/view-employees"}>Employee</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/add-employees"}> Add  New Employee</Link>
          </li>


          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/view-departments"}>Department</Link>
          </li>


          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={"/add-department"}> Add  New Department</Link>
          </li>
 </ul>
        <Logout/>
      
      </div>
    </div>
  </nav>
  )
}

export default NavBar
