import React from "react";
import "./TaskCard.css";

const TaskCard = (props) => {
	const {cardBodyAnimation} = props;
	const cardBodyDelay = cardBodyAnimation.delay ? cardBodyAnimation.delay : null;
	const cardBodyAosName = cardBodyAnimation.name ? cardBodyAnimation.name : null;
	const cardBodyDuration = cardBodyAnimation.duration ? cardBodyAnimation.duration : null;

	return (
		<div 
			className="TC-Cardbox"
			
			data-aos-anchor-placement="bottom-bottom"
			data-aos={cardBodyAosName}
			data-aos-duration={cardBodyDuration}
			data-aos-delay={cardBodyDelay}
			>
			<div className="TC-img-box">
				<img src={props.bgImgPath} alt="" />
			</div>
			<div className="TC-text-box">
				<div className="TC-img-frame">
					<img className="TC-logo-img" src={props.logoPath} alt="" />
				</div>

				<div className="TC-text-body">{props.textBody}</div>
			</div>
		</div>
	);
};

export default TaskCard;
