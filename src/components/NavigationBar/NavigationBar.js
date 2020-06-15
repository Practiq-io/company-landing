import React from "react";
import "./NavigationBar.css";
import logo from "../../image/logo.png";
import mobileLogo from "../../image/mobileLogo.png";


const NavigationBar = () => {


	return (
		<nav className="Navigation-Panel">

			<div className="wrapper">
				<div className="nav_wrapper">
					<div className="logo">
						<img src={logo} alt="practiq logo" className="logo-desktop-nav"/>
						<img src={mobileLogo} alt="practiq logo" className="logo-mobile-nav"/>
					</div>

					<div className="navigation">
						<div className="nav_desctop">
							<a href="#services-block_anchor">What we do</a>
							<a href="#how-it-works_anchor">How it works</a>
							<a href="#who-block_anchor">About us</a>
							<a href="#Start">Get started</a>
						</div>
						<span className="mobile_nav"></span>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
