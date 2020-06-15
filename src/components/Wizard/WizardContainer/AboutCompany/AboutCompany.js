import React, { Component } from "react";
import "./AboutCompany.css";

export default class AboutCompany extends Component {
	state = {};

	validation = () => {
		let companyNameError = "";
		let emailError = "";
		let websiteError = "";

		if (!this.props.stateForValidation.companyName) {
			companyNameError = "* is required";
		}
		if (!this.props.stateForValidation.email) {
			emailError = "* is required";
		} else if (!this.props.stateForValidation.email.includes("@")) {
			emailError = "* invalid email";
		}

		if (companyNameError || emailError) {
			this.setState({ companyNameError, emailError });
			return false;
		}

		return true;
	};

	continue = () => {
		const isValid = this.validation();
		if (isValid) {
			this.props.nextStep();
		}
	};

	render() {
		console.log(this.state.validationErrors);

		const { companyNameError, emailError, websiteError } = this.state;
		const { toggleWizard, onChange } = this.props;

		return (
			<div className="about-company_frame">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>Tell us about your company</p>
					</div>

					<div className="modal-content_box">
						<p>
							Company name
							<span className="about-company_error-message">
								{companyNameError}
							</span>
						</p>
						<input onChange={onChange} type="text" name="companyName" />
						<p>
							Email
							<span className="about-company_error-message">{emailError}</span>
						</p>
						<input onChange={onChange} type="text" name="email" />
						<p>
							Website (optional)
							<span className="about-company_error-message">
								{websiteError}
							</span>
						</p>
						<input onChange={onChange} type="text" name="website" />
					</div>
				</div>

				<div className="wizard-button_box">
					<div
						onClick={toggleWizard}
						className="wizard_button wizard-back_button"
					>
						<p>Back</p>
					</div>

					<div
						onClick={this.continue}
						className="wizard_button wizard-next_button"
					>
						<p>Next</p>
					</div>
				</div>
			</div>
		);
	}
}
