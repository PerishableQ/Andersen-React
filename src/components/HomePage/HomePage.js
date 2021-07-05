import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addFilm } from "../../redux/reducers/filmsSlice";

import Card from "../Card/Card";
import SearchBar from "./SearchBar/SearchBar";

import { API_KEY, BASE_URL, BASE_IMG_URL } from "../../consts/constsApi";

import "./HomePage.scss";

function HomePage(props) {
	const dispatch = useDispatch();
	const data = useSelector(state => state.films.films);

	React.useEffect(() => {
		const popularMoviesUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1"`;

		fetch(popularMoviesUrl)
			.then(response => response.json())
			.then(data => dispatch(addFilm(data.results)));
	}, [dispatch]);

	const filmsInFavoritesIds = useSelector(state => state.favorites.favorites).map(el => el.id);

	return (
		<section className="info section">
			<div className="vs-container">
				<SearchBar />

				<ul className="info__card-container">
					{data.map(card => {
						return (
							<li className="info__card-item-wrapper" key={card.id}>
								<Link to={`/cardinfo/${card.id}`}>
									<Card
										id={card.id}
										img={BASE_IMG_URL + card.poster_path}
										title={card.original_title}
										year={
											card.release_date === undefined
												? "Coming soon"
												: card.release_date
										}
										isFavorite={filmsInFavoritesIds.some(el => el === card.id)}
										card={card}
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
