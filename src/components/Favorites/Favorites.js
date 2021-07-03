import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";

import { addFavorite } from "../../redux/actions";
import { useStoreAuth } from "../../hooks/useStoreAuth";

import "./Favorites.css";

function Favorites(props) {
	const [favoritesState, token] = useSelector(state => [
		state.favorites.favorites,
		state.favorites.token
	]);

	const BASE_IMG_URL = "https://image.tmdb.org/t/p/w342";
	const isLoggedIn = useStoreAuth();

	const dispatch = useDispatch();

	if (isLoggedIn) {
		if (favoritesState.length === 0) {
			dispatch(addFavorite(JSON.parse(localStorage.getItem("favorites"))));
		}

		if (favoritesState.length !== 0) {
			localStorage.setItem("favorites", JSON.stringify(favoritesState));
		}

		localStorage.setItem("userToken", JSON.stringify(token));
	}

	const state = JSON.parse(localStorage.getItem("favorites"));

	const getFavoritesDataFromLS =
		JSON.parse(localStorage.getItem("favorites")) === null
			? []
			: JSON.parse(localStorage.getItem("favorites"));

	const filmId = getFavoritesDataFromLS.map(film => {
		return film.id;
	});

	return (
		<section className="favorites section">
			<div className="vs-container">
				<h2 className="favorites__title">Favorites</h2>

				<ul className="info__card-container">
					{state.map((card, index) => {
						return (
							<li className="info__card-item-wrapper" key={card.id}>
								<Link to={{ pathname: "/cardinfo", props: state[index] }}>
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
											return card.id === el;
										})}
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

export default Favorites;
