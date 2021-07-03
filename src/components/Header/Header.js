import React from "react";

import { Link } from "react-router-dom";

import { useStoreAuth } from "../../hooks/useStoreAuth";

import logo from "../../../src/assets/img/logo2.png";
import "./Header.css";

function Header(props) {
	const isLoggedIn = useStoreAuth();
	console.log(isLoggedIn);

	return (
		<header className="header">
			<div className="vs-container">
				<div className="header__body">
					<nav>
						<Link to="/" className="header__logo logo">
							<img
								src={logo}
								alt="logo"
								style={{ width: "300px", height: "150px" }}
							/>
						</Link>
					</nav>

					<nav className="header-menu">
						<ul className="header-menu__list">
							{isLoggedIn ? (
								<React.Fragment>
									<li>
										<Link to="/favorites" className="header-menu__link">
											Favorites
										</Link>
									</li>

									<li>
										<Link to="/searchhistory" className="header-menu__link">
											Search History
										</Link>
									</li>
								</React.Fragment>
							) : null}
						</ul>
					</nav>
					{!isLoggedIn ? (
						<div className="header-account">
							<Link to="/signin" className="header-account__btn">
								Sign In
							</Link>
							{/* <Link to="/signin">Sing In</Link> */}
							<div className="header-account__spleeter"></div>
							<Link to="/signup" className="header-account__btn">
								Sign Up
							</Link>
						</div>
					) : (
						<button>Выйти</button>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
