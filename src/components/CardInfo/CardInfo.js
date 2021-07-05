import "./CardInfo.scss";

function CardInfo(props) {
	const data = props.location.props;

	if (data !== undefined) {
		sessionStorage.setItem(
			"stateCardInfo",
			JSON.stringify({
				poster_path: data.poster_path,
				title: data.title,
				release_date: data.release_date,
				overview: data.overview,
				vote_average: data.vote_average
			})
		);
	}

	const state = JSON.parse(sessionStorage.getItem("stateCardInfo"));

	return (
		<section className="card-inner section">
			<div className="vs-container">
				<div className="card-inner__wrapper">
					<div className="card-inner__img-wrapper">
						<img src={"https://image.tmdb.org/t/p/w342" + state.poster_path} alt="#" />
					</div>

					<div className="card-inner__content-wrapper">
						<h2 className="card-inner__title">{state.title}</h2>
						<p className="card-inner__year">{state.release_date}</p>
						<p className="card-inner__desc">{state.overview}</p>
						<p className="card-inner__desc">Rating: {state.vote_average}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CardInfo;
