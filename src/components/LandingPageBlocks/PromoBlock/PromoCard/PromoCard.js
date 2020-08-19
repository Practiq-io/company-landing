import React from "react";
import "./PromoCard.css";

const PromoCard = props => {

	const cardBodyDelay = props.cardBodyAnimation.delay ? props.cardBodyAnimation.delay : null;
	const cardBodyAosName = props.cardBodyAnimation.name ? props.cardBodyAnimation.name : null;
	const cardBodyDuration = props.cardBodyAnimation.duration ? props.cardBodyAnimation.duration : null;

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
				data-aos-anchor-placement="center-center"
				className="pc-title"
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
				data-aos-anchor-placement="center-center"
				className="pc-subtitle"
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
				data-aos-anchor-placement="center-center"
				className="pc-text-body"
			>
				<p>{props.textBody}</p>
			</div>
		);
	}

	return (
		<div
			data-aos-anchor-placement="bottom-bottom"
			data-aos={cardBodyAosName}
			data-aos-duration={cardBodyDuration}
			data-aos-delay={cardBodyDelay}
			className="promo-card-body"
		>
			<div className="promo-card-img-box">
				<div className="pc-img">
					<img src={props.imgPath} alt=""/>
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
