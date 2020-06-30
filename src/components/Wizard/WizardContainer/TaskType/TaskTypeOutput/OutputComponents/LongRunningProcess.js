import React, { Component } from "react";

export default class LongRunningProcess extends Component {
	state = {
		longRunningProcess: {
			datasource: ""
		}
	};

	componentDidMount() {
		if (this.props.taskTypeDataKey.longRunningProcess) {
			let dataKey = this.props.taskTypeDataKey.longRunningProcess;
			const longRunningProcess = {
				longRunningProcess: {
					datasource: dataKey.datasource
				}
			};
			this.props.setTaskTypeState(longRunningProcess);
			this.setState({
				datasource: dataKey.datasource
			});
		} else {
			const longRunningProcess = {
				longRunningProcess: {
					datasource: ""
				}
			};
			this.props.setTaskTypeState(longRunningProcess);
			this.setState(Object.values(longRunningProcess)[0]);
		}
	}

	render() {
		
		const { outputOnChange } = this.props;

		return (
			<>
				<p className="modal-content_subtitle">
					Datasource
					<span className="validation_error-message"></span>
				</p>
				<textarea
					onChange={outputOnChange("longRunningProcess")}
					style={{
						marginBottom: "24px",
						minHeight: "101px",
					}}
					type="text"
					name="datasource"
					defaultValue={this.state.datasource}
				/>
			</>
		);
	}
}