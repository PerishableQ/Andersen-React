import "./Footer.css";
import logo from "../../../src/assets/img/logo.png";

function Footer(props) {
	return (
		<footer className="footer">
			<div className="vs-container">
				<div className="footer__body">
					<a href="#" className="footer__logo logo">
						<img src={logo} alt="logo" />
					</a>
					<div className="footer__copyright">All right reserved © 2021</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
