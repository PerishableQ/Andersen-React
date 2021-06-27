import Card from "../Card/Card";
import { Link } from "react-router-dom";

import "./Favorites.css";

function Favorites(props) {
	return (
		<section className="favorites section">
			<div className="vs-container">
				<h2 className="favorites__title">Favorites</h2>

				<ul className="info__card-container">
					<li className="info__card-item-wrapper">
						<Link to='cardinfo'>
							<Card
								img="#"
								title="Заголовок карточки"
								year="2005"
								isFavorite={false}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Favorites;
