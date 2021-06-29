import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import SearchBar from "./SearchBar/SearchBar";

function HomePage(props) {
	const API_KEY = "bf9e6e6bb4e6650d7d3bb59d1cbaa3b7";
	const BASE_URL = "https://api.themoviedb.org/3/";
	const BASE_IMG_URL = "https://image.tmdb.org/t/p/w342";

	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		const popularMoviesUrl = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1"`;
		
        fetch(popularMoviesUrl)
			.then(response => response.json())
			.then(data => setData(data.results));
	}, []);

    console.log(data);

	return (
		<section className="info section">
			<div className="vs-container">
				<SearchBar />

				<ul className="info__card-container">
					{data.map(card => {
						return (
							<li className="info__card-item-wrapper" key={card.id}>
								<Link to="cardinfo">
									<Card
										img={BASE_IMG_URL + card.poster_path}
										title={card.original_title}
										year={card.release_date === undefined ? 'No year provided' : card.release_date}
										isFavorite={false}
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default HomePage;
