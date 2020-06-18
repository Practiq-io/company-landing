import React, { Component } from "react";
import "./ServicesBlock.css";
import FrontEnd from "./FrontEnd/FrontEnd";
import BackEnd from "./BackEnd/BackEnd";

class ServicesBlock extends Component {
	state = {
		displayed: "backend",
		switched: false,
	};

	switchToBackEnd = () => {
		if (this.state.displayed !== "backend") {
			this.setState({ displayed: "backend", switched: false });
		}
	};

	switchToFrontEnd = () => {
		if (this.state.displayed !== "frontend") {
			this.setState({ displayed: "frontend", switched: true });
		}
	};

	render() {
        
		let carouselTypeOutput;
		if (this.state.displayed === "backend") {
			carouselTypeOutput = <BackEnd />;
		} else if (this.state.displayed === "frontend") {
			carouselTypeOutput = <FrontEnd />;
		}

		return (
			<section className="SB-Section" id="services-block_anchor">
				<div className="wrapper">

				
				<content className="upperServicesBox">
					<h2 className="servicesTitle">What we can build for you</h2>
					<div className="ui_mobile_dash"></div>
					<div className="servicesButtonBox">
						<p
							onClick={this.switchToFrontEnd}
							className="frontendButton"
							style={{
								color: this.state.switched ? "white" : "#171725"
							}}
						>
							Frontend
						</p>
						<p
							onClick={this.switchToBackEnd}
							className="backendButton"
							style={{
								color: this.state.switched ? "#171725" : "white"
							}}
						>
							Backend
						</p>

						<div
							className="buttonSwitch"
							style={{
								right: this.state.switched ? "143px" : "0"
							}}
						></div>
					</div>
				</content>

				<content className="lowerServicesBox">

                    {carouselTypeOutput}

                </content>
				</div>
			</section>
		);
	}
}

export default ServicesBlock;
