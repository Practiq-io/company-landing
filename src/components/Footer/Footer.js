import React from "react";
import "./Footer.css";
import footerLogo from "../../image/logo.png";

const Footer = () => {
	return (
		<footer className="footer-main">
			<div className="footer-wrapper wrapper">
				<div className="footer-logoch">
					<div className="content">
						<img src={footerLogo} alt="" />
						<p>© Copyright 2020 Practiq. All rights reserved.</p>
					</div>
				</div>

				<div className="footer-contact">
					<div className="general">
						<p>General</p>
						<a href="#services-block_anchor">What we do</a>
						<a href="#how-it-works_anchor">How it works</a>
						<a href="#who-block_anchor">About us</a>
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
