import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSearch } from "../../redux/middlewares/fetchSearch";

import "./SearchHistory.scss";

function SearchHistory(props) {
	const historyState = useSelector(state => state.history);
	const dispatch = useDispatch();

	return (
		<section className="search-history section">
			<div className="search-history vs-container">
				<h2 className="search-history__title title">Search history</h2>
				<ul className="search-history__list">
					{historyState.map(el => {
						return (
							<Link to="/searchresult">
								<li key={Math.random()}>
									<div
										className="search-history__item"
										onClick={dispatch(fetchSearch(el))}
									>
										{el}
									</div>
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
