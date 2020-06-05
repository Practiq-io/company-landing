import React from "react";
import "./ServicesCard.css";
import buttonRightArrow from "./ServicesCardImg/rightarrow.png";

const ServicesCard = (props) => {
	return (
		<div className="servicesCardBody">
			<div className="servicesCardImgbox">
				<img
					className="servicesCardImg"
					src={props.imgPath}
					alt="service icon"
				/>
			</div>

			<div className="cardStructure">
				<div className="cardInfoBox">
					<div className="servicesCardUpperBox">
						<p className="servicesCardTitle">{props.title}</p>
						<p className="servicesCardSubTitle">{props.subTitle}</p>
					</div>

					<div className="servicesCardLowerBox">
						<p className="servicesCardExample">Example:</p>
						<p className="servicesCardTextBody">{props.textBody}</p>
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
};

export default ServicesCard;
