import React from "react";

import { useLocation } from "react-router-dom";

import { API_KEY, BASE_URL, BASE_IMG_URL } from "../../consts/constsApi";

import "./CardInfo.scss";

function CardInfo(props) {
    const [data, setData] = React.useState([]);
	const location = useLocation();
	const filmId = location.pathname.substr(10);

	React.useEffect(() => {
		const url = BASE_URL + `movie/${filmId}?api_key=${API_KEY}&language=en-US`;

		fetch(url)
			.then(response => response.json())
			.then(data => setData(data));
	}, [filmId]);

	return (
		<section className="card-inner section">
			<div className="vs-container">
				<div className="card-inner__wrapper">
					<div className="card-inner__img-wrapper">
						<img src={BASE_IMG_URL + data.poster_path} alt="#" />
					</div>

					<div className="card-inner__content-wrapper">
						<h2 className="card-inner__title">{data.title}</h2>
						<p className="card-inner__year">{data.release_date}</p>
						<p className="card-inner__desc">{data.overview}</p>
						<p className="card-inner__desc">Rating: {data.vote_average}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CardInfo;
