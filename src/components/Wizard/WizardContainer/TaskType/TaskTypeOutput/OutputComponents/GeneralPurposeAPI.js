import React, { Component } from "react";

export default class GeneralPurposeAPI extends Component {

	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.taskType === "General purpose API") {
				let generalApi = {}
                let containerState = {...this.props.containerState}
                generalApi = containerState.taskData
                this.props.setTaskTypeState(generalApi);
			} else {
                const generalApi = {
						generalApi: {
						apiRequest: "",
						apiResponse: ""
					}
				};
				this.props.setTaskTypeState(generalApi);
			}
		} else {
			const generalApi = {
					generalApi: {
					apiRequest: "",
					apiResponse: ""
				}
			};
			this.props.setTaskTypeState(generalApi);
		}
	}

	render() {
		const { outputOnChange, taskTypeState } = this.props;
		return (
			<>
				<p className="modal-content_subtitle">
					API request (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
					onChange={outputOnChange("generalApi")}
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					type="text"
					name="apiRequest"
					defaultValue={
						taskTypeState.taskData.generalApi
						? taskTypeState.taskData.generalApi.apiRequest
						: ""
					}
				/>
				<p className="modal-content_subtitle">
					API responce (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
					onChange={outputOnChange("generalApi")}
					style={{
						minHeight: "101px",
					}}
					type="text"
					name="apiResponse"
					defaultValue={
						taskTypeState.taskData.generalApi
						? taskTypeState.taskData.generalApi.apiResponse
						: ""
					}
				/>
			</>
		);
	}
}