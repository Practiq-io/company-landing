import React from "react";
import "./PromoCardCustomize.css";
import addCard from "../../../../../image/yourOwn.svg";

const PromoCardCustomize = (props) => {

	const delay = props.cardBodyAnimation.delay ? props.cardBodyAnimation.delay : null;
	const aosName = props.cardBodyAnimation.name ? props.cardBodyAnimation.name : null;
	const duration = props.cardBodyAnimation.duration ? props.cardBodyAnimation.duration : null;
	const cardAnimationTrigger = props.cardAnimationTrigger ? props.cardAnimationTrigger : null;

	const cardLogoDelay = props.cardLogoAnimation.delay ? props.cardLogoAnimation.delay : null;
	const cardLogoAosName = props.cardLogoAnimation.name ? props.cardLogoAnimation.name : null;
	const cardLogoDuration = props.cardLogoAnimation.duration ? props.cardLogoAnimation.duration : null;

	const cardTitleDelay = props.cardTitleAnimation.delay ? props.cardTitleAnimation.delay : null;
	const cardTitleAosName = props.cardTitleAnimation.name ? props.cardTitleAnimation.name : null;
	const cardTitleDuration = props.cardTitleAnimation.duration ? props.cardTitleAnimation.duration : null;

	const cardTextDelay = props.cardTextAnimation.delay ? props.cardTextAnimation.delay : null;
	const cardTextAosName = props.cardTextAnimation.name ? props.cardTextAnimation.name : null;
	const cardTextDuration = props.cardTextAnimation.duration ? props.cardTextAnimation.duration : null;

	let title = null;
	if (props.title) {
		title = (
			<div
				data-aos={cardTitleAosName}
				data-aos-duration={cardTitleDuration}
				data-aos-delay={cardTitleDelay}
				data-aos-anchor={cardAnimationTrigger}
				className="pc-Customize-title"
			>
				<p>{props.title}</p>
			</div>
		);
	}

	let subTitle = null;
	if (props.subTitle) {
		subTitle = (
			<div 
				data-aos={cardTitleAosName}
				data-aos-duration={cardTitleDuration}
				data-aos-delay={cardTitleDelay}
				data-aos-anchor={cardAnimationTrigger}
				className="pc-Customize-subtitle"
			>
				<p>{props.subTitle}</p>
			</div>
		);
	}

	let textBody = null;
	if (props.textBody) {
		textBody = (
			<div 
				data-aos={cardTextAosName}
				data-aos-duration={cardTextDuration}
				data-aos-delay={cardTextDelay}
				data-aos-anchor={cardAnimationTrigger}
				className="pc-Customize-text-body"
			>
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div
			data-aos-anchor={cardAnimationTrigger}
			data-aos={aosName}
			data-aos-duration={duration}
			data-aos-delay={delay}
			className="promo-card-Customize-body"
		>
			<div className="promo-card-Customize-img-box">
				<div 
					data-aos={cardLogoAosName}
					data-aos-duration={cardLogoDuration}
					data-aos-delay={cardLogoDelay}
					data-aos-anchor={cardAnimationTrigger}	
					className="pc-Customize-img"
				>
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
