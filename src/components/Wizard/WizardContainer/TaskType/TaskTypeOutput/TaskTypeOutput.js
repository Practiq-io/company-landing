import React, { Component } from "react";
import "./TaskTypeOutput.css";
import GeneralPurposeApi from "./OutputComponents/GeneralPurposeAPI";
import ApiConnectorAdapter from "./OutputComponents/ApiConnectorAdapter";
import LongRunningProcess from "./OutputComponents/LongRunningProcess";
import LandingPage from "./OutputComponents/LandingPage";
import CustomBackendTask from "./OutputComponents/CustomBackendTask";
import SinglePageApplication from "./OutputComponents/SinglePageApplication";
import FrontendComponent from "./OutputComponents/FrontendComponent";
import CustomFrontendTask from "./OutputComponents/CustomFrontendTask";

export default class TaskTypeOutput extends Component {
	render() {
		const {
			taskTypeState,
			setTaskTypeState,
			outputOnChange,
			removeAttachedFile,
			attachFile,
			containerState,
			addApiInput,
			removeApiInput,
			uploadPercentage,
			loadingBar
		} = this.props;
		const taskType = taskTypeState.taskType;

		switch (taskType) {
			case "General purpose API":
				return (
					<GeneralPurposeApi
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						containerState={containerState}
						taskTypeState={taskTypeState}
						addApiInput={addApiInput}
						removeApiInput={removeApiInput}
					/>
				);
			case "API Connector/Adapter":
				return (
					<ApiConnectorAdapter
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						containerState={containerState}
						taskTypeState={taskTypeState}
						addApiInput={addApiInput}
						removeApiInput={removeApiInput}
					/>
				);
			case "Long running process":
				return (
					<LongRunningProcess
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						containerState={containerState}
						taskTypeState={taskTypeState}
					/>
				);
			case "Custom backend task":
				return (
					<CustomBackendTask
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						containerState={containerState}
						taskTypeState={taskTypeState}
					/>
				);
			case "Landing page":
				return (
					<LandingPage
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						taskTypeState={taskTypeState}
						removeAttachedFile={removeAttachedFile}
						attachFile={attachFile}
						containerState={containerState}
						addApiInput={addApiInput}
						removeApiInput={removeApiInput}
						uploadPercentage={uploadPercentage}
						loadingBar={loadingBar}
					/>
				);
			case "Single page application":
				return (
					<SinglePageApplication 
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						taskTypeState={taskTypeState}
						removeAttachedFile={removeAttachedFile}
						attachFile={attachFile}
						containerState={containerState}
						addApiInput={addApiInput}
						removeApiInput={removeApiInput}
						uploadPercentage={uploadPercentage}
						loadingBar={loadingBar}
					/>
				);
			case "Frontend component":
				return (
					<FrontendComponent 
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						taskTypeState={taskTypeState}
						removeAttachedFile={removeAttachedFile}
						attachFile={attachFile}
						containerState={containerState}
						addApiInput={addApiInput}
						removeApiInput={removeApiInput}
						uploadPercentage={uploadPercentage}
						loadingBar={loadingBar}
					/>
				);
			case "Custom frontend task":
				return (
					<CustomFrontendTask 
						setTaskTypeState={setTaskTypeState}
						outputOnChange={outputOnChange}
						taskTypeState={taskTypeState}
						removeAttachedFile={removeAttachedFile}
						attachFile={attachFile}
						containerState={containerState}
						addApiInput={addApiInput}
						removeApiInput={removeApiInput}
					/>
				);
			default:
				return <h1>Output component didn't find that task type.</h1>;
		}
	}
}