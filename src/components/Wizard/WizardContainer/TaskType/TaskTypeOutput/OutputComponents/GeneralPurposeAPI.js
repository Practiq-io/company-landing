import React, { Component } from "react";
import minusIcon from "../OutputComponentsImg/minus-icon.svg";

export default class GeneralPurposeAPI extends Component {

	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "General purpose API") {
				let generalApi = {};
				let containerState = { ...this.props.containerState };
				generalApi = containerState.taskData;
				this.props.setTaskTypeState(generalApi);
			} else {
				const generalApi = {
					generalApi: {
						apisFields: [],
						apisFieldKeys: ["field2", "field3", "field4", "field5"],
						field: "",
					},
				};
				this.props.setTaskTypeState(generalApi);
			}
		} else {
			const generalApi = {
				generalApi: {
					apisFields: [],
					apisFieldKeys: ["field2", "field3", "field4", "field5"],
					field: "",
				},
			};
			this.props.setTaskTypeState(generalApi);
		}
	}

	render() {
		const { 
			addApiInput, 
			removeApiInput, 
			taskTypeState,
			outputOnChange
		} = this.props;

		const makeApiButtonDisabled = taskTypeState.taskData.generalApi
			? taskTypeState.taskData.generalApi.apisFieldKeys.length === 0
			: null;
		
		return (
			<>
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
							onChange={outputOnChange("generalApi")}
							style={{
								marginBottom: "16px",
							}}
							type="text"
							name="field"
							autoComplete="off"
							defaultValue={
								taskTypeState.taskData.generalApi
									? taskTypeState.taskData.generalApi.field
									: ""
							}
						/>
					</label>
				</div>
				{taskTypeState.taskData.generalApi
					? taskTypeState.taskData.generalApi.apisFields.map(
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
												onChange={outputOnChange("generalApi")}
												style={{
													marginBottom: "16px",
												}}
												type="text"
												name={input}
												autoComplete="off"
												defaultValue={
													taskTypeState.taskData.generalApi
														? taskTypeState.taskData.generalApi[input]
														: ""
												}
											/>
										</label>
										<div
											onClick={() =>
												removeApiInput("generalApi", input)
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
					onClick={() => addApiInput("generalApi")}
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
