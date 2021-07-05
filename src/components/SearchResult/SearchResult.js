import Card from "../Card/Card";

import "./SearchResult.scss";

function SearchResult(props) {
	return (
		<section className="search-result section">
			<div className="vs-container">
				<h2 className="search-result__title title">Search result:</h2>

				<ul className="info__card-container">
					<li className="info__card-item-wrapper">
						<Card img="#" title="Заголовок карточки" year="2005" isFavorite={false} />
					</li>
					<li className="info__card-item-wrapper">
						<Card img="#" title="Заголовок карточки #2" year="2020" isFavorite={true} />
					</li>
				</ul>
			</div>
		</section>
	);
}

export default SearchResult;
