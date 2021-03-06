import React from "react";
import "./TaskCardRequest.css";
import Avatar from "../../../../../image/face.svg";

const TaskCardRequest = (props) => {
	return (
		<div className="TCR-Cardbox">
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
