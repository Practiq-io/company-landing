import React, { Component } from "react";
import selectedFileIcon from "../OutputComponentsImg/selected-file-icon.svg";
import fileIcon from "../OutputComponentsImg/file-icon.svg";
import deleteFileIcon from "../OutputComponentsImg/delete-file-icon.svg";
import minusIcon from "../OutputComponentsImg/minus-icon.svg";

export default class SinglePageApplication extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "Single page application") {
				let singlePageApplication = {};
				let containerState = { ...this.props.containerState };
				singlePageApplication = containerState.taskData;
				this.props.setTaskTypeState(singlePageApplication);
			} else {
				const singlePageApplication = {
					singlePageApplication: {
						designLink: "",
						attachedFiles: [],
						apisFields: [],
						apisFieldKeys: ["field2", "field3", "field4", "field5"],
						field: "",
					},
				};
				this.props.setTaskTypeState(singlePageApplication);
			}
		} else {
			const singlePageApplication = {
				singlePageApplication: {
					designLink: "",
					attachedFiles: [],
					apisFields: [],
					apisFieldKeys: ["field2", "field3", "field4", "field5"],
					field: "",
				},
			};
			this.props.setTaskTypeState(singlePageApplication);
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
			loadingBar,
			uploadPercentage,
		} = this.props;

		const makeApiButtonDisabled = taskTypeState.taskData.singlePageApplication
			? taskTypeState.taskData.singlePageApplication.apisFieldKeys.length === 0
			: null;
		const makeAttachFileButtonDisabled = taskTypeState.taskData
			.singlePageApplication
			? taskTypeState.taskData.singlePageApplication.attachedFiles.length === 5
			: null;

		return (
			<>
				<p className="modal-content_subtitle">
					Design
					<span className="validation_error-message">
						{taskTypeState.designLinkError}
					</span>
				</p>

				<input
					onChange={outputOnChange("singlePageApplication")}
					style={{
						marginBottom: "16px",
					}}
					type="text"
					name="designLink"
					autoComplete="off"
					placeholder="Paste link"
					defaultValue={
						taskTypeState.taskData.singlePageApplication
							? taskTypeState.taskData.singlePageApplication.designLink
							: ""
					}
				/>

				{taskTypeState.taskData.singlePageApplication
					? taskTypeState.taskData.singlePageApplication.attachedFiles.map(
							(file) => {
								return (
									<div key={file[0]} className="attached-file_box">
										<div className="attached-file_wrapper">
											<img
												className="attached-file-icon"
												src={fileIcon}
												alt=""
											/>
											<img
												className="attached-file-selected-icon"
												src={selectedFileIcon}
												alt=""
											/>
											<p className="attached-file-name">{file[1]}</p>
											<img
												onClick={() =>
													removeAttachedFile(file[0], "singlePageApplication")
												}
												className="delete-attached-file-icon"
												src={deleteFileIcon}
												alt=""
											/>
										</div>
									</div>
								);
							}
					  )
					: null
				}
				<div
					className="loadingBar-container"
					style={{
						display: loadingBar ? "block" : "none",
					}}
				>
					<div
						className="loading-bar"
						style={{
							width: uploadPercentage,
						}}
					></div>
				</div>
				<label 
					htmlFor="file-upload" 
					className="custom-file-upload"
					style={{
						cursor: makeAttachFileButtonDisabled ? "context-menu" : "pointer"
					}}
				>
					<p 
						className="attach-file-button"
						style={{
							color: makeAttachFileButtonDisabled ? "#B1B1B8" : "#1371FD",
							cursor: makeAttachFileButtonDisabled ? "context-menu" : "pointer"
						}}
					>
						+ Attach files
					</p> 
				</label>
				<input
					disabled={makeAttachFileButtonDisabled}
					id="file-upload"
					type="file"
					className="fileUploader"
					onChange={(e) => attachFile(e, "singlePageApplication")}
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
							onChange={outputOnChange("singlePageApplication")}
							style={{
								marginBottom: "16px",
							}}
							type="text"
							name="field"
							autoComplete="off"
							defaultValue={
								taskTypeState.taskData.singlePageApplication
									? taskTypeState.taskData.singlePageApplication.field
									: ""
							}
						/>
					</label>
				</div>
				{taskTypeState.taskData.singlePageApplication
					? taskTypeState.taskData.singlePageApplication.apisFields.map(
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
												onChange={outputOnChange("singlePageApplication")}
												style={{
													marginBottom: "16px",
												}}
												type="text"
												name={input}
												autoComplete="off"
												defaultValue={
													taskTypeState.taskData.singlePageApplication
														? taskTypeState.taskData.singlePageApplication[
																input
														  ]
														: ""
												}
											/>
										</label>
										<div
											onClick={() =>
												removeApiInput("singlePageApplication", input)
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
					onClick={() => addApiInput("singlePageApplication")}
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
