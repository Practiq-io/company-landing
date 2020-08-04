import React, { Component } from "react";
import "./mobileNavigation.css";

class MobileNavigation extends Component {

	wrapperFunction = () => {
		this.props.toggle();
		this.props.toggleWizard();
	}

	render() {
		return (
			<>
				<div
					className="burger-nav_backdrop"
					style={{
						display: this.props.display ? "block" : "none",
					}}
					onClick={this.props.toggle}
				></div>
	
				<div className="burger-menu_icon-box"
					onClick={this.props.toggle}
				>
					<div
						className="top-slash"
						style={{
							top: this.props.display ? "15px" : "5px",
							transform: this.props.display ? "rotate(-45deg)" : "rotate(0deg)",
						}}
					></div>
					<div
						className="middle-slash"
						style={{
							opacity: this.props.display ? "0" : "1",
						}}
					></div>
					<div className="bottom-slash"
						style={{
							top: this.props.display ? "15px" : "25px",
							transform: this.props.display ? "rotate(45deg)" : "rotate(0deg)",
						}}
					></div>
				</div>
	
				<div className="mobile-navigation_background"
					style={{
						right: this.props.display ? "0" : "-85vw"
					}}
				>
					<a  onClick={this.props.toggle} href="#services-block_anchor">What we do</a>
					<a  onClick={this.props.toggle} href="#how-it-works_anchor">How it works</a>
					<a  onClick={this.props.toggle} href="#who-block_anchor">About us</a>
					<a  onClick={this.wrapperFunction} className="mobile-action_button" href="#start">
						Get started
					</a>
				</div>
			</>
		);
	}
	
	
};

export default MobileNavigation;
