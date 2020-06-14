import React, { Component } from "react";
import WizardContainer from "./WizardContainer/WizardContainer";
import "./WizardModal.css";
import close from './WizardModalImg/close.png';

export class WizardModal extends Component {
	state = {
		displayModal: true,
		step: 1,
	};

	nextStep = () => {
		this.setState({ step: this.state.step + 1 });
	};
	prevStep = () => {
		this.setState({ step: this.state.step - 1 });
	};

	render() {
		return (
			<>
				<div className="wizard-frame">

					<div className="wizard-backdrop"></div>

					<div className="wizard-modal">

                        <div className="wizard-title_box">
                            <p>Get started</p>
                            <img src={close} alt=""/>
                        </div>

                        <div className="wizard-step-progress-box">
                            <div className="wizard-progress-bar"></div>
                        </div>

                        <div className="wizard-step-box">
                            <p>step {this.state.step} out of 6</p>
                        </div>
                        
                        <div className="wizard-modal-component_output">
                            <WizardContainer
                                step={this.state.step}
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

export default WizardModal;
