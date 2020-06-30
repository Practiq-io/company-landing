import React, { Component } from "react";

export default class CustomTask extends Component {

	state = {
		customTask: {
			taskDescription: ""
		}
	};

	componentDidMount() {
		if (this.props.taskTypeDataKey.customTask) {
			let dataKey = this.props.taskTypeDataKey.customTask;
			const customTask = {
				customTask: {
					taskDescription: dataKey.taskDescription
				}
			};
			this.props.setTaskTypeState(customTask);
			this.setState({
				taskDescription: dataKey.taskDescription
			});
		} else {
			const customTask = {
				customTask: {
					taskDescription: ""
				}
			};
			this.props.setTaskTypeState(customTask);
			this.setState(Object.values(customTask)[0]);
		}
	}

	render() {

		const { outputOnChange } = this.props;

		return ( 
			<>
				<p className="modal-content_subtitle">
                    Task description
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    onChange={outputOnChange("customTask")}
                    style={{
                        marginBottom: "24px",
                        minHeight: "101px"
                    }}
					type="text"
                    name="taskDescription"
                    defaultValue={this.state.taskDescription}
				/>

			</>
		);
	}
}
