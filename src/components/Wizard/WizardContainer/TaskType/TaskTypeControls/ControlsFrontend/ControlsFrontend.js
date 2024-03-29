import React, { Component } from "react";
import landingPageIcon from "../TaskTypeControlsImg/landing-icon.svg";
import spaIcon from "../TaskTypeControlsImg/spa-icon.svg";
import frontendIcon from "../TaskTypeControlsImg/frontend-icon.svg";
import addIcon from "../TaskTypeControlsImg/add-icon.svg";
import selectDot from "../TaskTypeControlsImg/selected-dot.svg";
import { Animated } from "react-animated-css";

export default class ControlsFrontend extends Component {
	componentDidMount() {
		if (this.props.containerState) {
			if (this.props.containerState.programming === "frontend") {
				this.props.selectTask(this.props.containerState.taskType);
			} else {
				this.props.selectTask("Landing page");
			}
		} else if (this.props.specificTask){
			this.props.selectTask(this.props.specificTask);
		} else {
			this.props.selectTask("Landing page");
		}
	}

	render() {
		const { taskType, selectTask } = this.props;

		return (
			<>
				<div className="card-set">
					<div
						onClick={() => selectTask("Landing page")}
						className="task-type_card left-task-type_card"
					>
						<div className="task-type_card--info-box">
							<Animated
								animationIn="fadeIn"
								animationOut="fadeOut"
								isVisible={true}
							>
								<img src={landingPageIcon} alt="" />
							</Animated>
							<p>Landing page</p>
						</div>

						<div
							style={{
								background: taskType === "Landing page" ? "#1371FC" : "white",
								border:
									taskType === "Landing page"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display: taskType === "Landing page" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>

					<div
						onClick={() => selectTask("Single page application")}
						className="task-type_card right-task-type_card"
					>
						<div className="task-type_card--info-box">
							<Animated
								animationIn="fadeIn"
								animationOut="fadeOut"
								isVisible={true}
							>
								<img src={spaIcon} alt="" />
							</Animated>
							<p>Single page application</p>
						</div>

						<div
							style={{
								background:
									taskType === "Single page application" ? "#1371FC" : "white",
								border:
									taskType === "Single page application"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display:
										taskType === "Single page application" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="card-set card-set_margin-between">
					<div
						onClick={() => selectTask("Frontend component")}
						className="task-type_card left-task-type_card"
					>
						<div className="task-type_card--info-box">
							<Animated
								animationIn="fadeIn"
								animationOut="fadeOut"
								isVisible={true}
							>
								<img src={frontendIcon} alt="" />
							</Animated>
							<p>Frontend component</p>
						</div>

						<div
							style={{
								background:
									taskType === "Frontend component" ? "#1371FC" : "white",
								border:
									taskType === "Frontend component"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display: taskType === "Frontend component" ? "block" : "none",
								}}
								src={selectDot}
								alt=""
							/>
						</div>
					</div>

					<div
						onClick={() => selectTask("Custom frontend task")}
						className="task-type_card task-type_card-mobile-margin-bottom right-task-type_card"
					>
						<div className="task-type_card--info-box">
							<Animated
								animationIn="fadeIn"
								animationOut="fadeOut"
								isVisible={true}
							>
								<img src={addIcon} alt="" />
							</Animated>
							<p>Add my own task</p>
						</div>

						<div
							style={{
								background:
									taskType === "Custom frontend task" ? "#1371FC" : "white",
								border:
									taskType === "Custom frontend task"
										? "1px solid transparent"
										: "1px solid #E9E9ED",
							}}
							className="task-type_card--select-circle"
						>
							<img
								style={{
									display:
										taskType === "Custom frontend task" ? "block" : "none",
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
