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
        attachedFiles.push(name);
		key.attachedFiles = attachedFiles;
		taskData[taskKey] = key
        this.setState({taskData});
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

	continue = () => {	
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
							taskTypeDataKey={this.state.editData}
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