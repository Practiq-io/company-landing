import React from "react";
import "./PromoCardCustomize.css";
import addCard from "../../../../../image/add.png";

const PromoCardCustomize = (props) => {
	let title = null;
	if (props.title) {
		title = (
			<div className="pc-Customize-title">
				<p>{props.title}</p>
			</div>
		);
	}

	let subTitle = null;
	if (props.subTitle) {
		subTitle = (
			<div className="pc-Customize-subtitle">
				<p>{props.subTitle}</p>
			</div>
		);
	}

	let textBody = null;
	if (props.textBody) {
		textBody = (
			<div className="pc-Customize-text-body">
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div className="promo-card-Customize-body">
			<div className="promo-card-Customize-img-box">
				<div className="pc-Customize-img">
					{/* <img src={props.imgPath} alt=""/> */}
					<img src={addCard} alt="" />
				</div>
			</div>

			<div className="promo-card-Customize-text-box">
				{title}
				{subTitle}
				{textBody}
			</div>
		</div>
	);
};

export default PromoCardCustomize;
