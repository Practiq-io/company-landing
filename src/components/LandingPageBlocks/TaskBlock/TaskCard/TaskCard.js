import React from 'react';
import './TaskCard.css';

const TaskBlock = props => {
	return (
		<div className="card-content">
			<div className="center">
				<div className="card-img">
					<div className="card-bg">
					<img src={props.CardImgPath} alt=""/>
					</div>
					<div className="card-img-logo">
					<img src={props.CardLogoPath} alt=""/>
					</div>
			</div>

			<div className="card-text">
				<p>{props.CardTextPath}</p>
			</div>
			</div>

			
		</div>
	)
};

export default TaskBlock;