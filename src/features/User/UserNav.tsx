import { useAuth } from "../../hooks/useAuth";

const User = () => {
	// Consuming context from provider
	const {
		state: { user },
	} = useAuth();

	return (
		<>
			{/* Bookings TODO */}
			{/* <a href="#" className="nav__el">
				My bookings
			</a> */}
			<a href="#" className="nav__el">
				<img
					src={user?.photo}
					alt={`${user?.name} photo`}
					className="nav__user-img"
				/>
				<span>{user?.name}</span>
			</a>
		</>
	);
};

export default User;
