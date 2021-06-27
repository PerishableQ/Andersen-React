import "./CardInfo.css";

function CardInfo(props) {
	return (
		<section className="card-inner section">
			<div className="vs-container">
				<div className="card-inner__wrapper">
					<div className="card-inner__img-wrapper">
						<img src="img/testgallery/4.jpg" alt="#" />
					</div>

					<div className="card-inner__content-wrapper">
						<h2 className="card-inner__title">Заголовок</h2>
						<p className="card-inner__year">Год</p>
						<p className="card-inner__desc">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
							ullam
						</p>
						<p className="card-inner__desc">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic non
							distinctio ipsa praesentium odit minima perspiciatis, culpa at ab quis,
							molestias incidunt dicta sequi. Sapiente fugiat iusto repellendus ea,
							voluptate sint quisquam temporibus! Ut debitis minus enim, odit ipsam
							ipsa, voluptate quaerat numquam non amet vero nesciunt, quidem earum
							perspiciatis iure neque molestiae dolor quisquam cumque. Et assumenda
							voluptatem laborum nostrum fuga delectus iusto, praesentium maxime
							repellat. Vitae qui quia officiis a! Inventore harum repudiandae error
							sit enim, repellat aliquid.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CardInfo;
