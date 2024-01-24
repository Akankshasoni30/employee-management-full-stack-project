import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt,} from "react-icons/fa"
const Logout = () => {
    let navigate=useNavigate();
    const handleLogout = () => {
        // Clear the user ID from session storage
        sessionStorage.setItem('employeeId', null);
        navigate("/");
        // Optionally, you can remove the item from session storage
        // sessionStorage.removeItem('userId');
    
        // Add any additional logout logic, such as redirecting to the login page
        // For example, using React Router: history.push('/login');
      };
    
      return (
        <button onClick={handleLogout}>
        <FaSignOutAlt />
        </button>
      );
    };

export default Logout
