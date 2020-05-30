import React from 'react';
import './TaskCardCostomize.css';
import face from "../../../../../image/face.png";

const TaskCardCostomizeBlock = props => {
	return (
		<div className="card-content card-costomize">
			<div className="smile-img">
				<img src={face} alt=""/>
			</div>

			<div className="card-text text-costomize">
				<p>Tell us what you want our developers to be able to do </p>
			</div>

			<div className="button">
				<button>Send request</button>
			</div>
		</div>
		)
};

export default TaskCardCostomizeBlock;