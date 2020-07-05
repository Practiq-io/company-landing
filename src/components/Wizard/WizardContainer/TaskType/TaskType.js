import React, { Component } from "react";
import "./TaskType.css";
import TaskTypeSwitch from "./TaskTypeSwitch/TaskTypeSwitch";
import TaskTypeControls from "./TaskTypeControls/TaskTypeControls";
import TaskTypeOutput from "./TaskTypeOutput/TaskTypeOutput";

export default class TaskType extends Component {
	state = {
		programming: "backend",
		taskType: "",
		taskData: {},
		editData: {}
	};

	setTaskType = taskType => {
		this.setState({taskType: taskType})
	}

	attachFile = (name, taskKey) => {
		let key = taskKey
		let taskData = {...this.state.taskData} 
		key = {...this.state.taskData[key]}
		let attachedFiles = [...key.attachedFiles]
		if(attachedFiles.length < 5){
			attachedFiles.push(name);
			key.attachedFiles = attachedFiles;
			taskData[taskKey] = key
			this.setState({taskData});
		}
	}

	removeAttachedFile = (name, taskKey) => {
		let key = taskKey
		let taskData = {...this.state.taskData}
		key = {...this.state.taskData[key]};
        let attachedFiles = [...key.attachedFiles]
		let index = attachedFiles.indexOf(name);
        attachedFiles.splice(index, 1);
		key.attachedFiles = attachedFiles;
		taskData[taskKey] = key
        this.setState({taskData});
	}

	addApiInput = category => {	
		let taskData = {...this.state.taskData};
		let taskTypeState = {...taskData[category]};
		let apisFields = [...taskTypeState.apisFields];
		let apisFieldKeys = [...taskTypeState.apisFieldKeys];
		if(apisFieldKeys.length > 0){
			let newInput = apisFieldKeys.splice(0, 1);
			apisFields.push(newInput[0]);
			taskTypeState.apisFields = apisFields;
			taskTypeState.apisFieldKeys = apisFieldKeys;
			taskTypeState[newInput] = "";
			taskData[category] = taskTypeState
			this.setState({taskData})
		}
	}

	removeApiInput = (category, name) => {
		let taskData = {...this.state.taskData};
		let taskTypeState = {...taskData[category]};
		let apisFields = [...taskTypeState.apisFields];
		let apisFieldKeys = [...taskTypeState.apisFieldKeys];
		if(apisFields.length > 0){
			let index = apisFields.indexOf(name);
			let key = apisFields.splice(index, 1);
			apisFieldKeys.push(key[0]);
			delete taskTypeState[name];
			taskTypeState.apisFieldKeys = apisFieldKeys;
			taskTypeState.apisFields = apisFields;
			taskData[category] = taskTypeState;
			this.setState({taskData})
		}
	}

	componentDidMount(){
		if(this.props.containerState){
			let containerState = {...this.props.containerState}
			let programming = {...this.state.programming};
			let taskType = {...this.state.taskType};
			let taskData = {...this.state.taskData};
			let editData
			taskData = containerState.taskData;
			programming = containerState.programming;
			taskType = containerState.taskType;
			editData = containerState.taskData;
			this.setState({
				taskData,
				programming,
				taskType,
				editData
			})
		}
	}

	setTaskTypeState = (properties) => {
		const key = Object.keys(properties)
		const value = Object.values(properties)
		let taskData = {...this.state.taskData}
		taskData = {};
		taskData[[key[0]]] = value[0]
		this.setState({taskData})
	}

	toggleBackend = () => {
		if(this.state.programming !== "backend"){
			this.setState({programming:"backend"})
		}
	}

	toggleFrontend = () => {
		if(this.state.programming !== "frontend"){
			this.setState({programming:"frontend"})
		}
	}

	generalPurposeApiValidation = () => {
		let apiRequestError = "";
		let apiResponseError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData.generalApi;

		if (data.apiRequest) {
			if (data.apiRequest.length > 500) {
				apiRequestError = "* too long string";
			} else if (data.apiRequest.match(blockedRegex)){
				apiRequestError = "* only string values";
			}
		} 

		if (data.apiResponse) {
			if (data.apiResponse.length > 500) {
				apiResponseError = "* too long string";
			} else if (data.apiResponse.match(blockedRegex)){
				apiResponseError = "* only string values";
			}
		} 

		if (apiRequestError || apiResponseError) {
			this.setState({ apiRequestError, apiResponseError });
			return false;
		}
		
		return true;
	}

	apiConnectorAdapterValidation = () => {
		let apiRequestError = "";
		let apiResponseError = "";
		let documentationError ="";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData.connectorAdapter;

		if (data.apiRequest) {
			if (data.apiRequest.length > 500) {
				apiRequestError = "* too long string";
			} else if (data.apiRequest.match(blockedRegex)){
				apiRequestError = "* only string values";
			}
		} 

		if (data.apiResponse) {
			if (data.apiResponse.length > 500) {
				apiResponseError = "* too long string";
			} else if (data.apiResponse.match(blockedRegex)){
				apiResponseError = "* only string values";
			}
		} 

		if (data.documentation) {
			if (data.documentation.length > 500) {
				documentationError = "* too long string";
			} else if (data.documentation.match(blockedRegex)){
				documentationError = "* only string values";
			}
		} else {
			documentationError = "* is required";
		} 

		if (apiRequestError || apiResponseError || documentationError) {
			this.setState({ apiRequestError, apiResponseError, documentationError });
			return false;
		}
		
		return true;
	}

	longRunningProcessValidation = () => {
		let datasourceError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData.longRunningProcess;

		if (data.datasource) {
			if (data.datasource.length > 500) {
				datasourceError = "* too long string";
			} else if (data.datasource.match(blockedRegex)){
				datasourceError = "* only string values";
			}
		} else {
			datasourceError = "* is required";
		} 

		if (datasourceError) {
			this.setState({ datasourceError });
			return false;
		}
		
		return true;
	}

	customTaskValidation = category => {
		let taskDescriptionError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData[category];

		if (data.taskDescription) {
			if (data.taskDescription.length > 500) {
				taskDescriptionError = "* too long string";
			} else if (data.taskDescription.match(blockedRegex)){
				taskDescriptionError = "* only string values";
			}
		} else {
			taskDescriptionError = "* is required";
		} 

		if (taskDescriptionError) {
			this.setState({ taskDescriptionError });
			return false;
		}
		
		return true;
	}

	designValidation = category => {
		let designLinkError = "";
		let fieldError = "";
		let field2Error = "";
		let field3Error = "";
		let field4Error = "";
		let field5Error = "";
		const blockedRegex = /[\]!$%^&*()"{}|<>]/;
		const data = this.state.taskData[category];

		if (data.designLink) {
			if (data.designLink.length > 500) {
				designLinkError = "* too long string";
			} else if (data.designLink.match(blockedRegex)){
				designLinkError = "* only string values";
			}
		} else {
			designLinkError = "* is required";
		}
		if (data.field) {
			if (data.field.length > 500) {
				fieldError = " too long string";
			} else if (data.field.match(blockedRegex)){
				fieldError = " only string values";
			}
		} else if (data.field === "") {
			fieldError = " is required";
		}
		if (data.field2) {
			if (data.field2.length > 500) {
				field2Error = " too long string";
			} else if (data.field2.match(blockedRegex)){
				field2Error = " only string values";
			}
		} else if (data.field2 === "") {
			field2Error = " is required";
		}
		if (data.field3) {
			if (data.field3.length > 500) {
				field3Error = " too long string";
			} else if (data.field3.match(blockedRegex)){
				field3Error = " only string values";
			}
		} else if (data.field3 === "") {
			field3Error = " is required";
		}
		if (data.field4) {
			if (data.field4.length > 500) {
				field4Error = " too long string";
			} else if (data.field4.match(blockedRegex)){
				field4Error = " only string values";
			}
		} else if (data.field4 === "") {
			field4Error = " is required";
		}
		if (data.field5) {
			if (data.field5.length > 500) {
				field5Error = " too long string";
			} else if (data.field5.match(blockedRegex)){
				field5Error = " only string values";
			}
		} else if (data.field5 === "") {
			field5Error = " is required";
		}

		if (designLinkError || fieldError || field2Error || field3Error || field4Error || field5Error) {
			this.setState({ designLinkError, fieldError, field2Error, field3Error, field4Error, field5Error});
			return false;
		}
		return true;
	}

	validation = () => {
		if(this.state.taskData.generalApi){

			return this.generalPurposeApiValidation();

		} else if (this.state.taskData.connectorAdapter){

			return this.apiConnectorAdapterValidation();

		} else if (this.state.taskData.longRunningProcess){

			return this.longRunningProcessValidation();

		} else if (this.state.taskData.customBackendTask){

			return this.customTaskValidation("customBackendTask");

		} else if (this.state.taskData.landingPage){

			return this.designValidation("landingPage");
			
		} else if (this.state.taskData.singlePageApplication){

			return this.designValidation("singlePageApplication");
			
		} else if (this.state.taskData.frontendComponent){

			return this.designValidation("frontendComponent");
			
		} else if (this.state.taskData.customFrontendTask){
			
			return this.customTaskValidation("customFrontendTask");

		}
	}

	continue = () => {

		const isValid = this.validation();
		if(isValid){
			const specification = {
				specification: {
					taskType: this.state.taskType,
					programming: this.state.programming,
					taskData: this.state.taskData
				}
			}
			this.props.setWizardProperties(specification);
			this.props.nextStep();
		}
	}

	taskDataOnChangeHandler = key => e => {
		let taskData = {...this.state.taskData};
		taskData[key][e.target.name] = e.target.value;
		this.setState({taskData});
	}

	render() {
		const { prevStep, containerState } = this.props;
		return (
			<div className="wizard-modal_content-box">

				<div className="modal-position_wrapper">
					
					<div className="modal-title">
						<p>Select technical requirements</p>
					</div>

					<TaskTypeSwitch 
						toggleFrontend={this.toggleFrontend} 
						toggleBackend={this.toggleBackend} 
						programming={this.state.programming} 
					/>

					<TaskTypeControls 
						containerState={containerState}
						selectTask={this.setTaskType} 
						programming={this.state.programming} 
						taskType={this.state.taskType}
					/>

					<div className="task-type-output_frame">
						<TaskTypeOutput 
							outputOnChange={this.taskDataOnChangeHandler} 
							setTaskTypeState={this.setTaskTypeState} 
							taskTypeState={this.state}
							removeAttachedFile={this.removeAttachedFile}
							attachFile={this.attachFile}
							containerState={containerState}
							addApiInput={this.addApiInput}
							removeApiInput={this.removeApiInput}
						/>
					</div>

				</div>

				<div className="wizard-button_box">
					<div onClick={prevStep} className="wizard_button wizard-back_button">
						<p>Back</p>
					</div>

					<div onClick={this.continue} className="wizard_button wizard-next_button">
						<p>Next</p>
					</div>
				</div>
			</div>
		);
	}
}