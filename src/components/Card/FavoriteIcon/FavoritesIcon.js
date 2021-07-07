import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../../redux/reducers/favoritesSlice";

import { FavoriteSVG } from "./FavoriteSVG";
import { UnfavoriteSVG } from "./UnfavoriteSVG";

import "../Card.scss";

function FavoritesIcon(props) {
	const favorite = props.isFavorite;
	const dispatch = useDispatch();

	const filmsInFavoritesList = useSelector(store => store.favorites.favorites).map(el => el.id);

	function handleAddToFavorite(event) {
		if (event.target !== event.currentTarget) {
			event.preventDefault();
		}

		if (filmsInFavoritesList.includes(props.card.id)) {
			return;
		} else {
			return dispatch(addFavorite(props.card));
		}
	}

	return (
		<div className="card-item__favorite-icon" onClick={handleAddToFavorite}>
			{favorite ? <FavoriteSVG /> : <UnfavoriteSVG />}
		</div>
	);
}

export default FavoritesIcon;
