import React, { Component } from 'react'

export default class WizardProgressBar extends Component {

    render() {
        const {step} = this.props;
        let progressWidth;
        if(step === 1){
            progressWidth = "16.66%"
        } else if (step === 2){
            progressWidth = "33.32%"
        } else if (step === 3){
            progressWidth = "49.98%"
        } else if (step === 4){
            progressWidth = "66.64%"
        } else if (step === 5){
            progressWidth = "83.3%"
        } else if (step === 6){
            progressWidth = "99.96%"
        } else if (step === 7){
            progressWidth = "99.96%"
        }
        return (
            <div className="wizard-step-progress-box">
                <div 
                    className="wizard-progress-bar"
                    style={{
                        width: progressWidth
                    }}
                >
                </div>
            </div>
        )
    }
}


