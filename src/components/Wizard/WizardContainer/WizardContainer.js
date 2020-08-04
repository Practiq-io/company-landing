import React, { Component } from "react";
import "./WizardContainer.css";
import AboutCompany from "./AboutCompany/AboutCompany";
import Languages from "./Languages/Languages";
import TaskType from "./TaskType/TaskType";
import Deliverables from "./Deliverables/Deliverables";
import General from "./General/General";
import Timeline from "./Timeline/Timeline";
import Success from "./Success/Success";
import { Animated } from "react-animated-css";

export class WizardContainer extends Component {
	state = {
		data: {}
	};

	prepareObject = () => {
		
		let data = {...this.state.data};
		let taxonomy = data.taxonomy.selectedTags.map(item => {
			return {skill: item[0], level: item[1]}
		})

		let specification = {}

		if(data.specification.taskType === "Single page application"){
			let taskData = data.specification.taskData.singlePageApplication;
			let links = [taskData.designLink];
			let attachments = taskData.attachedFiles;
			let apis = [];
			Object.keys(taskData).forEach(key => {
				if(key === "field" || key === "field2" || key === "field3" || key === "field4" || key === "field5"){
					apis.push({apiField: taskData[key]})
				}
			})
			specification.links = links;
			specification.attachments = attachments;
			specification.apis = apis
		}

		if(data.specification.taskType === "Landing page"){
			let taskData = data.specification.taskData.landingPage;
			let links = [taskData.designLink];
			let attachments = taskData.attachedFiles;
			let apis = [];
			Object.keys(taskData).forEach(key => {
				if(key === "field" || key === "field2" || key === "field3" || key === "field4" || key === "field5"){
					apis.push({apiField: taskData[key]})
				}
			})
			specification.links = links;
			specification.attachments = attachments;
			specification.apis = apis
		}

		if(data.specification.taskType === "Frontend component"){
			let taskData = data.specification.taskData.frontendComponent;
			let links = [taskData.designLink];
			let attachments = taskData.attachedFiles;
			let apis = [];
			Object.keys(taskData).forEach(key => {
				if(key === "field" || key === "field2" || key === "field3" || key === "field4" || key === "field5"){
					apis.push({apiField: taskData[key]})
				}
			})
			specification.links = links;
			specification.attachments = attachments;
			specification.apis = apis
		}

		if(data.specification.taskType === "Custom frontend task"){
			let taskData = data.specification.taskData.customFrontendTask;
			specification.customFrontendTask = taskData.taskDescription;
		}

		if(data.specification.taskType === "General purpose API"){
			let taskData = data.specification.taskData.generalApi;
			let apis = [];
			let requestResponse = {
				request: taskData.apiRequest,
				response: taskData.apiResponse
			};
			apis.push(requestResponse);
			specification.apis = apis;
		}

		if(data.specification.taskType === "API Connector/Adapter"){
			let taskData = data.specification.taskData.connectorAdapter;
			let apis = [];
			let requestResponse = {
				request: taskData.apiRequest,
				response: taskData.apiResponse,
				action: taskData.documentation
			};
			apis.push(requestResponse);
			specification.apis = apis;
		}

		if(data.specification.taskType === "Long running process"){
			let taskData = data.specification.taskData.longRunningProcess;
			specification.datasource = taskData.datasource;
		}

		if(data.specification.taskType === "Custom backend task"){
			let taskData = data.specification.taskData.customBackendTask;
			specification.customBackendTask = taskData.taskDescription;
		}

		let projectTimelines = [];

		if(data.projectTimelines.customTimeline){
			projectTimelines = data.projectTimelines.customTimeline
		} else {
			projectTimelines = data.projectTimelines.timeline
		}

		let backendData = {
			user: {
				email: data.aboutCompany.email,
				companyName: data.aboutCompany.companyName,
				website: data.aboutCompany.website
			},
			description: data.generalInformation.generalInformation,
			type: data.specification.taskType,
			requirements:{
				taxonomy: taxonomy,
				specification: specification
			},
			deliverables : {
				system: data.taxonomy.system,
				custom: data.taxonomy.customDeliverables,
				projectTimelines: projectTimelines
			}
		}
		console.log("Wizard data for backend :", backendData);
	}
	
	componentWillUnmount() {
		let data = { ...this.state.data };
		data = {};
		this.setState({ data });
		this.props.resetWizardTask();
	}

	setWizardProperties = (properties) => {
		const key = Object.keys(properties);
		const value = Object.values(properties);
		let data = { ...this.state.data };
		data[[key[0]]] = value[0];
		this.setState({ data });

		if(this.props.step === 7){
			this.prepareObject()
		}
	};

	render() {
		const containerState = this.state;
		const { back, next, step, toggleWizard, specificTask, programmingType } = this.props;
		
		return (
			<>
				{step === 1 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 1}
					>
						<AboutCompany
							nextStep={next}
							toggleWizard={toggleWizard}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.aboutCompany}
						/>
					</Animated>
				) : null}

				{step === 2 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 2}
					>
						<Languages
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.taxonomy}
						/>
					</Animated>
				) : null}

				{step === 3 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 3}
					>
						<TaskType
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.specification}
							specificTask={specificTask}
							programmingType={programmingType}
						/>
					</Animated>
				) : null}

				{step === 4 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 4}
					>
						<Deliverables
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.taxonomy}
						/>
					</Animated>
				) : null}

				{step === 5 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 5}
					>
						<General
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.generalInformation}
						/>
					</Animated>
				) : null}

				{step === 6 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 6}
					>
						<Timeline
							prevStep={back}
							nextStep={next}
							setWizardProperties={this.setWizardProperties}
							containerState={containerState.data.projectTimelines}
						/>
					</Animated>
				) : null}

				{step === 7 ? (
					<Animated
						animationIn="fadeIn"
						animationOut="fadeOut"
						isVisible={step === 7}
					>
						<Success
							backendData={this.prepareObject}
							toggleWizard={toggleWizard}
						/>
					</Animated>
				) : null}
			</>
		);
	}
}

export default WizardContainer;