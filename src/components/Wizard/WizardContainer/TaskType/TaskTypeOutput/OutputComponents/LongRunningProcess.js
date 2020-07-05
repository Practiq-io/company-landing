import React, { Component } from "react";

export default class LongRunningProcess extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "Long running process") {
				let longRunningProcess = {};
				let containerState = { ...this.props.containerState };
				longRunningProcess = containerState.taskData;
				this.props.setTaskTypeState(longRunningProcess);
			} else {
				const longRunningProcess = {
					longRunningProcess: {
						datasource: "",
					},
				};
				this.props.setTaskTypeState(longRunningProcess);
			}
		} else {
			const longRunningProcess = {
				longRunningProcess: {
					datasource: "",
				},
			};
			this.props.setTaskTypeState(longRunningProcess);
		}
	}

	render() {
		const { outputOnChange, taskTypeState } = this.props;
		return (
			<>
				<p className="modal-content_subtitle">
					Datasource
					<span className="validation_error-message">{taskTypeState.datasourceError}</span>
				</p>
				<textarea
					onChange={outputOnChange("longRunningProcess")}
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					type="text"
					name="datasource"
					defaultValue={
						taskTypeState.taskData.longRunningProcess
						? taskTypeState.taskData.longRunningProcess.datasource
						: ""
					}
				/>
			</>
		);
	}
}