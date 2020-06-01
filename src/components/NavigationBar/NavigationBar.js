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
						<img src={logo} alt="" />
						<img src={mobileLogo} alt="" />
					</div>

					<div className="navigation">
						<div className="nav_desctop">
							<a href="#OurWork">What we do</a>
							<a href="#HowItWorks">How it works</a>
							<a href="#AboutUs">About us</a>
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
