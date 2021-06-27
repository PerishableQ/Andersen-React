import "./SearchHistory.css";

function SearchHistory(props) {
	return (
		<section className="search-history section">
			<div className="search-history vs-container">
				<h2 className="search-history__title title">Search history</h2>
				<ul className="search-history__list">
					<li>
						<a href="#" className="search-history__item">
							Запрос 1
						</a>
					</li>
					<li>
						<a href="#" className="search-history__item">
							Запрос 1
						</a>
					</li>
					<li>
						<a href="#" className="search-history__item">
							Запрос 1
						</a>
					</li>
					<li>
						<a href="#" className="search-history__item">
							Запрос 1
						</a>
					</li>
					<li>
						<a href="#" className="search-history__item">
							Запрос 1
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default SearchHistory;
