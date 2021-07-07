import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "../Card/Card";
import SearchBar from "./SearchBar/SearchBar";

import { BASE_IMG_URL } from "../../consts/constsApi";
import { fetchPopularFilms } from "../../redux/middlewares/fetchPopularFilms";

import "./HomePage.scss";

function HomePage(props) {
	const dispatch = useDispatch();
	const storeData = useSelector(state => state.films.films);

	React.useEffect(() => {
		dispatch(fetchPopularFilms());
	}, [dispatch]);

	const filmsInFavorites = useSelector(state => state.favorites.favorites).map(el => el.id);

	return (
		<section className="info section">
			<div className="vs-container">
				<SearchBar />

				<ul className="info__card-container">
					{storeData.map(card => {
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
										isFavorite={filmsInFavorites.some(el => el === card.id)}
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
