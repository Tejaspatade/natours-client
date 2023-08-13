import { useParams } from "react-router-dom";

const Tour = () => {
	// api/tour/:slug
	const { slug } = useParams();
	return <>{slug}</>;
};

export default Tour;
