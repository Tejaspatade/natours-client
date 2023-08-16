import axios from "axios";
import { useEffect, useState } from "react";

import { TourCardTypes } from "../../types/Tour.types";

import TourCard from "./TourCard";

const Tours = () => {
	// React State
	const [tours, setTours] = useState<TourCardTypes[] | null>(null);

	// Fetching all tours as a side-effect of mounting the component
	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_BACKEND_API_URL}api/v1/tours`)
			.then((response) => {
				// console.log(response.data.data.data);
				setTours(response.data.data.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="card-container">
			{tours?.map((tour: TourCardTypes) => (
				<TourCard tour={tour} key={tour._id} />
			))}
		</div>
	);
};

export default Tours;
