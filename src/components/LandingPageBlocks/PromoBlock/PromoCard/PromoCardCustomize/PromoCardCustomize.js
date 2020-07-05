import React from "react";
import "./PromoCardCustomize.css";
import addCard from "../../../../../image/yourOwn.svg";

const PromoCardCustomize = (props) => {
	const delay = props.animation.delay ? props.animation.delay : 0;
	const aosClass = props.animation.class ? props.animation.class : "fade-left";
	const subtitleDelay = delay + 150;
	const bodyDelay = delay + 300;

	let title = null;
	if (props.title) {
		title = (
			<div className="pc-Customize-title" data-aos={aosClass}
			data-aos-delay={delay}>
				<p>{props.title}</p>
			</div>
		);
	}

	let subTitle = null;
	if (props.subTitle) {
		subTitle = (
			<div className="pc-Customize-subtitle"> data-aos={aosClass}
			data-aos-delay={subtitleDelay}
				<p>{props.subTitle}</p>
			</div>
		);
	}

	let textBody = null;
	if (props.textBody) {
		textBody = (
			<div className="pc-Customize-text-body" data-aos={aosClass}
			data-aos-delay={bodyDelay}>
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div className="promo-card-Customize-body" data-aos={aosClass}>
			<div className="promo-card-Customize-img-box">
				<div className="pc-Customize-img">
					{/* <img src={props.imgPath} alt=""/> */}
					<img src={addCard} alt="" />
				</div>
			</div>

			<div className="promo-card-Customize-text-box" data-aos={aosClass}
				data-aos-delay={delay}>
				{title}
				{subTitle}
				{textBody}
			</div>
		</div>
	);
};

export default PromoCardCustomize;
