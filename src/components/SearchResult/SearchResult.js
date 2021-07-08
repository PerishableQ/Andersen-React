import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import SearchBar from "../HomePage/SearchBar/SearchBar";

import { BASE_IMG_URL } from "../../consts/constsApi";

import "./SearchResult.scss";
import { fetchSearch } from "../../redux/middlewares/fetchSearch";

function SearchResult(props) {
	const dispatch = useDispatch();
	const filmsInFavorites = useSelector(state => state.favorites.favorites).map(el => el.id);
	const currentSearch = JSON.parse(sessionStorage.getItem("currentSearch"));
	const SearchResult = useSelector(state => state.search.searchResult);

	React.useEffect(() => {
		dispatch(fetchSearch(currentSearch));
	}, [dispatch, currentSearch]);

	return (
		<section className="search-result section">
			<div className="vs-container">
				<SearchBar />

				<h2 className="search-result__title title">Search result for: {currentSearch}</h2>

				<ul className="info__card-container">
					{SearchResult.map(card => {
						return (
							<li className="info__card-item-wrapper" key={card.id}>
								<Link to={`/cardinfo/${card.id}`}>
									<Card
										id={card.id}
										img={BASE_IMG_URL + card.poster_path}
										title={card.original_title}
										year={card.release_date}
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

export default SearchResult;
