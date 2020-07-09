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

					<div className="card-set">
						<div
							// onClick={() => this.toggleDeliverables("DOCUMENTATION")}
							className="task-type_card"
							// style={{
							// 	background: system.includes("DOCUMENTATION")
							// 		? "#1371FD"
							// 		: "white",
							// }}
						>
							<div className="task-type_card--info-box">
								<img
								// src={
								// 	system.includes("DOCUMENTATION")
								// 		? selectedDocumentationIcon
								// 		: documentationIcon
								// }
								// alt=""
								/>
								<p
								// style={{
								// 	color: system.includes("DOCUMENTATION")
								// 		? "white"
								// 		: "#171725",
								// }}
								>
									Documentation
								</p>
							</div>

							<div
								// style={{
								// 	border: system.includes("DOCUMENTATION")
								// 		? "1px solid transparent"
								// 		: "1px solid #E9E9ED",
								// }}
								className="task-type_card--select-circle"
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
							className="task-type_card"
							// style={{
							// 	background: system.includes("DOCUMENTATION")
							// 		? "#1371FD"
							// 		: "white",
							// }}
						>
							<div className="task-type_card--info-box">
								<img
								// src={
								// 	system.includes("DOCUMENTATION")
								// 		? selectedDocumentationIcon
								// 		: documentationIcon
								// }
								// alt=""
								/>
								<p
								// style={{
								// 	color: system.includes("DOCUMENTATION")
								// 		? "white"
								// 		: "#171725",
								// }}
								>
									Documentation
								</p>
							</div>

							<div
								// style={{
								// 	border: system.includes("DOCUMENTATION")
								// 		? "1px solid transparent"
								// 		: "1px solid #E9E9ED",
								// }}
								className="task-type_card--select-circle"
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
