import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
	// Consuming context
	const { dispatch } = useAuth();

	// Router-DOM
	const navigate = useNavigate();

	// Controlled form elements
	const [email, setEmail] = useState("chris@example.com");
	const [password, setPass] = useState("test1234");

	// Handler functions
	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePass = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPass(e.target.value);
	};

	const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
		// Avoid page reloading
		e.preventDefault();

		try {
			// Send async request to backend & retrieve token
			const response = await axios.post(
				`${import.meta.env.VITE_BACKEND_API_URL}api/v1/users/log-in`,
				{
					email,
					password,
				}
			);

			// Dispatch logged in action to store in context
			// console.log(response.data.data.user, response.data.token);
			dispatch({
				type: "LOGIN_SUCCESS",
				payload: {
					user: response.data.data.user,
					token: response.data.token,
				},
			});

			// Navigate back to homepages
			navigate("/");
		} catch (err) {
			// Display Error occured during the request
			console.error(err);
		}
	};

	// Use toaster library for logged in/error message

	return (
		<main className="main">
			<div className="login-form">
				<h2
					className="heading-secondary ma-bt-lg"
					style={{
						color: "white",
						textAlign: "center",
						display: "flex",
						justifyContent: "center",
						padding: "12px",
					}}
				>
					Log into your account
				</h2>
				<form className="form">
					<div className="form__group">
						<label htmlFor="email" className="form__label">
							Email address
						</label>
						<input
							id="email"
							type="email"
							className="form__input"
							placeholder="you@example.com"
							value={email}
							onChange={handleEmail}
							required
						/>
					</div>
					<div className="form__group ma-bt-md">
						<label htmlFor="password" className="form__label">
							Password
						</label>
						<input
							id="password"
							type="password"
							className="form__input"
							placeholder="••••••••"
							value={password}
							onChange={handlePass}
							required
							minLength={8}
						/>
					</div>
					<div className="form__group">
						<button
							className="btn btn--green"
							onClick={handleSubmit}
						>
							Login
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Login;
