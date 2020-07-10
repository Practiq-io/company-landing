import React, { Component } from "react";
import "./Timeline.css";

export default class Timeline extends Component {
	state = {};

	render() {
		const { prevStep } = this.props;

		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>Set project timelines</p>
					</div>

					<div className="card-set_timeline">
						<div
							// onClick={() => this.toggleDeliverables("DOCUMENTATION")}
							className="timeline_card"
							// style={{
							// 	background: system.includes("DOCUMENTATION")
							// 		? "#1371FD"
							// 		: "white",
							// }}
						>
							<div className="timeline_card--info-box">
								<p
								// style={{
								// 	color: system.includes("DOCUMENTATION")
								// 		? "white"
								// 		: "#171725",
								// }}
								>
									3 days
								</p>
							</div>

							<div
								// style={{
								// 	border: system.includes("DOCUMENTATION")
								// 		? "1px solid transparent"
								// 		: "1px solid #E9E9ED",
								// }}
								className="timeline_card--select-circle"
							>
								<img
									// style={{
									// 	display: system.includes("DOCUMENTATION")
									// 		? "block"
									// 		: "none",
									// }}
									// src={selectedDot}
									alt=""
								/>
							</div>
						</div>

						<div
							// onClick={() => this.toggleDeliverables("DOCUMENTATION")}
							className="timeline_card"
							// style={{
							// 	background: system.includes("DOCUMENTATION")
							// 		? "#1371FD"
							// 		: "white",
							// }}
						>
							<div className="timeline_card--info-box">
								<p
								// style={{
								// 	color: system.includes("DOCUMENTATION")
								// 		? "white"
								// 		: "#171725",
								// }}
								>
									7 days
								</p>
							</div>

							<div
								// style={{
								// 	border: system.includes("DOCUMENTATION")
								// 		? "1px solid transparent"
								// 		: "1px solid #E9E9ED",
								// }}
								className="timeline_card--select-circle"
							>
								<img
									// style={{
									// 	display: system.includes("DOCUMENTATION")
									// 		? "block"
									// 		: "none",
									// }}
									// src={selectedDot}
									alt=""
								/>
							</div>
						</div>

						<div
							// onClick={() => this.toggleDeliverables("DOCUMENTATION")}
							className="timeline_card"
							// style={{
							// 	background: system.includes("DOCUMENTATION")
							// 		? "#1371FD"
							// 		: "white",
							// }}
						>
							<div className="timeline_card--info-box">
								<p
								// style={{
								// 	color: system.includes("DOCUMENTATION")
								// 		? "white"
								// 		: "#171725",
								// }}
								>
									14 days
								</p>
							</div>

							<div
								// style={{
								// 	border: system.includes("DOCUMENTATION")
								// 		? "1px solid transparent"
								// 		: "1px solid #E9E9ED",
								// }}
								className="timeline_card--select-circle"
							>
								<img
									// style={{
									// 	display: system.includes("DOCUMENTATION")
									// 		? "block"
									// 		: "none",
									// }}
									// src={selectedDot}
									alt=""
								/>
							</div>
						</div>

						<input
							// onChange={outputOnChange("landingPage")}
							// style={{
							// 	marginBottom: "16px",
							// }}
							className="custom-timeline_input"
							type="text"
							name="customTimeline"
							autoComplete="off"
							placeholder="Other"
							// defaultValue={
							// 	taskTypeState.taskData.landingPage
							// 		? taskTypeState.taskData.landingPage.designLink
							// 		: ""
							// }
						/>

						{/* <div
							// onClick={() => this.toggleDeliverables("DOCUMENTATION")}
							className="timeline_card"
							// style={{
							// 	background: system.includes("DOCUMENTATION")
							// 		? "#1371FD"
							// 		: "white",
							// }}
						>
							<div className="timeline_card--info-box">
								<p
								// style={{
								// 	color: system.includes("DOCUMENTATION")
								// 		? "white"
								// 		: "#171725",
								// }}
								>
									Other
								</p>
							</div>
						</div> */}

					</div>
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
