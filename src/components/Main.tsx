import axios from "axios";
import { useEffect, useState } from "react";

import { Tour } from "../types/Tour.types";
import TourCard from "../features/Tours/TourCard";

const Main = () => {
	// React State
	const [tours, setTours] = useState<Tour[] | null>(null);

	// Fetching all tours as a side-effect of mounting the component
	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_API_URL}tours`)
			.then((response) => {
				// console.log(response.data.data.data);
				setTours(response.data.data.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<main className="main">
			<div className="card-container">
				{tours?.map((tour: Tour) => (
					<TourCard tour={tour} />
				))}
			</div>
		</main>
	);
};

export default Main;
