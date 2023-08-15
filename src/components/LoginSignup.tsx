import { Link } from "react-router-dom";

const LoginSignup = () => {
	return (
		<>
			<Link to="login" className="nav__el">
				Log in
			</Link>
			<Link to="signup" className="nav__el nav__el--cta">
				Sign up
			</Link>
		</>
	);
};

export default LoginSignup;
