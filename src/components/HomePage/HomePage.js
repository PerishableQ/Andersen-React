import "./HomePage.css";
import Card from "../Card/Card";
import {Link} from 'react-router-dom';

function HomePage(props) {
	return (
		<section className="info section">
			<div className="vs-container">
				<div className="info-search">
					<div className="info-searh__input-wrapper">
						<input
							autocomplete="off"
							type="text"
							name="search"
							placeholder="Введите название"
							id="input_id"
							className="info-searh_input"
						/>
						<button type="submit" className="btn">
							Search
						</button>
					</div>
				</div>
				<div className="info-header">
					<h1 className="info__title title">Все категории</h1>
					<div className="info-navigation">
						<a href="#" className="info-navigation__link active">
							Все категории
						</a>
						<a href="#" className="info-navigation__link">
							Актеры
						</a>
						<a href="#" className="info-navigation__link">
							Эпизоды
						</a>
						<a href="#" className="info-navigation__link">
							Пункт 4
						</a>
						<a href="#" className="info-navigation__link">
							Пункт 5
						</a>
					</div>
				</div>

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
