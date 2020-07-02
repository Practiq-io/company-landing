import React, { Component } from "react";
import "./TaskType.css";
import TaskTypeSwitch from "./TaskTypeSwitch/TaskTypeSwitch";
import TaskTypeControls from "./TaskTypeControls/TaskTypeControls";
import TaskTypeOutput from "./TaskTypeOutput/TaskTypeOutput";

export default class TaskType extends Component {
	state = {
		programming: "frontend",
		taskType: "Landing page",
		taskData: {
			
		},
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

	componentDidMount(){
		if(this.props.containerState){
			console.log("I DID TRIGGER WITH CONTAINER STATE WITH === container state",this.props.containerState);
			
			let containerState = {...this.props.containerState}

			let programming = {...this.state.programming};
			let taskType = {...this.state.taskType};
			let taskData = {...this.state.taskData};
			let editData
			programming = containerState.programming;
			taskType = containerState.taskType;
			taskData = containerState.taskData;
			editData = containerState.taskData;

			this.setState({
				programming,
				taskType,
				taskData,
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
		
		
		console.log(this.state, "=== TASK TYPE STATE");
		
		
		
		return (
			<div className="wizard-modal_content-box">

				<div className="modal-position_wrapper">
					
					<div className="modal-title">
						<p>Select technical requirements</p>
					</div>

					<TaskTypeSwitch toggleFrontend={this.toggleFrontend} toggleBackend={this.toggleBackend} programming={this.state.programming} />

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
