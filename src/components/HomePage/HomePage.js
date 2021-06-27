import "./HomePage.css";
import Card from "../Card/Card";

function HomePage(props) {
	return (
		<section class="info section">
			<div class="vs-container">

				<div class="info-search">
					<div class="info-searh__input-wrapper">
						<input autocomplete="off" type="text" name="search" placeholder="Введите название" id="input_id"
							class="info-searh_input" />
						<button type="submit" class="btn">Искать</button>
					</div>
				</div>
				<div class="info-header">
					<h1 class="info__title title">Все категории</h1>
					<div class="info-navigation">
						<a href="#" class="info-navigation__link active">Все категории</a>
						<a href="#" class="info-navigation__link">Актеры</a>
						<a href="#" class="info-navigation__link">Эпизоды</a>
						<a href="#" class="info-navigation__link">Пункт 4</a>
						<a href="#" class="info-navigation__link">Пункт 5</a>
					</div>
				</div>

				<ul class="info__card-container">
					<li class="info__card-item-wrapper">
						<Card img="#" title="Заголовок карточки" year="2005" isFavorite={false} />
					</li>
					<li class="info__card-item-wrapper">
						<Card img="#" title="Заголовок карточки #2" year="2020" isFavorite={true} />
					</li>


				</ul>


			</div>
		</section>
	);
}

export default HomePage;