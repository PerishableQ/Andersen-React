import "../Card.scss";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addFavorite } from "../../../redux/reducers/favoritesSlice";

import { FavoriteSVG } from "./FavoriteSVG";
import { UnfavoriteSVG } from "./UnfavoriteSVG";

function FavoritesIcon(props) {
	const [favorite, setFavorite] = useState(props.isFavorite);
	const dispatch = useDispatch();

	function handleAddToFavorite(event) {
		event.preventDefault();
		setFavorite(!favorite);
		dispatch(addFavorite(props.card));
	}

	return (
		<div className="card-item__favorite-icon" onClick={handleAddToFavorite}>
			{favorite ? <FavoriteSVG /> : <UnfavoriteSVG />}
		</div>
	);
}

export default FavoritesIcon;
