import React, { Component } from "react";
import "./TaskType.css";

export default class TaskType extends Component {

	state = {};


	render() {
		
		
		const { prevStep } = this.props;


		
		return (
			<div className="about-company_frame">
				

				<div className="wizard-button_box">
					<div
						onClick={prevStep}
						className="wizard_button wizard-back_button"
					>
						<p>Back</p>
					</div>

					<div
						
						className="wizard_button wizard-next_button"
					>
						<p>Next</p>
					</div>
				</div>
			</div>
		);
	}
}