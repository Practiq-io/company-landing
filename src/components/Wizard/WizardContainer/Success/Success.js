import React, { Component } from "react";
import "./Success.css";

export default class Success extends Component {
	state = {};

	render() {
		
		const { prevStep } = this.props;
		
		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>Thank you for submitting your task!</p>
					</div>

					
				</div>

				<div className="wizard-button_box">
					<div onClick={prevStep} className="wizard_button wizard-back_button">
						<p>Back</p>
					</div>

					<div className="wizard_button wizard-next_button">
						<p>Complete</p>
					</div>
				</div>
			</div>
		);
	}
}
