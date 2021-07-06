import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { fetchSearch } from "../../../redux/middlewares/fetchSearch.js";

function SearchBar(props) {
	const [state, setState] = React.useState("");
    const history = useHistory();
    const dispatch = useDispatch();

    function handleChange(event) {
        setState(event.target.value);
        event.preventDefault();
	}

    function handleFetch(event) {
		const searchQuery = state;
		dispatch(fetchSearch(searchQuery));
        history.push('/searchresult')
        
        event.preventDefault();
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
