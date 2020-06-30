import React, { Component } from "react";

export default class GeneralPurposeAPI extends Component {
	state = {
		generalApi: {
			apiRequest: "",
			apiResponse: ""
		}
	};

	componentDidMount() {
		if (this.props.taskTypeDataKey.generalApi) {
			let dataKey = this.props.taskTypeDataKey.generalApi;
			const generalApi = {
				generalApi: {
					apiRequest: dataKey.apiRequest,
					apiResponse: dataKey.apiResponse
				},
			};
			this.props.setTaskTypeState(generalApi);
			this.setState({
				apiRequest: dataKey.apiRequest,
				apiResponse: dataKey.apiResponse,
			});
		} else {
			const generalApi = {
				generalApi: {
					apiRequest: "",
					apiResponse: ""
				}
			};
			this.props.setTaskTypeState(generalApi);
			this.setState(Object.values(generalApi)[0]);
		}
	}

	render() {
		const { outputOnChange } = this.props;

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
					defaultValue={this.state.apiRequest}
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
					defaultValue={this.state.apiResponse}
				/>
			</>
		);
	}
}