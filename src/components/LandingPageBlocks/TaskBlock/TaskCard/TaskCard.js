import React from "react";
import "./TaskCard.css";

const TaskCard = (props) => {
	const delay = props.animation.delay ? props.animation.delay : 0;
	const aosClass = props.animation.cls ? props.animation.cls : "fade-left";
	const subtitleDelay = delay + 150;
	const bodyDelay = delay + 300;

	return (
		<div className="TC-Cardbox" data-aos={aosClass} data-aos-delay={delay}>
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
