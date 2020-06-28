import React, { Component } from "react";
import "./TaskTypeOutput.css";
import GeneralPurposeApi from "./OutputComponents/GeneralPurposeAPI";
import ApiConnectorAdapter from "./OutputComponents/ApiConnectorAdapter";
import LongRunningProcess from "./OutputComponents/LongRunningProcess";
import SpaLandingpageComponent from "./OutputComponents/SpaLandingpageComponent";
import CustomTask from "./OutputComponents/CustomTask";

export default class TaskTypeOutput extends Component {
	render() {
		
		const { taskTypeState, setTaskTypeState } = this.props;
        const taskType = taskTypeState.taskType;
		switch (taskType) {
			case "General purpose API":
				return (
					<GeneralPurposeApi
						setTaskTypeState={setTaskTypeState}
					/>
				);
			case "API Connector/Adapter":
				return (
					<ApiConnectorAdapter
						setTaskTypeState={setTaskTypeState}
					/>
				);
			case "Long running process":
				return (
                    <LongRunningProcess 
                    
                    />
                );
			case "Landing page / SPA / Component":
				return (
                    <SpaLandingpageComponent 
                    
                    />
                );
			case "Custom backend task":
				return (
                    <CustomTask 
                    
                    />
                );
			default:
				return <h1>Output component didn't find that task type.</h1>;
		}
	}
}
