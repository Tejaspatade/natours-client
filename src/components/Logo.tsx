import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="header__logo">
			<Link to="/">
				<img src="/logo-green.png" alt="Natours logo" />
			</Link>
		</div>
	);
};

export default Logo;
