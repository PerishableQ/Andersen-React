import "./HomePage.css";
import Card from "../Card/Card";
import {Link} from 'react-router-dom';
import SearchBar from "./SearchBar/SearchBar";

function HomePage(props) {
	return (
		<section className="info section">
			<div className="vs-container">
				<SearchBar />

				<ul className="info__card-container">
					<li className="info__card-item-wrapper">
						<Link to="cardinfo">
							<Card
								img="#"
								title="Заголовок карточки"
								year="2005"
								isFavorite={false}
							/>
						</Link>
					</li>
					<li className="info__card-item-wrapper">
						<Link to="cardinfo">
							<Card
								img="#"
								title="Заголовок карточки #2"
								year="2020"
								isFavorite={true}
							/>
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default HomePage;
