import "./Header.css";
import logo from "../../../src/assets/img/logo.png";

function Header(props) {
	return (
		<header className="header">
			<div className="vs-container">
				<div className="header__body">
					<a href="#" className="header__logo logo">
						<img src={logo} alt="logo" />
					</a>

					<nav className="header-menu">
						<ul className="header-menu__list">
							<li>
								<a href="#" className="header-menu__link">
									Favorites
								</a>
							</li>
							<li>
								<a href="#" className="header-menu__link">
									Search History
								</a>
							</li>
						</ul>
					</nav>

					<div className="header-account">
						<button type="button" className="header-account__btn">
							Вход
						</button>
						<div className="header-account__spleeter"></div>
						<button type="button" className="header-account__btn">
							Регистрация
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
