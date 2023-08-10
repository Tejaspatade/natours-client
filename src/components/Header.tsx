import Logo from "./Logo";

const Header = () => {
	return (
		<header className="header">
			<nav className="nav nav--tours">
				<a href="#" className="nav__el">
					All tours
				</a>
				{/* Might add feature to filter out tours based on search */}
				{/* <form className="nav__search">
					<button className="nav__search-btn">Search</button>
					<input
						type="text"
						placeholder="Search tours"
						className="nav__search-input"
					/>
				</form> */}
			</nav>

			<Logo />

			<nav className="nav nav--user">
				{/* <a href="#" className="nav__el">
					My bookings
				</a>
				<a href="#" className="nav__el">
					<img
						src="user.jpg"
						alt="User photo"
						className="nav__user-img"
					/>
					<span>Jonas</span>
				</a> */}

				<button className="nav__el">Log in</button>
				<button className="nav__el nav__el--cta">Sign up</button>
			</nav>
		</header>
	);
};

export default Header;
