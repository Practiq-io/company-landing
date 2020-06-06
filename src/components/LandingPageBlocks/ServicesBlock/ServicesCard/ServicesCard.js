// import React, { Component } from "react";
// import "./ServicesCard.css";
// import buttonRightArrow from "./ServicesCardImg/rightarrow.png";

// class ServicesCard extends Component {

// 	render(){

// 		let hiddenString, displayString, toggleMarkup
// 		displayString = this.props.textBody.slice(0, 150);

// 		if(this.props.textBody.length > 150){
// 			hiddenString = this.props.textBody.slice(150, this.props.textBody.length)
// 			toggleMarkup = (
// 				<span className="servicesCardMainSpan">
// 					<span id="servicesCardDots">...</span>
// 					<span id="moreText"></span>
// 					<span onClick={() => toggle()} id="toggleTextSpan"> More</span>
// 				</span>
// 			)
// 		}

// 		const toggle = () => {
// 			let dots = document.getElementById("servicesCardDots");
// 			let moreText = document.getElementById("moreText");
// 			moreText.innerHTML = hiddenString
// 			let spanToggle = document.getElementById("toggleTextSpan");

// 			if(dots.style.display === "none"){
// 				dots.style.display = "inline";
// 				spanToggle.innerHTML = " More";
// 				moreText.style.display = "none";
// 			} else {
// 				dots.style.display = "none";
// 				spanToggle.innerHTML = " Less";
// 				moreText.style.display = "inline";
// 			}
// 		}

// 		return (
// 			<div className="servicesCardBody">
// 				<div className="servicesCardImgbox">
// 					<img
// 						className="servicesCardImg"
// 						src={this.props.imgPath}
// 						alt="service icon"
// 					/>
// 				</div>

// 				<div className="cardStructure">
// 					<div className="cardInfoBox">
// 						<div className="servicesCardUpperBox">
// 							<p className="servicesCardTitle">{this.props.title}</p>
// 							<p className="servicesCardSubTitle">{this.props.subTitle}</p>
// 						</div>

// 						<div className="servicesCardLowerBox">
// 							<p className="servicesCardExample">Example:</p>
// 							<p className="servicesCardTextBody">{displayString}{hiddenString ? toggleMarkup : null}</p>
// 						</div>
// 					</div>

// 					<div className="servicesCardButton">
// 						<p>Get started</p>
// 						<img
// 							className="servicesCardButtonImg"
// 							src={buttonRightArrow}
// 							alt="action button"
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// };

// export default ServicesCard;

import React, { Component } from "react";
import "./ServicesCard.css";
import buttonRightArrow from "./ServicesCardImg/rightarrow.png";

class ServicesCard extends Component {

	state = {
		show: false,
		string: this.props.textBody,
		hiddenString: false,
		displayedString: false
	}
	
	componentDidMount(){

		let cut = this.state.string.slice(150, this.state.string.length)
		let display = this.state.string.slice(0, 150);

		this.setState({hiddenString: cut});
		this.setState({displayedString: display})
	}

	tick = () => {
		// this.setState({show: true})
		// console.log("TRIGGERED");
		this.setState({show: !this.state.show})
		console.log("TRIGGERED");
	}

	render() {
		
		{
		console.log(this.state.hiddenString, "==== STATE CUT");
		console.log(this.state.displayedString, "==== STATE DISPLAY");
		}

		return (
			<div className="servicesCardBody">
				<div className="servicesCardImgbox">
					<img
						className="servicesCardImg"
						src={this.props.imgPath}
						alt="service icon"
					/>
				</div>

				<div className="cardStructure">
					<div className="cardInfoBox">
						<div className="servicesCardUpperBox">
							<p className="servicesCardTitle">{this.props.title}</p>
							<p className="servicesCardSubTitle">{this.props.subTitle}</p>
						</div>

						<div className="servicesCardLowerBox">
							<p className="servicesCardExample">Example:</p>
							<p className="servicesCardTextBody">
								{this.state.displayedString}
								<span className="servicesCardMainSpan"
									style = {{
										display: this.state.hiddenString ? "inline" : "none"
									}}
								>
									<span id="servicesCardDots">...</span>
									<span 
										style = {{
											display: this.state.show ? "inline" : "none"
										}}
										id="moreText">{this.state.hiddenString}
									</span>
									<span onClick={() => this.tick()} id="toggleTextSpan">
										More	
									</span>
								</span>
							</p>
						</div>
					</div>

					<div className="servicesCardButton">
						<p>Get started</p>
						<img
							className="servicesCardButtonImg"
							src={buttonRightArrow}
							alt="action button"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ServicesCard;
