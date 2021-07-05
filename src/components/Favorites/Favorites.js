import React from "react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";

import { addFavorite } from "../../redux/reducers/favoritesSlice";
import { useStoreAuth } from "../../hooks/useStoreAuth";

import { API_KEY, BASE_URL, BASE_IMG_URL } from "../../consts/constsApi";


import "./Favorites.scss";

function Favorites(props) {
	const [favoritesState] = useSelector(state => [state.favorites.favorites]);
	const isLoggedIn = useStoreAuth();
	const dispatch = useDispatch();

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
					{favoritesState.map((card, index) => {
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
										isFavorite={true}
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
