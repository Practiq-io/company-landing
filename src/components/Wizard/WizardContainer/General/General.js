import React, { Component } from "react";
import "./General.css";

export default class General extends Component {
	state = {
		generalInformation: ""
	};

	onChangeHandler = (e) => {
		let generalInformation = this.state.generalInformation;
		generalInformation = e.target.value;
		this.setState({ generalInformation });
	};

	componentDidMount() {
		if (this.props.containerState) {
			this.setState(this.props.containerState);
		}
	}

	validation = () => {
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		let generalInformationError = "";

		if (this.state.generalInformation.length === 0) {
			generalInformationError = "* is Required";
		} else if (this.state.generalInformation.match(blockedRegex)) {
			generalInformationError = "* only string values";
		}

		if (generalInformationError) {
			this.setState({ generalInformationError });
			return false;
		}

		return true;
	};

	continue = () => {
		let isValid = this.validation();
		if (isValid) {
			const generalInformation = {
				generalInformation: {
					generalInformation: this.state.generalInformation,
				},
			};
			this.props.setWizardProperties(generalInformation);
			this.props.nextStep();
		}
	};

	render() {
		const { prevStep } = this.props;

		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>General project information</p>
					</div>

					<div className="general-information_box">
						<p className="modal-content_subtitle">
							Describe your project
							<span className="validation_error-message">
								{this.state.generalInformationError}
							</span>
						</p>
						<textarea
							onChange={this.onChangeHandler}
							style={{
								marginBottom: "24px",
								minHeight: "180px",
							}}
							type="text"
							defaultValue={this.state.generalInformation}
						/>
					</div>
				</div>

				<div className="wizard-button_box">
					<div onClick={prevStep} className="wizard_button wizard-back_button">
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
