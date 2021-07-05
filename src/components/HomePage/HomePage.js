import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addFilm } from "../../redux/reducers/filmsSlice";

import Card from "../Card/Card";
import SearchBar from "./SearchBar/SearchBar";

import { API_KEY, BASE_URL, BASE_IMG_URL } from "../../consts/constsApi";

import "./HomePage.css";

function HomePage(props) {
	const [data, setData] = React.useState([]);
	const dispatch = useDispatch();

	React.useEffect(() => {
		const popularMoviesUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1"`;

		fetch(popularMoviesUrl)
			.then(response => response.json())
			.then(data => setData(data.results));
	}, []);

    dispatch(addFilm(data));

	const getFavoritesDataFromLS =
		JSON.parse(localStorage.getItem("favorites")) === null
			? []
			: JSON.parse(localStorage.getItem("favorites"));

	const filmId = getFavoritesDataFromLS.map(film => {
		return film.id;
	});

	return (
		<section className="info section">
			<div className="vs-container">
				<SearchBar />

				<ul className="info__card-container">
					{data.map((card, index) => {
						return (
							<li className="info__card-item-wrapper" key={card.id}>
								<Link to={{ pathname: "/cardinfo", props: data[index] }}>
									<Card
										id={card.id}
										img={BASE_IMG_URL + card.poster_path}
										title={card.original_title}
										year={
											card.release_date === undefined
												? "Coming soon"
												: card.release_date
										}
										isFavorite={filmId.some(el => {
											return el === card.id;
										})}
										index={data[index]}
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default HomePage;
