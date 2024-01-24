import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";
import NavBarManager from './NavBarManager'

const EditEmployeeManager = () => {

    let navigate = useNavigate();

	const { id } = useParams();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
        role:"",
		dept_id: "",
	});
	const {
		firstName,
		lastName,
		email,
        role,
		dept_id,
	} = employee;


    useEffect(() => {
		loadEmployee();
        
	}, []);


	//useEffect(() => {
	//	loadEmployee();
	//}, []);

	const loadEmployee = async () => {
        
		const result = await axios.get(
		`http://localhost:8087/api/employee/${id}`
		) .then((response) => {
            // Handle successful response
            console.log(response.data);
            setEmployee(response.data);
          })
          .catch((error) => {
            // Handle error for this specific request
            alert("not proper response");
        
            // You can also throw a custom error or perform other actions
          });
   // alert(id);
	
   // console.log("insideview");
	};

   




	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};
	const updateEmployee = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8087/api/updateemployee/${id}`,
			employee
		);
		navigate("/view-employeesmanager");
	};


  return (
    <div>
        <NavBarManager/>

        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Employee</h2>
			<form onSubmit={(e) => updateEmployee(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
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
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
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
						htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
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
						htmlFor="role">
					Role
					</label>
					<input
						className="form-control col-sm-6"
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
						htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
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
						<Link
							to={"/view-employeesmanager"}
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

export default EditEmployeeManager
