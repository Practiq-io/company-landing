import React, { Component } from "react";
import "./Success.css";
import successIcon from "./SuccessImg/success-icon.svg";
import { Animated } from "react-animated-css";

export default class Success extends Component {
	state = {};

	render() {
		const { toggleWizard } = this.props;

		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="success_frame">
						<Animated
							animationIn="fadeIn"
							animationOut="fadeOut"
							isVisible={true}
						>
							<img className="success-icon" src={successIcon} alt="" />
						</Animated>
						<p className="success_title">Thank you for submitting your task!</p>

						<p className="success_subtitle">
							We will get in touch with you shortly - Practiq team
						</p>
					</div>
				</div>

				<div className="wizard-button_box">
					<div
						onClick={toggleWizard}
						className="wizard_button wizard-next_button"
					>
						<p>Complete</p>
					</div>
				</div>
			</div>
		);
	}
}
