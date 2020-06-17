import React, { Component } from "react";
import "./AboutCompany.css";

export default class AboutCompany extends Component {
	state = {};

	validation = () => {
		let companyNameError = "";
		let emailError = "";
		let websiteError = "";

		if (this.state.data.companyName) {
			if (this.state.data.companyName.length > 500) {
				companyNameError = "* too long string";
			}
		} else {
			companyNameError = "* is required";
		}

		if (this.state.data.email) {
			if (this.state.data.email.length > 500) {
				emailError = "* too long string";
			} else if (!this.state.data.email.includes("@")) {
				emailError = "* invalid email format";
			}
		} else {
			emailError = "* is required";
		}

		if (this.state.data.website) {
			if (this.state.data.website.length > 500) {
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
				companyName: this.state.data.companyName,
				email: this.state.data.email,
				website: this.state.data.website,
			});

			this.props.nextStep();
		}
	};

	onChangeHandler = (e) => {
		const data = { ...this.state.data };
		data[e.target.name] = e.target.value;
		this.setState({ data });
	};

	render() {
		console.log(this.state, "===triggered");
		const { companyNameError, emailError, websiteError } = this.state;
		const { toggleWizard, onChange, setWizardProperty } = this.props;
		const { stateForValidation } = this.props;

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
