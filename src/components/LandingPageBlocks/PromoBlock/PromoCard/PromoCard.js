import React from "react";
import "./PromoCard.css";

const PromoCard = props => {

	

	const delay = props.animation.delay ? props.animation.delay : "0";
	const aosName = props.animation.name ? props.animation.name : "fade-in";
	const duration = props.animation.duration ? props.animation.duration : "0";
	const trigger = props.animation.trigger ? props.animation.trigger : "bottom-bottom";

	let title = null;
	if (props.title) {
		title = (
			<div className="pc-title">
				<p>{props.title}</p>
			</div>
		);
	}

	let subTitle = null;
	if (props.subTitle) {
		subTitle = (
			<div className="pc-subtitle">
				<p>{props.subTitle}</p>
			</div>
		);
	}

	let textBody = null;
	if (props.textBody) {
		textBody = (
			<div className="pc-text-body">
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div
			// name, delay, duration, trigger
			data-aos-anchor-placement={trigger}
			data-aos={aosName}
			data-aos-duration={duration}
			data-aos-delay={delay}
			className="promo-card-body"
		>
			<div className="promo-card-img-box">
				<div className="pc-img">
					<img src={props.imgPath} alt="" />
				</div>
			</div>

			<div className="promo-card-text-box">
				{title}
				{subTitle}
				{textBody}
			</div>
		</div>
	);
};

export default PromoCard;
