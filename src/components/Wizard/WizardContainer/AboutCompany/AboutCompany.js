import React, { Component } from "react";
import "./AboutCompany.css";

export default class AboutCompany extends Component {

	state = {};

	validation = () => {
		let companyNameError = "";
		let emailError = "";
		let websiteError = "";

		if (this.state.companyName) {
			if (this.state.companyName.length > 500) {
				companyNameError = "* too long string";
			}
		} else {
			companyNameError = "* is required";
		}

		if (this.state.email) {
			if (this.state.email.length > 500) {
				emailError = "* too long string";
			} else if (!this.state.email.includes("@")) {
				emailError = "* invalid email format";
			}
		} else {
			emailError = "* is required";
		}

		if (this.state.website) {
			if (this.state.website.length > 500) {
				websiteError = "* too long string";
			}
		}

		if (companyNameError || emailError || websiteError) {
			this.setState({ companyNameError, emailError, websiteError });
			return false;
		}
		return true;
	};

	continue = () => {
		const isValid = this.validation();
		if (isValid) {
			this.props.setWizardProperties({
				companyName: this.state.companyName,
				email: this.state.email,
				website: this.state.website,
			});
			this.props.nextStep();
		}
	};

	onChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value });
	};

	render() {
		
		const { companyNameError, emailError, websiteError } = this.state;
		const { toggleWizard } = this.props;

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
						<input
							onChange={this.onChangeHandler}
							type="text"
							name="companyName"
						/>
						<p>
							Email
							<span className="about-company_error-message">{emailError}</span>
						</p>
						<input onChange={this.onChangeHandler} type="text" name="email" />
						<p>
							Website (optional)
							<span className="about-company_error-message">
								{websiteError}
							</span>
						</p>
						<input onChange={this.onChangeHandler} type="text" name="website" />
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