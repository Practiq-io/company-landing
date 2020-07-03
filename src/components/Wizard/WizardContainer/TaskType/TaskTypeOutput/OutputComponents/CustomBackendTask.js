import React, { Component } from "react";

export default class CustomBackendTask extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "Custom backend task") {
				let customBackendTask = {};
				let containerState = { ...this.props.containerState };
				customBackendTask = containerState.taskData;

				this.props.setTaskTypeState(customBackendTask);
			} else {
				const customBackendTask = {
					customBackendTask: {
						taskDescription: "",
					},
				};
				this.props.setTaskTypeState(customBackendTask);
			}
		} else {
			const customBackendTask = {
				customBackendTask: {
					taskDescription: "",
				},
			};
			this.props.setTaskTypeState(customBackendTask);
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
					onChange={outputOnChange("customBackendTask")}
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					type="text"
					name="taskDescription"
					defaultValue={
						taskTypeState.taskData.customBackendTask
							? taskTypeState.taskData.customBackendTask.taskDescription
							: ""
					}
				/>
			</>
		);
	}
}
