import React, { Component } from "react";
import "./AboutCompany.css";

export default class AboutCompany extends Component {
	state = {
		// files: []
	};

	componentWillMount() {
		const containerState = this.props.containerState;

		if (containerState) {
			this.setState({
				companyName: containerState.companyName,
				email: containerState.email,
				website: containerState.website,
				userName: containerState.userName,
			});
		}
	}

	validation = () => {
		let companyNameError = "";
		let emailError = "";
		let websiteError = "";
		let userNameError = "";

		const blockedRegex = /[\]!$%^&*()":{}|<>]/;

		if (this.state.companyName) {
			if (this.state.companyName.length > 500) {
				companyNameError = "* too long string";
			} else if (this.state.companyName.match(blockedRegex)) {
				companyNameError = "* only string values";
			}
		} else {
			companyNameError = "* is required";
		}

		if (this.state.userName) {
			if (this.state.userName.length > 500) {
				userNameError = "* too long string";
			} else if (this.state.userName.match(blockedRegex)) {
				userNameError = "* only string values";
			}
		} else {
			userNameError = "* is required";
		}

		if (this.state.email) {
			if (this.state.email.length > 500) {
				emailError = "* too long string";
			} else if (!this.state.email.includes("@")) {
				emailError = "* invalid email format";
			} else if (this.state.email.match(blockedRegex)) {
				emailError = "* only string values";
			}
		} else {
			emailError = "* is required";
		}

		if (this.state.website) {
			if (this.state.website.length > 500) {
				websiteError = "* too long string";
			} else if (this.state.website.match(blockedRegex)) {
				websiteError = "* only string values";
			}
		}

		if (companyNameError || emailError || websiteError || userNameError) {
			this.setState({
				companyNameError,
				emailError,
				websiteError,
				userNameError,
			});
			return false;
		}

		return true;
	};

	continue = () => {
		const isValid = this.validation();
		if (isValid) {
			const aboutCompany = {
				aboutCompany: {
					companyName: this.state.companyName,
					email: this.state.email,
					website: this.state.website,
					userName: this.state.userName,
				},
			};
			this.props.setWizardProperties(aboutCompany);
			this.props.nextStep();
		}
	};

	onChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	// fileOnChange = (e) => {
	// 	let files = [...this.state.files];
	// 	files.push(e.target.files[0])
	// 	this.setState({ files })
	// };

	render() {
		const {
			companyNameError,
			emailError,
			websiteError,
			userNameError,
		} = this.state;
		const { toggleWizard } = this.props;
		
		return (
			<div className="wizard-modal_content-box">
				{/* {
					this.state.files.map(kek => {
						return <div key={kek} className="poop"></div>
					})
				} */}
				<div className="modal-position_wrapper">
					{/* <form>
						<input
							onChange={(e) => this.fileOnChange(e)}
							className="test"
							type="file"
							name="file"
							multiple
						/>
					</form> */}

					<div className="modal-title">
						<p>Tell us about your company</p>
					</div>
					<div className="modal-content_box">
						<p className="modal-content_subtitle">
							User name
							<span className="validation_error-message">{userNameError}</span>
						</p>
						<input
							className="about-company_input"
							onChange={this.onChangeHandler}
							type="text"
							name="userName"
							autoComplete="off"
							defaultValue={this.state.userName}
						/>
						<p className="modal-content_subtitle">
							Company name
							<span className="validation_error-message">
								{companyNameError}
							</span>
						</p>
						<input
							className="about-company_input"
							onChange={this.onChangeHandler}
							type="text"
							name="companyName"
							autoComplete="off"
							defaultValue={this.state.companyName}
						/>
						<p className="modal-content_subtitle">
							Email
							<span className="validation_error-message">{emailError}</span>
						</p>
						<input
							className="about-company_input"
							onChange={this.onChangeHandler}
							type="text"
							name="email"
							defaultValue={this.state.email}
						/>
						<p className="modal-content_subtitle">
							Website (optional)
							<span className="validation_error-message">{websiteError}</span>
						</p>
						<input
							className="about-company_input"
							onChange={this.onChangeHandler}
							type="text"
							name="website"
							autoComplete="off"
							defaultValue={this.state.website}
						/>
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
