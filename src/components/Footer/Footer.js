import { Link } from "react-router-dom";

import logo from "../../../src/assets/img/logo2.png";
import "./Footer.css";


function Footer(props) {
	return (
		<footer className="footer">
			<div className="vs-container">
				<div className="footer__body">
					<Link to="/" className="footer__logo logo">
						<img src={logo} alt="logo" />
					</Link>
					<div className="footer__copyright">All right reserved © 2021</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
