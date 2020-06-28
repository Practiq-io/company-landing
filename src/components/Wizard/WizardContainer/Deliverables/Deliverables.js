import React, { Component } from "react";
import "./Deliverables.css";

export default class Deliverables extends Component {
	state = {
		
	};

	
	render() {
		const { prevStep } = this.props;
		
		return (
			<div className="wizard-modal_content-box">

				<div className="modal-position_wrapper">

					<div className="modal-title">
						<p>Quality and deliverables</p>
					</div>
					

				</div>

				<div className="wizard-button_box">
					<div onClick={prevStep} className="wizard_button wizard-back_button">
						<p>Back</p>
					</div>

					<div className="wizard_button wizard-next_button">
						<p>Next</p>
					</div>
				</div>

			</div>
		);
	}
}
