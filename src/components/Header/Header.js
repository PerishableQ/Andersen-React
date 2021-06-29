import "./Header.css";
import logo from "../../../src/assets/img/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  let a = false;
  return (
    <header className="header">
      <div className="vs-container">
        <div className="header__body">
          <nav>
            <Link to="/" className="header__logo logo">
              <img src={logo} alt="logo" />
            </Link>
          </nav>

          <nav className="header-menu">
            <ul className="header-menu__list">
              <li>
                {!a  ? (
                  <Link to="/favorites" className="header-menu__link">
                    Favorites
                  </Link>
                ) : null}
              </li>
              <li>
                <Link to="/searchhistory" className="header-menu__link">
                  Search History
                </Link>
              </li>
            </ul>
          </nav>

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
        </div>
      </div>
    </header>
  );
}

export default Header;
