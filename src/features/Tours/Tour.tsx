import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Error from "../../components/Error";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

const Tour = () => {
	// Router-DOM
	const { slug } = useParams();

	// Consuming context from provider
	const { isLoggedIn, token } = useAuth();

	// Getting tour info as a side effect
	useEffect(() => {
		// Async Function for the request
		const getTour = async () => {
			try {
				// Header for JWT token
				const config = {
					headers: {
						Authorization: `Bearer ${token}`,
						withCredentials: true,
						mode: "no-cors",
					},
				};
				// Route= /tour/:slug
				const response = await axios.get(
					`${import.meta.env.VITE_BACKEND_API_URL}tour/${slug}`,
					config
				);
				console.log(response);
			} catch (err) {
				console.error(err);
			}
		};

		// Only request if user's logged in
		if (isLoggedIn) {
			console.log(token);
			getTour();
		}
	}, [isLoggedIn, token, slug]);

	// Conditional Render
	if (!isLoggedIn)
		return (
			<Error>
				<h2>Please Log In Before Accessing any tour's details</h2>
			</Error>
		);

	return <>{slug}</>;
};

export default Tour;
