import { useSelector } from "react-redux";

import "./SearchHistory.scss";

function SearchHistory(props) {
	const historyState = useSelector(state => state.history);

	return (
		<section className="search-history section">
			<div className="search-history vs-container">
				<h2 className="search-history__title title">Search history</h2>
				<ul className="search-history__list">
                    {historyState.map(el => {
                        return (
							<li key={Math.random()}>
								<div className="search-history__item">{el}</div>
							</li>
						);
                    })}
				</ul>
			</div>
		</section>
	);
}

export default SearchHistory;
