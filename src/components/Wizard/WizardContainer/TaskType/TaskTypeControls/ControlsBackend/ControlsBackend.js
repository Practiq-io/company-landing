import React, { Component } from "react";
import genApiIcon from "../TaskTypeControlsImg/gen-api-icon.svg";
import connectorIcon from "../TaskTypeControlsImg/connector-icon.svg";
import longProcess from "../TaskTypeControlsImg/long-icon.svg";
import addIcon from "../TaskTypeControlsImg/add-icon.svg";
import selectDot from "../TaskTypeControlsImg/selected-dot.svg";

export default class ControlsBackend extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.programming === "backend") {
				this.props.selectTask(this.props.containerState.taskType);
			} else {
				this.props.selectTask("General purpose API");
			}
		} else {
			this.props.selectTask("General purpose API");
		}
	}

	render() {
		const { taskType, selectTask } = this.props;

		return (
			<>
				<div className="card-set">
					<div
						onClick={() => selectTask("General purpose API")}
						className="task-type_card"
					>
						<div className="task-type_card--info-box">
							<img src={genApiIcon} alt="" />
							<p>General purpose API</p>
						</div>

						<div
							style={{
								background:
									taskType === "General purpose API" ? "#1371FC" : "white",
								border:
									taskType === "General purpose API"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display:
										taskType === "General purpose API" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>

					<div
						onClick={() => selectTask("API Connector/Adapter")}
						className="task-type_card"
					>
						<div className="task-type_card--info-box">
							<img src={connectorIcon} alt="" />
							<p>API Connector/Adapter</p>
						</div>

						<div
							style={{
								background:
									taskType === "API Connector/Adapter" ? "#1371FC" : "white",
								border:
									taskType === "API Connector/Adapter"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display:
										taskType === "API Connector/Adapter" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="card-set card-set_margin-between">
					<div
						onClick={() => selectTask("Long running process")}
						className="task-type_card"
					>
						<div className="task-type_card--info-box">
							<img src={longProcess} alt="" />
							<p>Long running process</p>
						</div>

						<div
							style={{
								background:
									taskType === "Long running process" ? "#1371FC" : "white",
								border:
									taskType === "Long running process"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display:
										taskType === "Long running process" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>

					<div
						onClick={() => selectTask("Custom backend task")}
						className="task-type_card task-type_card-mobile-margin-bottom"
					>
						<div className="task-type_card--info-box">
							<img src={addIcon} alt="" />
							<p>Add my own task</p>
						</div>

						<div
							style={{
								background:
									taskType === "Custom backend task" ? "#1371FC" : "white",
								border:
									taskType === "Custom backend task"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display:
										taskType === "Custom backend task" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}