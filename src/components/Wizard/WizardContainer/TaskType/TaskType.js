import React, { Component } from "react";
import "./TaskType.css";
import TaskTypeSwitch from "./TaskTypeSwitch/TaskTypeSwitch";
import TaskTypeControls from "./TaskTypeControls/TaskTypeControls";
import TaskTypeOutput from "./TaskTypeOutput/TaskTypeOutput";


export default class TaskType extends Component {
	state = {
		programming: "backend",
		taskType: "",
		taskData: {
		
		}
	};

	setTaskType = taskType => {
		this.setState({taskType: taskType})
	}

	setTaskTypeState = (properties) => {

		const key = Object.keys(properties)
		const value = Object.values(properties)

		let taskData = {...this.state.taskData}
		taskData[[key[0]]] = value[0]
	
		this.setState({taskData})
	}

	toggleLanguage = () => {
		if(this.state.programming === "backend"){
			this.setState({programming:"frontend"})
		} else if (this.state.programming === "frontend"){
			this.setState({programming:"backend"})
		}
	}

	continue = () => {
		
		const specification = {
			specification: {
				type: this.state.taskType,
				programming: this.state.programming,
				taskData: this.state.taskData
			}
		}
		this.props.setWizardProperties(specification);
		this.props.nextStep();
	}

	render() {
		const { prevStep, nextStep, setWizardProperties } = this.props;
		console.log(this.state, "Task Type State with OUTPUT KEY");
		

		return (
			<div className="wizard-modal_content-box">

				<div className="modal-position_wrapper">
					
					<div className="modal-title">
						<p>Select technical requirements</p>
					</div>

					<TaskTypeSwitch toggle={this.toggleLanguage} programming={this.state.programming} />
					<TaskTypeControls selectTask={this.setTaskType} programming={this.state.programming} taskType={this.state.taskType}/>

					<div className="task-type-output_frame">
						<TaskTypeOutput setTaskTypeState={this.setTaskTypeState} taskTypeState={this.state}/>
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
