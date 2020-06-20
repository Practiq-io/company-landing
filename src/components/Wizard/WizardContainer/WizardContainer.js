import React, { Component } from "react";
import "./WizardContainer.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import Languages from "./Languages/Languages";

export class WizardContainer extends Component {
	
	state = {
		data : {
			companyName: "",
			email: "",
			website: ""
		}
		
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

	setWizardProperties = (properties) => {
		// Object.keys(properties).forEach((key) => {
		// 	this.setWizardProperty(key, properties[key]);
		// 	console.log("setting key=",key,"value=",properties[key]);
			
		// });
	
		this.setState({data:properties})
	};

	render() {

		
		
		const containerState = this.state
		const { back, next, step, toggleWizard } = this.props;
		console.log(containerState, "<<<<< i need to compare this state");
		switch (step) {
			case 1:
				return (
					<AboutCompany
						containerState={containerState.data}
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
					/>
				);
			case 3:
				return <h1>Task Type</h1>;
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
