import { Route, Routes } from "react-router-dom";

import Tours from "../features/Tours/Tours";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Tour from "../features/Tours/Tour";
import Login from "../features/Auth/Login";
import Signup from "../features/Auth/Signup";

const AppLayout = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}>
					<Route index path="/" element={<Tours />} />
					<Route index path="/login" element={<Login />} />
					<Route index path="/signup" element={<Signup />} />
					<Route path="/tour/:slug" element={<Tour />} />
				</Route>
			</Routes>

			<Footer />
		</>
	);
};

export default AppLayout;
