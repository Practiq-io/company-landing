import React, { Component } from "react";
import "./WizardContainer.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import Languages from "./Languages/Languages";
import TaskType from "./TaskType/TaskType";

export class WizardContainer extends Component {
	
	state = {
		data : {}
		
	};

	setWizardProperties = (properties) => {
			 
		const key = Object.keys(properties)
		const value = Object.values(properties)

		let data = {...this.state.data}	
		data[[key[0]]] = value[0]

		this.setState({data})
	};

	render() {

		const containerState = this.state
		const { back, next, step, toggleWizard } = this.props;
	
		
		
		switch (step) {
			case 1:
				return (
					<AboutCompany
						containerState={containerState.data.aboutCompany}
						nextStep={next}
						toggleWizard={toggleWizard}
						setWizardProperties={this.setWizardProperties}
					/>
				);
			case 2:
				return(
					 <Languages
						toggleWizard={toggleWizard}
						prevStep={back}
						nextStep={next}
						setWizardProperties={this.setWizardProperties}
						containerState={containerState.data.taxonomy}
					/>
				);
			case 3:
				return (
					<TaskType
						prevStep={back}
					/>
				);
			case 4:
				return <h1>Deliverables</h1>;
			case 5:
				return <h1>General Info</h1>;
			case 6:
				return <h1>Timeline</h1>;
			case 7:
				return <h1>Thank you</h1>;
			default:
				return <h1>Returned Default</h1>;
		}
	}
}

export default WizardContainer;
