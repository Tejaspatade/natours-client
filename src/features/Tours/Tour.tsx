import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Error from "../../components/Error";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import { TourInfo } from "../../types/Tour.types";

const Tour = () => {
	// Router-DOM
	const { slug } = useParams();

	// Consuming context from provider
	const { isLoggedIn, token } = useAuth();

	// Component state
	const [tour, setTour] = useState<TourInfo | null>(null);

	// Getting tour info as a side effect
	useEffect(() => {
		// Async Function for the request
		const getTour = async () => {
			try {
				// Header for JWT token
				const config = {
					headers: {
						Authorization: `Bearer ${token}`,
						withCredentials: true,
					},
				};

				// Route= /tour/:slug
				const response = await axios.get(
					`${
						import.meta.env.VITE_BACKEND_API_URL
					}api/v1/tours/tour/${slug}`,
					config
				);
				console.log(response.data.data.tour);
				setTour(response.data.data.tour);
			} catch (err) {
				console.error(err);
			}
		};

		// Only request if user is logged in
		if (isLoggedIn) {
			getTour();
		}
	}, [isLoggedIn, token, slug]);

	// Conditional Render
	if (!isLoggedIn)
		return (
			<Error>
				<h2>Please Log In Before Accessing any tour's details</h2>
			</Error>
		);

	return <>{slug}</>;
};

export default Tour;

/*
function TourDetails({ tour, user }) {
  const overviewBox = (title, content, icon) => (
    <div className="overview-box__detail">
      <svg className="heading-box__icon">
        <use xlinkHref={`/img/icons.svg#${icon}`} />
      </svg>
      <span className="heading-box__text">{content}</span>
    </div>
  );

  function ReviewCard(review) {
    // Implement the ReviewCard component JSX here
  }

  return (
    <div>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img
            className="header__hero-img"
            src={`/img/tours/${tour.imageCover}`}
            alt={tour.name}
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{`${tour.name} tour`}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/img/icons.svg#icon-clock" />
              </svg>
              <span className="heading-box__text">{`${tour.duration} days`}</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use xlinkHref="/img/icons.svg#icon-map-pin" />
              </svg>
              <span className="heading-box__text">{tour.startLocation.description}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-description">
        <div className="overview-box">
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            {overviewBox('Next date', date, 'calendar')}
            {overviewBox('Difficulty', tour.difficulty, 'trending-up')}
            {overviewBox('Participants', `${tour.maxGroupSize} people`, 'user')}
            {overviewBox('Rating', `${tour.ratingsAverage} / 5`, 'star')}
          </div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
            {tour.guides.map((guide) => (
              <div className="overview-box__detail" key={guide.id}>
                <img
                  className="overview-box__img"
                  src={`/img/users/${guide.photo}`}
                  alt={guide.name}
                />
                <span className="overview-box__text">{guide.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{`About ${tour.name} tour`}</h2>
          {tour.description.split('\n').map((p, index) => (
            <p key={index} className="description__text">{p}</p>
          ))}
        </div>
      </section>
      <section className="section-pictures">
        {tour.images.map((img, i) => (
          <div className="picture-box" key={i}>
            <img
              className={`picture-box__img--${i + 1}`}
              src={`/img/tours/${img}`}
              alt={`The Park Camper Tour ${i + 1}`}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
*/
