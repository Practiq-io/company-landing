import React, { Component } from "react";
import "./WizardContainer.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import Languages from "./Languages/Languages";
import TaskType from "./TaskType/TaskType";
import Deliverables from "./Deliverables/Deliverables";
import General from "./General/General";
import Timeline from "./Timeline/Timeline";
import Success from "./Success/Success";

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
						nextStep={next}
						toggleWizard={toggleWizard}
						setWizardProperties={this.setWizardProperties}
						containerState={containerState.data.aboutCompany}
					/>
				);
			case 2:
				return(
					 <Languages
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
						nextStep={next}
						setWizardProperties={this.setWizardProperties}
						containerState={containerState.data.specification}
					/>
				);
			case 4:
				return (
					<Deliverables
						prevStep={back}
						nextStep={next}
						setWizardProperties={this.setWizardProperties}
						containerState={containerState.data.taxonomy}
					/>
				);
			case 5:
				return (
					<General
						prevStep={back}
						nextStep={next}
						setWizardProperties={this.setWizardProperties}
						containerState={containerState.data.generalInformation}
					/>
				);
			case 6:
				return (
					<Timeline
						prevStep={back}
						nextStep={next}
						setWizardProperties={this.setWizardProperties}
						containerState={containerState.data.projectTimelines}
					/>
				);
			case 7:
				return (
					<Success
						toggleWizard={toggleWizard}
						containerState={containerState.data}
					/>
				);
			default:
				return <h1>An error has occurred in "WizardModal component" - step state "{step}"</h1>;
		}
	}
}

export default WizardContainer;