import React, { Component } from "react";
import minusIcon from "../OutputComponentsImg/minus-icon.svg";

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
						documentation: "",
						apisFields: [],
						apisFieldKeys: ["field2", "field3", "field4", "field5"],
						field: ""
					},
				};
				this.props.setTaskTypeState(connectorAdapter);
			}
		} else {
			const connectorAdapter = {
				connectorAdapter: {
					documentation: "",
					apisFields: [],
					apisFieldKeys: ["field2", "field3", "field4", "field5"],
					field: "",
				},
			};
			this.props.setTaskTypeState(connectorAdapter);
		}
	}

	render() {
		const { 
			addApiInput, 
			removeApiInput, 
			taskTypeState,
			outputOnChange
		} = this.props;

		const makeApiButtonDisabled = taskTypeState.taskData.connectorAdapter
			? taskTypeState.taskData.connectorAdapter.apisFieldKeys.length === 0
			: null;

		return (
			<>
				<p className="modal-content_subtitle">
					Link to documentation
					<span className="validation_error-message">{taskTypeState.documentationError}</span>
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
					APIs
					<span className="validation_error-message"></span>
				</p>

				<div className="front-end_input-wrapper">
					<label
						className="error-message_label"
						style={{
							color: taskTypeState.fieldError ? "#eb5757" : "transparent",
						}}
					>
						*{taskTypeState.fieldError}
						<input
							className="front-end_input"
							onChange={outputOnChange("connectorAdapter")}
							style={{
								marginBottom: "16px",
							}}
							type="text"
							name="field"
							autoComplete="off"
							defaultValue={
								taskTypeState.taskData.connectorAdapter
									? taskTypeState.taskData.connectorAdapter.field
									: ""
							}
						/>
					</label>
				</div>
				{taskTypeState.taskData.connectorAdapter
					? taskTypeState.taskData.connectorAdapter.apisFields.map(
							(input) => {
								const errorKey = input + "Error";
								return (
									<div key={input} className="front-end_input-wrapper">
										<label
											className="error-message_label"
											style={{
												color: taskTypeState[errorKey]
													? "#eb5757"
													: "transparent",
											}}
										>
											*{taskTypeState[errorKey]}
											<input
												className="front-end_input"
												onChange={outputOnChange("connectorAdapter")}
												style={{
													marginBottom: "16px",
												}}
												type="text"
												name={input}
												autoComplete="off"
												defaultValue={
													taskTypeState.taskData.connectorAdapter
														? taskTypeState.taskData.connectorAdapter[input]
														: ""
												}
											/>
										</label>
										<div
											onClick={() =>
												removeApiInput("connectorAdapter", input)
											}
											className="front-end_input_remove-button"
										>
											<img src={minusIcon} alt="" />
										</div>
									</div>
								);
							}
					  )
					: null}

				<p
					onClick={() => addApiInput("connectorAdapter")}
					style={{
						color: makeApiButtonDisabled ? "#B1B1B8" : "#1371FD",
						cursor: makeApiButtonDisabled ? "context-menu" : "pointer",
						marginBottom: "32px",
					}}
					className="attach-file-button"
				>
					+ add API field
				</p>
			</>
		);
	}
}