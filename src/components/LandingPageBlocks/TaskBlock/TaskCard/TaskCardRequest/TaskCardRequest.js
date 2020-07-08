import React from "react";
import "./TaskCardRequest.css";
import Avatar from "../../../../../image/face.svg";

const TaskCardRequest = (props) => {
	const delay = props.animation.delay ? props.animation.delay : 0;
	const aosClass = props.animation.cls ? props.animation.cls : "fade-left";
	const subtitleDelay = delay + 150;
	const bodyDelay = delay + 300;

	return (
		<div className="TCR-Cardbox" data-aos={aosClass} data-aos-delay={delay}>
			<img className="TCR-avatar-img" src={Avatar} alt="" />

			<div className="TCR-body-frame">
				<div className="TCR-text-body">
					<p>
						Tell us what you want our
						<br className="tb-card-linebreak"/> developers to be
						<br className="tb-card-linebreak"/> able to do{" "}
					</p>
				</div>

				<div className="TCR-Card-button">
					<p>Send request</p>
				</div>
				
			</div>
		</div>
	);
};

export default TaskCardRequest;
