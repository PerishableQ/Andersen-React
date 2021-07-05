import { useDispatch } from "react-redux";
import { addFavorite } from "../../../redux/reducers/favoritesSlice";

import { FavoriteSVG } from "./FavoriteSVG";
import { UnfavoriteSVG } from "./UnfavoriteSVG";

import "../Card.scss";

function FavoritesIcon(props) {
    const favorite = props.isFavorite;
	const dispatch = useDispatch();

	function handleAddToFavorite(event) {
		event.preventDefault();
		dispatch(addFavorite(props.card));
	}

	return (
		<div className="card-item__favorite-icon" onClick={handleAddToFavorite}>
			{favorite ? <FavoriteSVG /> : <UnfavoriteSVG />}
		</div>
	);
}

export default FavoritesIcon;
