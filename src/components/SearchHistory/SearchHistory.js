import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSearch } from "../../redux/middlewares/fetchSearch";

import "./SearchHistory.scss";

function SearchHistory(props) {
	const historyState = useSelector(state => state.history.history);
	const dispatch = useDispatch();

	function handleClick(event) {
		const searchQuery = event.target.textContent;
		dispatch(fetchSearch(searchQuery));
		sessionStorage.setItem("currentSearch", JSON.stringify(searchQuery));
	}

	return (
		<section className="search-history section">
			<div className="search-history vs-container">
				<h2 className="search-history__title title">Search history: </h2>
				<ul className="search-history__list" onClick={handleClick}>
					{historyState.map(el => {
						return (
							<Link to="/searchresult" key={Math.random().toString()}>
								<li>
									<div className="search-history__item">{el}</div>
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default SearchHistory;
