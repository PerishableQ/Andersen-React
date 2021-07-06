import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../Card/Card";
import SearchBar from "../HomePage/SearchBar/SearchBar";

import { BASE_IMG_URL } from "../../consts/constsApi";

import "./SearchResult.scss";

function SearchResult(props) {
	const searchResult = useSelector(state => state.search);

	return (
		<section className="search-result section">
			<div className="vs-container">
                <SearchBar />
                
				<h2 className="search-result__title title">Search result:</h2>

				<ul className="info__card-container">
					{searchResult.map(card => {
						return (
							<li className="info__card-item-wrapper" key={card.id}>
								<Link to={`/cardinfo/${card.id}`}>
									<Card
										id={card.id}
										img={BASE_IMG_URL + card.poster_path}
										title={card.original_title}
										year={card.release_date}
										isFavorite={false}
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
