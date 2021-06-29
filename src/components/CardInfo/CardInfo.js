import "./CardInfo.css";

function CardInfo(props) {
	const filmData = props.location.props;
    
	return (
		<section className="card-inner section">
			<div className="vs-container">
				<div className="card-inner__wrapper">
					<div className="card-inner__img-wrapper">
						<img src={"https://image.tmdb.org/t/p/w342" + filmData.poster_path} alt="#" />
					</div>

					<div className="card-inner__content-wrapper">
						<h2 className="card-inner__title">{filmData.title}</h2>
						<p className="card-inner__year">{filmData.release_date}</p>
						<p className="card-inner__desc">{filmData.overview}</p>
						<p className="card-inner__desc">
							Rating: {filmData.vote_average}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CardInfo;
