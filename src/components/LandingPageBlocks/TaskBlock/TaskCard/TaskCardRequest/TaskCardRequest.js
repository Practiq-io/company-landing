import React from "react";
import "./TaskCardRequest.css";
import Avatar from "../../../../../image/face.svg";

const TaskCardRequest = (props) => {
	const cardBodyDelay = props.cardBodyAnimation.delay ? props.cardBodyAnimation.delay : null;
	const cardBodyAosName = props.cardBodyAnimation.name ? props.cardBodyAnimation.name : null;
	const cardBodyDuration = props.cardBodyAnimation.duration ? props.cardBodyAnimation.duration : null;
	const cardAnimationTrigger = props.cardAnimationTrigger ? props.cardAnimationTrigger : null;

	return (
		<div 
			className="TCR-Cardbox"
			data-aos-anchor-placement="bottom-bottom"
			data-aos={cardBodyAosName}
			data-aos-duration={cardBodyDuration}
			data-aos-delay={cardBodyDelay}
		>
			<img className="TCR-avatar-img" src={Avatar} alt="" />

			<div className="TCR-body-frame">
				<div className="TCR-text-body">
					<p>
						Tell us what you want our
						<br className="tb-card-linebreak"/> developers to be
						<br className="tb-card-linebreak"/> able to do{" "}
					</p>
				</div>

				<div onClick={() => props.toggle()} className="TCR-Card-button">
					<p>Send request</p>
				</div>
				
			</div>
		</div>
	);
};

export default TaskCardRequest;
