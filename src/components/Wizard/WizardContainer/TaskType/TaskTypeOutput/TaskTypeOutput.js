import React, { Component } from "react";
import "./TaskTypeOutput.css";
import GeneralPurposeApi from "./OutputComponents/GeneralPurposeAPI";
import ApiConnectorAdapter from "./OutputComponents/ApiConnectorAdapter";
import LongRunningProcess from "./OutputComponents/LongRunningProcess";
import SpaLandingpageComponent from "./OutputComponents/SpaLandingpageComponent";
import CustomTask from "./OutputComponents/CustomTask";

export default class TaskTypeOutput extends Component {
	render() {
		const {
			taskTypeState,
			setTaskTypeState,
			outputOnChange,
			taskTypeDataKey,
			removeAttachedFile,
			attachFile,
			containerState
		} = this.props;
		const taskType = taskTypeState.taskType;

		switch (taskType) {
			case "General purpose API":
				return (
					<GeneralPurposeApi
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			case "API Connector/Adapter":
				return (
					<ApiConnectorAdapter
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			case "Long running process":
				return (
					<LongRunningProcess
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			case "Custom backend task":
				return (
					<CustomTask
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			case "Landing page":
				return (
					<SpaLandingpageComponent
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						taskTypeState={taskTypeState}
						removeAttachedFile={removeAttachedFile}
						attachFile={attachFile}
						containerState={containerState}
					/>
				);
			case "Single page application":
				return (
					<SpaLandingpageComponent
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			case "Frontend component":
				return (
					<SpaLandingpageComponent
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			case "Custom frontend task":
				return (
					<SpaLandingpageComponent
						taskTypeDataKey={taskTypeDataKey}
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
					/>
				);
			default:
				return <h1>Output component didn't find that task type.</h1>;
		}
	}
}