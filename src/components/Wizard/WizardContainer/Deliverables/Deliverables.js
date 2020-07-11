import React, { Component } from "react";
import "./Deliverables.css";
import dockerIcon from "./DeliverablesImg/docker-icon.svg";
import selectedDockerIcon from "./DeliverablesImg/selected-docker-icon.svg";
import selectedDot from "./DeliverablesImg/deliverables-select-dot.svg";
import documentationIcon from "./DeliverablesImg/documentation-icon.svg";
import selectedDocumentationIcon from "./DeliverablesImg/selected-documentation-icon.svg";
import plusIcon from "./DeliverablesImg/plus-icon.svg";
import selectedPlusIcon from "./DeliverablesImg/selected-plus-icon.svg";
import testIcon from "./DeliverablesImg/test-icon.svg";
import selectedTestIcon from "./DeliverablesImg/selected-test-icon.svg";

export default class Deliverables extends Component {
	state = {
		system: [],
		customDeliverables: "",
	};

	onChangeHandler = (e) => {
		let customDeliverables = this.state.customDeliverables;
		customDeliverables = e.target.value;
		this.setState({ customDeliverables });
	};

	toggleDeliverables = (type) => {
		let system = [...this.state.system];
		let customDeliverables = this.state.customDeliverables;
		if (system.includes(type)) {
			if (type === "CUSTOM_DELIVERABLES") {
				customDeliverables = "";
			}
			let index = system.indexOf(type);
			system.splice(index, 1);
		} else {
			system.push(type);
		}
		this.setState({ system, customDeliverables });
	};

	changeSkillLevel = (languageName, languageLevel) => {
		let selectedTags = [...this.state.selectedTags];
		selectedTags.forEach((languageArray) => {
			if (languageArray[0] === languageName) {
				languageArray[1] = languageLevel;
			}
		});
		this.setState({ selectedTags });
	};

	componentDidMount() {
		this.setState(this.props.containerState);
	}

	validation = () => {
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		let customDeliverablesError = "";

		if (this.state.system.includes("CUSTOM_DELIVERABLES")) {
			if (this.state.customDeliverables.length === 0) {
				customDeliverablesError = "* is Required";
			} else if (this.state.customDeliverables.match(blockedRegex)) {
				customDeliverablesError = "* only string values";
			}
		}

		if (customDeliverablesError) {
			this.setState({ customDeliverablesError });
			return false;
		}

		return true;
	};

	continue = () => {
		let isValid = this.validation();
		if (isValid) {
			const taxonomy = {
				taxonomy: {
					selectedTags: this.state.selectedTags,
					popularTags: this.state.popularTags,
					system: this.state.system,
					customDeliverables: this.state.customDeliverables,
				},
			};
			this.props.setWizardProperties(taxonomy);
			this.props.nextStep();
		}
	};

	render() {
		const { system } = this.state;
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
								if (i === containerState.selectedTags.length - 1) {
									return (
										<div
											className="language-proficiency_row"
											style={{
												borderBottom: "none",
											}}
										>
											<p className="language-proficiency_row_language-name">
												{language[0]}
											</p>

											<div className="language-proficiency_row-skill-level_box">
												<div
													onClick={() =>
														this.changeSkillLevel(language[0], "junior")
													}
													className="skill-level_button"
													style={{
														background:
															language[1] === "junior" ? "#1371FD" : "#F3F3F5",
														color:
															language[1] === "junior" ? "white" : "#696974",
													}}
												>
													<p>Junior</p>
												</div>
												<div
													onClick={() =>
														this.changeSkillLevel(language[0], "middle")
													}
													className="skill-level_button middle-button_margin"
													style={{
														background:
															language[1] === "middle" ? "#1371FD" : "#F3F3F5",
														color:
															language[1] === "middle" ? "white" : "#696974",
													}}
												>
													<p>Middle</p>
												</div>
												<div
													onClick={() =>
														this.changeSkillLevel(language[0], "senior")
													}
													className="skill-level_button"
													style={{
														background:
															language[1] === "senior" ? "#1371FD" : "#F3F3F5",
														color:
															language[1] === "senior" ? "white" : "#696974",
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
													onClick={() =>
														this.changeSkillLevel(language[0], "junior")
													}
													className="skill-level_button"
													style={{
														background:
															language[1] === "junior" ? "#1371FD" : "#F3F3F5",
														color:
															language[1] === "junior" ? "white" : "#696974",
													}}
												>
													<p>Junior</p>
												</div>
												<div
													onClick={() =>
														this.changeSkillLevel(language[0], "middle")
													}
													className="skill-level_button middle-button_margin"
													style={{
														background:
															language[1] === "middle" ? "#1371FD" : "#F3F3F5",
														color:
															language[1] === "middle" ? "white" : "#696974",
													}}
												>
													<p>Middle</p>
												</div>
												<div
													onClick={() =>
														this.changeSkillLevel(language[0], "senior")
													}
													className="skill-level_button"
													style={{
														background:
															language[1] === "senior" ? "#1371FD" : "#F3F3F5",
														color:
															language[1] === "senior" ? "white" : "#696974",
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

						<div className="deliverables-select_box">
							<p className="modal-content_subtitle">
								Deliverables (optional)
								<span className="validation_error-message"></span>
							</p>

							<div className="card-set">
								<div
									onClick={() => this.toggleDeliverables("DOCUMENTATION")}
									className="task-type_card"
									style={{
										background: system.includes("DOCUMENTATION")
											? "#1371FD"
											: "white",
									}}
								>
									<div className="task-type_card--info-box">
										<img
											src={
												system.includes("DOCUMENTATION")
													? selectedDocumentationIcon
													: documentationIcon
											}
											alt=""
										/>
										<p
											style={{
												color: system.includes("DOCUMENTATION")
													? "white"
													: "#171725",
											}}
										>
											Documentation
										</p>
									</div>

									<div
										style={{
											border: system.includes("DOCUMENTATION")
												? "1px solid transparent"
												: "1px solid #E9E9ED",
										}}
										className="task-type_card--select-circle"
									>
										<img
											style={{
												display: system.includes("DOCUMENTATION")
													? "block"
													: "none",
											}}
											src={selectedDot}
											alt=""
										/>
									</div>
								</div>

								<div
									onClick={() => this.toggleDeliverables("DOCKER_FILES")}
									className="task-type_card"
									style={{
										background: system.includes("DOCKER_FILES")
											? "#1371FD"
											: "white",
									}}
								>
									<div className="task-type_card--info-box">
										<img
											src={
												system.includes("DOCKER_FILES")
													? selectedDockerIcon
													: dockerIcon
											}
											alt=""
										/>
										<p
											style={{
												color: system.includes("DOCKER_FILES")
													? "white"
													: "#171725",
											}}
										>
											Docker files
										</p>
									</div>

									<div
										style={{
											border: system.includes("DOCKER_FILES")
												? "1px solid transparent"
												: "1px solid #E9E9ED",
										}}
										className="task-type_card--select-circle"
									>
										<img
											style={{
												display: system.includes("DOCKER_FILES")
													? "block"
													: "none",
											}}
											src={selectedDot}
											alt=""
										/>
									</div>
								</div>
							</div>

							<div className="card-set card-set_margin-between">
								<div
									onClick={() => this.toggleDeliverables("END_TO_END_TESTS")}
									className="task-type_card"
									style={{
										background: system.includes("END_TO_END_TESTS")
											? "#1371FD"
											: "white",
									}}
								>
									<div className="task-type_card--info-box">
										<img
											src={
												system.includes("END_TO_END_TESTS")
													? selectedTestIcon
													: testIcon
											}
											alt=""
										/>
										<p
											style={{
												color: system.includes("END_TO_END_TESTS")
													? "white"
													: "#171725",
											}}
										>
											Unit and End to End testing
										</p>
									</div>

									<div
										style={{
											border: system.includes("END_TO_END_TESTS")
												? "1px solid transparent"
												: "1px solid #E9E9ED",
										}}
										className="task-type_card--select-circle"
									>
										<img
											style={{
												display: system.includes("END_TO_END_TESTS")
													? "block"
													: "none",
											}}
											src={selectedDot}
											alt=""
										/>
									</div>
								</div>

								<div
									onClick={() => this.toggleDeliverables("CUSTOM_DELIVERABLES")}
									className="task-type_card"
									style={{
										background: system.includes("CUSTOM_DELIVERABLES")
											? "#1371FD"
											: "white",
									}}
								>
									<div className="task-type_card--info-box">
										<img
											src={
												system.includes("CUSTOM_DELIVERABLES")
													? selectedPlusIcon
													: plusIcon
											}
											alt=""
										/>
										<p
											style={{
												color: system.includes("CUSTOM_DELIVERABLES")
													? "white"
													: "#171725",
											}}
										>
											Add your own deliverable standard
										</p>
									</div>

									<div
										style={{
											border: system.includes("CUSTOM_DELIVERABLES")
												? "1px solid transparent"
												: "1px solid #E9E9ED",
										}}
										className="task-type_card--select-circle"
									>
										<img
											style={{
												display: system.includes("CUSTOM_DELIVERABLES")
													? "block"
													: "none",
											}}
											src={selectedDot}
											alt=""
										/>
									</div>
								</div>
							</div>
							{system.includes("CUSTOM_DELIVERABLES") ? (
								<div className="custom-deliverables_box">
									<p className="modal-content_subtitle">
										Describe your own deliverable standard
										<span className="validation_error-message">
											{this.state.customDeliverablesError}
										</span>
									</p>
									<textarea
										onChange={this.onChangeHandler}
										style={{
											marginBottom: "24px",
											minHeight: "101px",
										}}
										type="text"
										name="datasource"
										defaultValue={this.state.customDeliverables}
									/>
								</div>
							) : null}
						</div>
					</div>
				</div>

				<div className="wizard-button_box">
					<div onClick={prevStep} className="wizard_button wizard-back_button">
						<p>Back</p>
					</div>

					<div
						onClick={this.continue}
						className="wizard_button wizard-next_button"
					>
						<p>Next</p>
					</div>
				</div>
			</div>
		);
	}
}
