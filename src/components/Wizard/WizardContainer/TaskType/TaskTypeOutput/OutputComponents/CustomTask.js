import React, { Component } from "react";

export default class CustomTask extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "Custom backend task") {
				let customTask = {};
				let containerState = { ...this.props.containerState };
				customTask = containerState.taskData;

				this.props.setTaskTypeState(customTask);
			} else {
				const customTask = {
					customTask: {
						taskDescription: ""
					}
				};
				this.props.setTaskTypeState(customTask);
			}
		} else {
			const customTask = {
				customTask: {
					taskDescription: ""
				}
			};
			this.props.setTaskTypeState(customTask);
		}
	}
	
	render() {
		const { outputOnChange, taskTypeState } = this.props;

		return (
			<>
				<p className="modal-content_subtitle">
					Task description
					<span className="validation_error-message"></span>
				</p>
				<textarea
					onChange={outputOnChange("customTask")}
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					type="text"
					name="taskDescription"
					defaultValue={
						taskTypeState.taskData.customTask
							? taskTypeState.taskData.customTask.taskDescription
							: ""
					}
					
				/>
			</>
		);
	}
}
