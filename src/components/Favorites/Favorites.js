import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Card from "../Card/Card";

import { BASE_IMG_URL } from "../../consts/constsApi";

import "./Favorites.scss";

function Favorites(props) {
	const [favoritesState] = useSelector(state => [state.favorites.favorites]);

	return (
		<section className="favorites section">
			<div className="vs-container">
				<h2 className="favorites__title">Favorites</h2>

				<ul className="info__card-container">
					{!favoritesState.length ? (
						<div className="favorites__add">Add something here</div>
					) : (
						favoritesState.map(card => {
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
											card={card}
											isFavorite={true}
										/>
									</Link>
								</li>
							);
						})
					)}
				</ul>
			</div>
		</section>
	);
}

export default Favorites;
