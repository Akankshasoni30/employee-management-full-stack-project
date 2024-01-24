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
import NavBar from "./NavBar";

const EditDepartment = () => {
    let navigate = useNavigate();

	const { id } = useParams();

	const [department, setDepartment] = useState({
		dept_name: ""
	
	});
	const {
		dept_name
		
	} = department;


    useEffect(() => {
		loadDepartment();
        
	}, []);


	//useEffect(() => {
	//	loadEmployee();
	//}, []);

	const loadDepartment = async () => {
        
		const result = await axios.get(
		`http://localhost:8087/api/department/${id}`
		) .then((response) => {
            // Handle successful response
            console.log(response.data);
            setDepartment(response.data);
          })
          .catch((error) => {
            // Handle error for this specific request
            alert("no proper response");
        
            // You can also throw a custom error or perform other actions
          });
   // alert(id);
	
   // console.log("insideview");
	};

   




	const handleInputChange = (e) => {
		setDepartment({
			...department,
			[e.target.name]: e.target.value,
		});
	};
	const updateDepartment = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8087/api/update/${id}`,
			department
		);
		navigate("/view-departments");
	};


   


	return (

        <div>
            <NavBar/>
      
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit department</h2>
			<form onSubmit={(e) => updateDepartment(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="dept_name">
						Department Name
					</label>
					<input
						className="form-control col-sm-6"
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
						<Link
							to={"/view-departments"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
        </div>
	);
};

export default EditDepartment
