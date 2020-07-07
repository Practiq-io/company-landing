import React, { Component } from "react";
import "./Deliverables.css";

export default class Deliverables extends Component {
	state = {
		// taxonomy : [
		// 	{skill:"Javascript", level: "junior"},
		// 	{skill:"Node JS", level: "senior"},
		// 	{skill:"C++", level: "senior"}
		// ],
		// system: [
		// 	"DOCUMENTATION",
		// 	"UNIT_TESTS",
		// 	"END_TO_END_TESTS"
		// ],
		//customDeliverables: "description"
	};

	componentDidMount() {
		this.setState({ taxonomy: this.props.containerState });
	}

	render() {
		console.log(this.state, "CHECK CHECK");
		const { selectedTags } = this.state;
		const { prevStep, containerState } = this.props;

		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>Quality and deliverables</p>
					</div>

					<div className="deliverables_frame">
						<div className="languages-proficiency_output">
							{containerState.selectedTags.map((language, i) => {
								if (i === (containerState.selectedTags.length - 1)) {
									return (
										<div 
											className="language-proficiency_row"
											style={{
												borderBottom: "none"
											}}
										>
											<p className="language-proficiency_row_language-name">
												{language[0]}
											</p>

											<div className="language-proficiency_row-skill-level_box">

												<div 
													className="skill-level_button"
													style={{
														background: language[1] === "junior" ? "#1371FD" : "#F3F3F5",
														color: language[1] === "junior" ? "white" : "#696974;"
													}}	
												>
													<p>Junior</p>
												</div>
												<div 
													className="skill-level_button middle-button_margin"
													style={{
														background: language[1] === "middle" ? "#1371FD" : "#F3F3F5",
														color: language[1] === "middle" ? "white" : "#696974;"
													 }}
												>
													<p>Middle</p>
												</div>
												<div 
													className="skill-level_button"
													style={{
														background: language[1] === "senior" ? "#1371FD" : "#F3F3F5",
														color: language[1] === "senior" ? "white" : "#696974;"
													 }}
												>
													<p>Senior</p>
												</div>
												
											</div>
										</div>
									);
								} else {
									return (
										<div className="language-proficiency_row">
											<p className="language-proficiency_row_language-name">
												{language[0]}
											</p>
	
											<div className="language-proficiency_row-skill-level_box">
												
												<div
												 className="skill-level_button"
												 style={{
													background: language[1] === "junior" ? "#1371FD" : "#F3F3F5",
													color: language[1] === "junior" ? "white" : "#696974;"
												 }}
												 >
													<p>Junior</p>
												</div>
												<div 
													className="skill-level_button middle-button_margin"
													style={{
														background: language[1] === "middle" ? "#1371FD" : "#F3F3F5",
														color: language[1] === "middle" ? "white" : "#696974;"
													 }}
												>
													<p>Middle</p>
												</div>
												<div 
													className="skill-level_button"
													style={{
														background: language[1] === "senior" ? "#1371FD" : "#F3F3F5",
														color: language[1] === "senior" ? "white" : "#696974;"
													 }}
												>
													<p>Senior</p>
												</div>
												
											</div>
										</div>
									);
								}
							})}
						</div>
						<div className="deliverables-select_box"></div>
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
