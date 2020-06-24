import React, { Component } from "react";
import "./WizardContainer.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import Languages from "./Languages/Languages";
import TaskType from "./TaskType/TaskType";

export class WizardContainer extends Component {
	
	state = {
		data : {}
		
	};


	// setWizardProperty = (name, value) => {
	// 	let data = { ...this.state };
		
	// 	console.log("DATA IN SETSTATE BEFORE ADDED VALUE", data,);
	// 	data[name] = value
		
	// 	console.log("I SET STATE WITH THIS FUCKING SHIT ======", data);
	// 	this.setState(
	// 		data
	// 	);
	// };

	// this.props.setWizardProperties({
	// 	companyName: this.state.companyName,
	// 	email: this.state.email,
	// 	website: this.state.website
	// });

	// setWizardProperties = (properties) => {
		
	// 	let data = {...this.state.data}	
	// 	Object.keys(properties).forEach(key => {
	// 		data[key] = properties[key]
	// 	}) 

	// 	this.setState({data})
	// };
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
		console.log(this.state, "I NEED TO SEE THIS AFTER NEXT");
		
		
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
