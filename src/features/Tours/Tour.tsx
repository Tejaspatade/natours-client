import { useParams } from "react-router-dom";

const Tour = () => {
	const { slug } = useParams();
	return <>{slug}</>;
};

export default Tour;
