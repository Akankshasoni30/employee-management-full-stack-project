import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const EmployeeProfile = () => {
  const { id } = useParams();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
    role:"",
		dept_id: "",
	});

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:8087/api/employee/${id}`
		).then((response) => {
      // Handle successful response
      console.log(response.data);
      setEmployee(response.data);
    })
    .catch((error) => {
      // Handle error for this specific request
      alert("failed to fetch");
  
      // You can also throw a custom error or perform other actions
    });
		//setEmployee(result.data);
	};

	return (
    <div>

    <NavBar/>

  
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${employee.firstName} ${employee.lastName}`}
								</h5>
								 <div className="d-flex justify-content-center mb-2">
                               
                                <button
                                    type="button"
                                    className="btn btn-outline-warning ms-1">
                                    <a href="mailto:{ employee.email}">Send Email</a>
                                </button>
                            </div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.firstName}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.lastName}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.email}
										</p>
									</div>
								</div>
								<hr />
                <div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Role
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.role}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Department
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.dept_id}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
	);
  };

export default EmployeeProfile
