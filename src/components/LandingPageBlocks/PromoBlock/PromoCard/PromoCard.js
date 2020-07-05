import React from "react";
import "./PromoCard.css";

const PromoCard = (props) => {
	let title = null;

	const delay = props.animation.delay ? props.animation.delay : 0;
	const aosClass = props.animation.class ? props.animation.class : "fade-left";
	const subtitleDelay = delay + 150;
	const bodyDelay = delay + 300;

	if (props.title) {
		title = (
			<div className="pc-title" data-aos={aosClass}
				data-aos-delay={delay}>
				<p>{props.title}</p>
			</div>
		);
	}

	let subTitle = null;
	if (props.subTitle) {
		subTitle = (
			<div className="pc-subtitle" data-aos={aosClass}
			data-aos-delay={subtitleDelay}>
				<p>{props.subTitle}</p>
			</div>
		);
	}

	let textBody = null;
	if (props.textBody) {
		textBody = (
			<div className="pc-text-body" data-aos={aosClass}
			data-aos-delay={bodyDelay}>
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div className="promo-card-body" data-aos={aosClass}>
			<div className="promo-card-img-box">
				<div className="pc-img">
					<img src={props.imgPath} alt="" />
				</div>
			</div>

			<div className="promo-card-text-box" data-aos={aosClass}
				data-aos-delay={delay}>
				{title}
				{subTitle}
				{textBody}
			</div>
		</div>
	);
};

export default PromoCard;
