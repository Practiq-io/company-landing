import React, { Component } from "react";
import WizardContainer from "./WizardContainer/WizardContainer";
import "./WizardModal.css";
import close from "./WizardModalImg/close.png";
import WizardProgressBar from "./WizardProgressBar/WizardProgressBar";

export default class WizardModal extends Component {
	state = {
		step: 1
	};

	componentWillUnmount() {
		this.setState({ step: 1 });
	}

	nextStep = () => {
		this.setState({ step: this.state.step + 1 });
	};

	prevStep = () => {
		this.setState({ step: this.state.step - 1 });
	};

	render() {
		const { step } = this.state;
		const { toggle } = this.props;
		
		return (
			<>
				<div className="wizard-frame">
					<div className="wizard-modal">
						<div className="wizard-title_box">
							<p>Get started</p>
							<img onClick={toggle} src={close} alt="modal button close" />
						</div>

						<WizardProgressBar step={step} />

						{this.state.step < 7 ? (
							<div className="wizard-step-box">
								<p>step {step} of 6</p>
							</div>
						) : null}

						<div
							className="wizard-modal-component_output"
							ref={(divElement) => {
								this.divElement = divElement;
							}}
						>
							<WizardContainer
								toggleWizard={toggle}
								step={step}
								next={this.nextStep}
								back={this.prevStep}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}
