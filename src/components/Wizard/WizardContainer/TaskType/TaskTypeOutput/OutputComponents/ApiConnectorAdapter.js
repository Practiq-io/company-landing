import React, { Component } from "react";

export default class ApiConnectorAdapter extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "API Connector/Adapter") {
				let connectorAdapter = {};
				let containerState = { ...this.props.containerState };
				connectorAdapter = containerState.taskData;

				this.props.setTaskTypeState(connectorAdapter);
			} else {
				const connectorAdapter = {
					connectorAdapter: {
						apiRequest: "",
						apiResponse: "",
						documentation: "",
					},
				};
				this.props.setTaskTypeState(connectorAdapter);
			}
		} else {
			const connectorAdapter = {
				connectorAdapter: {
					apiRequest: "",
					apiResponse: "",
					documentation: "",
				},
			};
			this.props.setTaskTypeState(connectorAdapter);
		}
	}

	render() {
		const { outputOnChange, taskTypeState } = this.props;

		return (
			<>
				<p className="modal-content_subtitle">
					Link to documentation
					<span className="validation_error-message"></span>
				</p>
				<input
					onChange={outputOnChange("connectorAdapter")}
					style={{
						marginBottom: "24px",
					}}
					type="text"
					name="documentation"
					autoComplete="off"
					defaultValue={
						taskTypeState.taskData.connectorAdapter
							? taskTypeState.taskData.connectorAdapter.documentation
							: ""
					}
				/>
				<p className="modal-content_subtitle">
					API request (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
					onChange={outputOnChange("connectorAdapter")}
					className="general-purpose-api_textarea general-purpose-api_textarea--margin-bottom"
					type="text"
					name="apiRequest"
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					defaultValue={
						taskTypeState.taskData.connectorAdapter
							? taskTypeState.taskData.connectorAdapter.apiRequest
							: ""
					}
				/>
				<p className="modal-content_subtitle">
					API responce (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
					onChange={outputOnChange("connectorAdapter")}
					className="general-purpose-api_textarea"
					type="text"
					name="apiResponse"
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					defaultValue={
						taskTypeState.taskData.connectorAdapter
							? taskTypeState.taskData.connectorAdapter.apiResponse
							: ""
					}
				/>
			</>
		);
	}
}
