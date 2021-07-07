import { useStoreAuth } from "../../hooks/useStoreAuth";

import FavoritesIcon from "./FavoriteIcon/FavoritesIcon";
import "./Card.scss";

function Card(props) {
	const isLoggedIn = useStoreAuth();

	return (
		<div className="info__card-item card-item" id={props.id}>
			<div className="card-item__img">
				<img src={props.img} alt="" />
			</div>
			<div className="card-item__content-wrapper">
				<h3 className="card-item__title">{props.title}</h3>
				<p className="card-item__year">{props.year}</p>
			</div>
			{isLoggedIn ? <FavoritesIcon card={props.card} isFavorite={props.isFavorite} /> : null}
		</div>
	);
}

export default Card;
