import React, { Component } from "react";
import "./TaskType.css";
import TaskTypeSwitch from "./TaskTypeSwitch/TaskTypeSwitch";


export default class TaskType extends Component {
	state = {
		programming: "backend"
	};

	toggleLanguage = () => {
		if(this.state.programming === "backend"){
			this.setState({programming:"frontend"})
		} else if (this.state.programming === "frontend"){
			this.setState({programming:"backend"})
		}
	}

	render() {
		const { prevStep } = this.props;
		console.log(this.state, "looking at switch");
		
		return (
			<div className="about-company_frame">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>Select technical requirements</p>
					</div>
					<TaskTypeSwitch toggle={this.toggleLanguage} programming={this.state.programming} />



				</div>















				<div className="wizard-button_box">
					<div onClick={prevStep} className="wizard_button wizard-back_button">
						<p>Back</p>
					</div>

					<div className="wizard_button wizard-next_button">
						<p>Next</p>
					</div>
				</div>
			</div>
		);
	}
}
