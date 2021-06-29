import "./Card.css";
import AddedToFavorite from "./FavoriteIcon/AddedToFavorite";
import NotInFavorite from "./FavoriteIcon/NotInFavorite";

function Card(props) {
	return (
		<div className="info__card-item card-item">
			<div className="card-item__img">
				<img src={props.img} alt="" />
			</div>
			<div className="card-item__content-wrapper">
				<h3 className="card-item__title">{props.title}</h3>
				<p className="card-item__year">{props.year}</p>
			</div>
			{props.isFavorite ? <AddedToFavorite /> : <NotInFavorite />}
		</div>
	);
}

export default Card;
