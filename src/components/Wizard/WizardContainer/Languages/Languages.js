import React, { Component } from 'react';
import './Languages.css';

export default class Languages extends Component {

    
    render() {

        const { toggleWizard, prevStep} = this.props;
        
        
        return (

            <div>

                <div className="languages-plug">
                    <p>hello</p>
                </div>

                <div className="wizard-button_box">
					<div
						onClick={prevStep}
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
        )
    }
}