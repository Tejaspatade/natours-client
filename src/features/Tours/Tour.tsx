import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Error from "../../components/Error";
import { useAuth } from "../../hooks/useAuth";

const Tour = () => {
	// Router-DOM
	const { slug } = useParams();

	// Consuming context from provider
	const { isLoggedIn, token } = useAuth();

	// Getting Tour Info as a side effect
	useEffect(() => {
		// api/tour/:slug
		if (isLoggedIn) console.log(token);
	}, [isLoggedIn, token]);

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
