import React from "react";
import "./mobileNavigation.css";

const MobileNavigation = (props) => {
	return (
		<>
			<div
				className="burger-nav_backdrop"
				style={{
					display: props.display ? "block" : "none",
                }}
                onClick={props.toggle}
			></div>

			<div className="burger-menu_icon-box"
                onClick={props.toggle}
            >
				<div
					className="top-slash"
					style={{
						top: props.display ? "15px" : "5px",
						transform: props.display ? "rotate(-45deg)" : "rotate(0deg)",
					}}
				></div>
				<div
					className="middle-slash"
					style={{
						opacity: props.display ? "0" : "1",
					}}
				></div>
				<div className="bottom-slash"
                    style={{
						top: props.display ? "15px" : "25px",
						transform: props.display ? "rotate(45deg)" : "rotate(0deg)",
					}}
                ></div>
			</div>

			<div className="mobile-navigation_background"
                style={{
					right: props.display ? "0" : "-75vw"
				}}
            >
				<a href="#services-block_anchor">What we do</a>
				<a href="#how-it-works_anchor">How it works</a>
				<a href="#who-block_anchor">About us</a>
				<a className="mobile-action_button" href="#start">
					Get started
				</a>
			</div>
		</>
	);
};

export default MobileNavigation;
