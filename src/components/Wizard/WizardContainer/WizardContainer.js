import React, { Component } from 'react';
import './WizardContainer.css';
import AboutCompany from './AboutCompany/AboutCompany';

export class WizardContainer extends Component {

    state = {
       
        data : {

        }
    }

  

    render() {
        
        const {step, back, next} = this.props;
        
        switch(step) {
            case 1: 
                return (
                    <AboutCompany />
                )
            case 2:
                return (
                    <h1>Languages</h1>
                )
            case 3: 
                return (
                    <h1>Task Type</h1>
                )
            case 4: 
                return (
                    <h1>Deliverables</h1>
                )
            case 5: 
                return (
                    <h1>General Info</h1>
                )
            case 6: 
                return (
                    <h1>Timeline</h1>
                )
            case 7: 
                return (
                    <h1>Thank you</h1>
                )
            default:
                return (
                    <h1>Returned Default</h1>
                )
        }
    }
}

export default WizardContainer
