import React, { Component } from "react";
import './AboutCompany.css';

export default class AboutCompany extends Component {
	render() {

        const {back, next, toggleWizard} = this.props;

		return (
			<div className="about-company_frame">

				<div className="modal-position_wrapper">

					<div className="modal-title">
						<p>Tell us about your company</p>
					</div>

					<div className="modal-content_box">

                    </div>
				</div>

				<div className="wizard-button_box">

					<div onClick={toggleWizard} className="wizard_button wizard-back_button">
						<p>Back</p>
					</div>

					<div onClick={next} className="wizard_button wizard-next_button">
						<p>Next</p>
					</div>

				</div>

			</div>
		);
	}
}
