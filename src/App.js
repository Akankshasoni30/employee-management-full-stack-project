import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from "./Home";
import './App.css';
import EmployeeView from "./components/EmployeeView";
import NavBar from "./components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee.js";
import EditEmployee from "./components/EditEmployee.js";
import EmployeeProfile from "./components/EmployeeProfile.js";
import DepartmentView from "./components/DepartmentView.js";
import AddDepartment from "./components/AddDepartment.js";
import EditDepartment from "./components/EditDepartment.js";
import NavBarManager from "./components/NavBarManager.js";
import HomeManager from "./HomeManager.js";
import EmployeeViewManager from "./components/EmployeeViewManager.js";
import AddEmployeeManager from "./components/AddEmployeeManager.js";
import EditEmployeeManager from "./components/EditEmployeeManager.js";
import EmployeeProfileManager from "./components/EmployeeProfileManager.js";
import Login from "./Login.js";
import HomeEmployee from "./HomeEmployee.js";

function App() {
  return (
    <main className="container mt-5">
       
       
       
      
       <Router>
       
      
        <Routes>
        <Route exact path="/homemanager"  element={<HomeManager />}> </Route>
        <Route exact path="/homeemployee"  element={<HomeEmployee />}> </Route>

          <Route exact path="/home"  element={<Home />}> </Route>
          <Route exact path="/view-employees"  element={<EmployeeView />}> </Route>
         < Route exact path="/view-employeesmanager"  element={<EmployeeViewManager />}> </Route>
          <Route exact path="/add-employees"  element={<AddEmployee />}> </Route>
          <Route exact path="/add-employeesmanager"  element={<AddEmployeeManager />}> </Route>
          <Route exact path="/edit-employee/:id"  element={<EditEmployee />}> </Route>
          <Route exact path="/edit-employeemanager/:id"  element={<EditEmployeeManager />}> </Route>
          <Route exact path="/view-departments"  element={<DepartmentView />}> </Route>
          <Route exact path="/add-department"  element={<AddDepartment />}> </Route>
          <Route exact path="/edit-department/:id"  element={<EditDepartment />}> </Route>
          <Route exact path="/"  element={<Login />}> </Route>

          <Route
						exact
						path="/employee-profile/:id"
						element={<EmployeeProfile />}></Route>
             <Route
						exact
						path="/employee-profilemanager/:id"
						element={<EmployeeProfileManager />}></Route>

         
        </Routes>
       

       </Router>
      
      
        
    </main>
  );
}

export default App;
