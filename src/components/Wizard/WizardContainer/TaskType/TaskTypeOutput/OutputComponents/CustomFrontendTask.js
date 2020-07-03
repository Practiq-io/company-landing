import React, { Component } from "react";

export default class CustomFrontendTask extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "Custom frontend task") {
				let customFrontendTask = {};
				let containerState = { ...this.props.containerState };
				customFrontendTask = containerState.taskData;

				this.props.setTaskTypeState(customFrontendTask);
			} else {
				const customFrontendTask = {
					customFrontendTask: {
						taskDescription: "",
					},
				};
				this.props.setTaskTypeState(customFrontendTask);
			}
		} else {
			const customFrontendTask = {
				customFrontendTask: {
					taskDescription: "",
				},
			};
			this.props.setTaskTypeState(customFrontendTask);
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
					onChange={outputOnChange("customFrontendTask")}
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					type="text"
					name="taskDescription"
					defaultValue={
						taskTypeState.taskData.customFrontendTask
							? taskTypeState.taskData.customFrontendTask.taskDescription
							: ""
					}
				/>
			</>
		);
	}
}
