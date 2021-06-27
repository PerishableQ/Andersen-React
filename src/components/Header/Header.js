import "./Header.css";
import logo from "../../../src/assets/img/logo.png";
import { Link, BrowserRouter } from "react-router-dom";

function Header(props) {
	return (
		<header className="header">
			<div className="vs-container">
				<div className="header__body">
					<nav>
						<a href="/" className="header__logo logo">
							<img src={logo} alt="logo" />
						</a>
					</nav>

					<nav className="header-menu">
						<ul className="header-menu__list">
							<li>
								<a href="/favorites" className="header-menu__link">
									Favorites
								</a>
							</li>
							<li>
								<a href="/searchhistory" className="header-menu__link">
									Search History
								</a>
							</li>
						</ul>
					</nav>

					<div className="header-account">
						<a href="/signin" className="header-account__btn">Sign In</a>
						{/* <Link to="/signin">Sing In</Link> */}
						<div className="header-account__spleeter"></div>
						<a href="/signup" className="header-account__btn">
							Sign Up
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
