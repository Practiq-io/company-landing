import React, { Component } from "react";
import "./NavigationBar.css";
import logo from "../../image/logo.png";
import mobileLogo from "../../image/mobileLogo.png";
import { stack as Menu } from "react-burger-menu";

class NavigationBar extends Component {
	render() {
		return (
			<>
				<nav className="Navigation-Panel">
					<div className="mobile-test-wrap">
						<Menu
							burgerButtonClassName={"mobile-burger-menu"}
							width={"50vw"}
							right
							pageWrapId={"page-wrap"}
							outerContainerId={"mobile-navigation_body"}
						>
							<a className="menu-item" href="#services-block_anchor">
								What we do
							</a>
							<a className="menu-item" href="#how-it-works_anchor">
								How it works
							</a>
							<a className="menu-item" href="#who-block_anchor">
								About us
							</a>
							<a className="menu-item mobile-action-btn" href="#start">
								Get started
							</a>
						</Menu>
					</div>

					<div className="wrapper">
						<div className="nav_wrapper">
							<div className="logo">
								<img
									src={logo}
									alt="practiq logo"
									className="logo-desktop-nav"
								/>
								<img
									src={mobileLogo}
									alt="practiq logo"
									className="logo-mobile-nav"
								/>
							</div>

							<div className="navigation">
								<div className="nav_desctop">
									<a href="#services-block_anchor">What we do</a>
									<a href="#how-it-works_anchor">How it works</a>
									<a href="#who-block_anchor">About us</a>
									<a href="#start">Get started</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</>
		);
	}
}

export default NavigationBar;
