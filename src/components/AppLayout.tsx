import { Route, Routes } from "react-router-dom";

import Tours from "../features/Tours/Tours";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Tour from "../features/Tours/Tour";

const AppLayout = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}>
					<Route index path="/" element={<Tours />} />
					<Route path="/tour/:slug" element={<Tour />} />
				</Route>
			</Routes>

			<Footer />
		</>
	);
};

export default AppLayout;
