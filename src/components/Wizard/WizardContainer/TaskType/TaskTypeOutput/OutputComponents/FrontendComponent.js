import React, { Component } from "react";
import selectedFileIcon from "../OutputComponentsImg/selected-file-icon.svg";
import fileIcon from "../OutputComponentsImg/file-icon.svg";
import deleteFileIcon from "../OutputComponentsImg/delete-file-icon.svg";
import minusIcon from "../OutputComponentsImg/minus-icon.svg";
import uuid from "uuid";

export default class FrontendComponent extends Component {

	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "Frontend component") {
				let frontendComponent = {};
				let containerState = { ...this.props.containerState };
				frontendComponent = containerState.taskData;
				this.props.setTaskTypeState(frontendComponent);
			} else {
				const frontendComponent = {
					frontendComponent: {
						designLink: "",
						attachedFiles: [
							"homepage.sketch",
							"profile.sketch",
							"stosik.sketch",
							"kamapoolya.sketch",
						],
						apisFields: [],
						apisFieldKeys: ["field2","field3","field4","field5"],
						field: ""
					},
				};
				this.props.setTaskTypeState(frontendComponent);
			}
		} else {
			const frontendComponent = {
                frontendComponent: {
                    designLink: "",
                    attachedFiles: [
                        "homepage.sketch",
                        "profile.sketch",
                        "stosik.sketch",
                        "kamapoolya.sketch",
                    ],
                    apisFields: [],
                    apisFieldKeys: ["field2","field3","field4","field5"],
                    field: ""
                },
            };
            this.props.setTaskTypeState(frontendComponent);
		}
	}

	render() {
		const {
			outputOnChange,
			taskTypeState,
			removeAttachedFile,
			attachFile,
			addApiInput,
			removeApiInput,
		} = this.props;

		const makeApiButtonDisabled = taskTypeState.taskData.frontendComponent
			? taskTypeState.taskData.frontendComponent.apisFieldKeys.length === 0
			: null;
		const makeAttachFileButtonDisabled = taskTypeState.taskData.frontendComponent
			? taskTypeState.taskData.frontendComponent.attachedFiles.length === 5
			: null;

		return (
			<>
				<p className="modal-content_subtitle">
					Design
					<span className="validation_error-message">{taskTypeState.designLinkError}</span>
				</p>

				<input
					onChange={outputOnChange("frontendComponent")}
					style={{
						marginBottom: "16px",
					}}
					type="text"
					name="designLink"
					autoComplete="off"
					placeholder="Paste link"
					defaultValue={
						taskTypeState.taskData.frontendComponent
						? taskTypeState.taskData.frontendComponent.designLink
						: ""
					}
				/>

				{taskTypeState.taskData.frontendComponent
					? taskTypeState.taskData.frontendComponent.attachedFiles.map((file) => {
						return (
							<div key={uuid()} className="attached-file_box">
								<div className="attached-file_wrapper">
									<img className="attached-file-icon" src={fileIcon} alt="" />
									<img
										className="attached-file-selected-icon"
										src={selectedFileIcon}
										alt=""
									/>
									<p className="attached-file-name">{file}</p>
									<img
										onClick={() => removeAttachedFile(file, "frontendComponent")}
										className="delete-attached-file-icon"
										src={deleteFileIcon}
										alt=""
									/>
								</div>
							</div>
						);
					  })
					: null}

				<p
					onClick={() => attachFile("__test.sketch", "frontendComponent")}
					style={{
						color: makeAttachFileButtonDisabled ? "#B1B1B8" : "#1371FD",
						cursor: makeAttachFileButtonDisabled ? "context-menu" : "pointer",
						marginBottom: "32px",
					}}
					className="attach-file-button"
				>
					+ Attach files
				</p>

				<p className="modal-content_subtitle">
					APIs
					<span className="validation_error-message"></span>
				</p>

				<div className="front-end_input-wrapper">
					<label 
						className="error-message_label"
						style={{
							color: taskTypeState.fieldError ? "#eb5757" : "transparent"
						}}
					>
						*{taskTypeState.fieldError}
						<input
							className="front-end_input"
							onChange={outputOnChange("frontendComponent")}
							style={{
								marginBottom: "16px",
							}}
							type="text"
							name="field"
							autoComplete="off"
							defaultValue={
								taskTypeState.taskData.frontendComponent
								? taskTypeState.taskData.frontendComponent.field
								: ""
							}
						/>
					</label>
				</div>
				{taskTypeState.taskData.frontendComponent
					? taskTypeState.taskData.frontendComponent.apisFields.map((input) => {
						const errorKey = input + "Error"
						return (
							<div key={input} className="front-end_input-wrapper">
								<label 
									className="error-message_label"
									style={{
										color: taskTypeState[errorKey] ? "#eb5757" : "transparent"
									}}
								>
									*{taskTypeState[errorKey]}
									<input
										className="front-end_input"
										onChange={outputOnChange("frontendComponent")}
										style={{
											marginBottom: "16px",
										}}
										type="text"
										name={input}
										autoComplete="off"
										defaultValue={
											taskTypeState.taskData.frontendComponent
											? taskTypeState.taskData.frontendComponent[input]
											: ""
										}
									/>
								</label>
								<div
									onClick={() => removeApiInput("frontendComponent", input)}
									className="front-end_input_remove-button"
								>
									<img src={minusIcon} alt="" />
								</div>
							</div>
						);
					  })
					: null}
					
				<p
					onClick={() => addApiInput("frontendComponent")}
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
