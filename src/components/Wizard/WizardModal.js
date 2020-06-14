import React, { Component } from "react";
import WizardContainer from "./WizardContainer/WizardContainer";
import "./WizardModal.css";
import close from './WizardModalImg/close.png';
import WizardProgressBar from "./WizardProgressBar/WizardProgressBar";

export class WizardModal extends Component {
	state = {
		step: 1
	};

	nextStep = () => {
		this.setState({ step: this.state.step + 1 });
	};
	prevStep = () => {
		this.setState({ step: this.state.step - 1 });
    };

    // componentDidMount(){
    //     console.log("IM TRIGGGGEREEEEED");
        
    //     this.setState({step: 1})
    // }
    
	render() {

        const {displayWizard,toggleWizard} = this.props;


		return (
			<>
                {displayWizard ? 
                
                <div className="wizard-frame">

					<div className="wizard-backdrop"></div>

					<div className="wizard-modal">

                        <div className="wizard-title_box">
                            <p>Get started</p>
                            <img onClick={toggleWizard} src={close} alt="modal button close"/>
                        </div>

                        <WizardProgressBar step={this.state.step}/>

                        <div className="wizard-step-box">
                            <p>step {this.state.step} of 6</p>
                        </div>
                        
                        <div className="wizard-modal-component_output">
                            <WizardContainer
                                toggleWizard={toggleWizard}
                                step={this.state.step}
                                next={this.nextStep}
                                back={this.prevStep}
                            />
                        </div>
					
					</div>

				</div> : null} 
			</>
		);
	}
}

export default WizardModal;
