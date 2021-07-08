import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { fetchSearch } from "../../../redux/middlewares/fetchSearch.js";
import { addHistory } from "../../../redux/reducers/historySlice.js";

function SearchBar(props) {
	const [state, setState] = React.useState("");
	const history = useHistory();
	const dispatch = useDispatch();

	function handleChange(event) {
		event.preventDefault();
		setState(event.target.value);
	}

	function handleFetch(event) {
		event.preventDefault();

		const searchQuery = state;

		if (!searchQuery) {
			return;
		}

		dispatch(fetchSearch(searchQuery));
		dispatch(addHistory(searchQuery));
		sessionStorage.setItem("currentSearch", JSON.stringify(searchQuery));

		history.push("/searchresult");
	}

	return (
		<div className="info-search">
			<div className="info-searh__input-wrapper">
				<form onSubmit={handleFetch}>
					<input
						autoComplete="off"
						type="text"
						name="search"
						placeholder="Enter film title"
						id="input_id"
						className="info-searh_input"
						onChange={handleChange}
					/>
					<button type="submit" className="btn">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}

export default SearchBar;
