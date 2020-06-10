import React from "react";
import "./Footer.css";
import footerLogo from "../../image/logo.png";

const Footer = () => {
	return (
		<footer className="footer-main">
			<div className="footer-wrapper">
				<div className="footer-logoch">
					<div className="content">
						<img src={footerLogo} alt="" />
						<p>© Copyright 2020 Practiq. All rights reserved.</p>
					</div>
				</div>

				<div className="footer-contact">
					<div className="general">
						<p>General</p>
						<a href="#">What we do</a>
						<a href="#">How it works</a>
						<a href="#">About us</a>
					</div>

					<div className="contacts">
						<p>Contacts</p>
						<a href="#">hello@practiq.com</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
