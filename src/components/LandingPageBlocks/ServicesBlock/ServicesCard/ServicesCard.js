// import React from "react";
// import "./ServicesCard.css";
// import buttonRightArrow from "./ServicesCardImg/rightarrow.png";

// const ServicesCard = (props) => {



//     let displayString = null;
//     if(props.textBody){
//         displayString = props.textBody.slice(0, 150);
// 	}
// 	console.log(displayString,"<== DISPLAYSTRING",displayString.length,"<== LENGTH");
	
//     // if(string.length > 150) {
//     //     let cut = string.slice(150, string.length);
//     //     console.log('\n',cut, "<===== im cuted string", cut.length, "<==== CUTED LENGTH\n");
//     // }
//     // console.log(props.textBody, "<== TEXT BODY STRING", props.textBody.length, "<===== TEXT LENGTH");
	
	



// 	return (
// 		<div className="servicesCardBody">
// 			<div className="servicesCardImgbox">
// 				<img
// 					className="servicesCardImg"
// 					src={props.imgPath}
// 					alt="service icon"
// 				/>
// 			</div>

// 			<div className="cardStructure">
// 				<div className="cardInfoBox">
// 					<div className="servicesCardUpperBox">
// 						<p className="servicesCardTitle">{props.title}</p>
// 						<p className="servicesCardSubTitle">{props.subTitle}</p>
// 					</div>

// 					<div className="servicesCardLowerBox">
// 						<p className="servicesCardExample">Example:</p>
// 						<p className="servicesCardTextBody">{props.textBody}</p>
// 					</div>
// 				</div>

// 				<div className="servicesCardButton">
// 					<p>Get started</p>
// 					<img
// 						className="servicesCardButtonImg"
// 						src={buttonRightArrow}
// 						alt="action button"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ServicesCard;

import React, { Component } from "react";
import "./ServicesCard.css";
import buttonRightArrow from "./ServicesCardImg/rightarrow.png";


class ServicesCard extends Component {


	
	

	render(){

		let hideString, displayString, toggleMarkup
		displayString = this.props.textBody.slice(0, 150);

		if(this.props.textBody.length > 150){
			hideString = this.props.textBody.slice(150, this.props.textBody.length)
			toggleMarkup = (
				<span className="servicesCardMainSpan">
					<span id="servicesCardDots">...</span>
					<span id="moreText"></span>
					<span onClick={() => toggle()} id="toggleTextSpan"> More</span>
				</span>
			)
		}

		const toggle = () => {
			let dots = document.getElementById("servicesCardDots");
			let moreText = document.getElementById("moreText");
			moreText.innerHTML = hideString
			let spanToggle = document.getElementById("toggleTextSpan");

			if(dots.style.display === "none"){
				dots.style.display = "inline";
				spanToggle.innerHTML = " More";
				moreText.style.display = "none";
			} else {
				dots.style.display = "none";
				spanToggle.innerHTML = " Less";
				moreText.style.display = "inline";
			}
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
							<p className="servicesCardTextBody">{displayString}{hideString ? toggleMarkup : null}</p>
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
	
};

export default ServicesCard;
