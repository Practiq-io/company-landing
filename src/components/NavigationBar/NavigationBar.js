import React, { Component } from "react";
import "./NavigationBar.css";
import logo from "../../image/logo.svg";
import mobileLogo from "../../image/mobileLogo.svg";
import MobileNavigation from "./mobileNavigation/mobileNavigation";

class NavigationBar extends Component {
	state = {
		mobileNavigation: false
	}

	toggleMobileMenu = () => {
		this.setState({mobileNavigation: !this.state.mobileNavigation})
	}
  
	render() {
		const {toggle} = this.props;
		return (
			<>
				<nav
					
				className="Navigation-Panel">
					<div className="mobile-navigation_display">
						<MobileNavigation
							display={this.state.mobileNavigation}
							toggle={this.toggleMobileMenu}
							toggleWizard={toggle}
						/>
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
									<a 
										onClick={toggle}
										href="#start"
									>
										Get started
									</a>
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
