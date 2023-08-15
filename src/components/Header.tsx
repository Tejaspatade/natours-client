import { Link } from "react-router-dom";

import Logo from "./Logo";
import User from "../features/User/UserNav";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
	// Consuming context from provider
	const { isLoggedIn } = useAuth();

	return (
		<header className="header">
			{/* Might add feature to filter out tours based on search */}
			{/* <nav className="nav nav--tours">
				<form className="nav__search">
					<button className="nav__search-btn">Search</button>
					<input
						type="text"
						placeholder="Search tours"
						className="nav__search-input"
					/>
				</form> 
			</nav> */}

			<Logo />

			<nav className="nav nav--user">
				{/* Check if user's logged in/not */}
				{isLoggedIn ? (
					<User />
				) : (
					<>
						<Link to="login" className="nav__el">
							Log in
						</Link>
						<Link to="signup" className="nav__el nav__el--cta">
							Sign up
						</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
