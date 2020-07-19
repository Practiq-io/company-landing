import React, { Component } from "react";
import "./Timeline.css";
import selectedDot from "./TimelineImg/timeline-selected-dot.svg";

const firstTimeline = "3 days";
const secondTimeline = "7 days";
const thirdTimeline = "14 days";

export default class Timeline extends Component {
	state = {
		customTimeline: "",
		timeline: "",
	};

	componentDidMount() {
		if (this.props.containerState) {
			this.setState(this.props.containerState);
		}
	}

	onChangeHandler = (e) => {
		let timeline = this.state.timeline;
		if (timeline !== "") {
			timeline = "";
			this.setState({ timeline });
		}
		let customTimeline = this.state.customTimeline;
		customTimeline = e.target.value;
		this.setState({ customTimeline });
	};

	selectTimelines = (name) => {
		let customTimeline = this.state.customTimeline;
		if (customTimeline !== "") {
			customTimeline = "";
			this.setState({ customTimeline });
		}
		let timeline = this.state.timeline;
		if (timeline !== name) {
			timeline = name;
			this.setState({ timeline });
		}
	};

	validation = () => {
		let customTimelineError = "";
		let emptyTimelineError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;

		if (this.state.timeline === "" && this.state.customTimeline === "") {
			emptyTimelineError = "* please set the timelines";
		}
		if (this.state.customTimeline.length > 30) {
			customTimelineError = "* too long string";
		} else {
			if (this.state.customTimeline.match(blockedRegex)) {
				customTimelineError = "* only string values";
			}
		}
		if (customTimelineError || emptyTimelineError) {
			this.setState({ customTimelineError, emptyTimelineError });
			return false;
		}
		return true;
	};

	continue = () => {
		let isValid = this.validation();
		if (isValid) {
			const projectTimelines = {
				projectTimelines: {
					customTimeline: this.state.customTimeline,
					timeline: this.state.timeline,
				},
			};
			this.props.setWizardProperties(projectTimelines);
			this.props.nextStep();
		}
	};

	render() {
		const {
			customTimeline,
			timeline,
			customTimelineError,
			emptyTimelineError,
		} = this.state;
		const { prevStep } = this.props;

		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>
							Set project timelines
							<span className="validation_error-message timeline-empty-error">
								{emptyTimelineError}
							</span>
						</p>
					</div>

					<div className="card-set_timeline">
						<div
							onClick={() => this.selectTimelines(firstTimeline)}
							className="timeline_card"
						>
							<div className="timeline_card--info-box">
								<p>3 days</p>
							</div>

							<div
								style={{
									border:
										timeline === firstTimeline
											? "1px solid transparent"
											: "1px solid #e9e9ed",
									background: timeline === firstTimeline ? "#1371fd" : "white",
								}}
								className="timeline_card--select-circle"
							>
								<img
									style={{
										display: timeline === firstTimeline ? "block" : "none",
									}}
									src={selectedDot}
									alt=""
								/>
							</div>
						</div>

						<div
							onClick={() => this.selectTimelines(secondTimeline)}
							className="timeline_card"
						>
							<div className="timeline_card--info-box">
								<p>7 days</p>
							</div>

							<div
								style={{
									border:
										timeline === secondTimeline
											? "1px solid transparent"
											: "1px solid #e9e9ed",
									background: timeline === secondTimeline ? "#1371fd" : "white",
								}}
								className="timeline_card--select-circle"
							>
								<img
									style={{
										display: timeline === secondTimeline ? "block" : "none",
									}}
									src={selectedDot}
									alt=""
								/>
							</div>
						</div>

						<div
							onClick={() => this.selectTimelines(thirdTimeline)}
							className="timeline_card"
						>
							<div className="timeline_card--info-box">
								<p>14 days</p>
							</div>

							<div
								style={{
									border:
										timeline === thirdTimeline
											? "1px solid transparent"
											: "1px solid #e9e9ed",
									background: timeline === thirdTimeline ? "#1371fd" : "white",
								}}
								className="timeline_card--select-circle"
							>
								<img
									style={{
										display: timeline === thirdTimeline ? "block" : "none",
									}}
									src={selectedDot}
									alt=""
								/>
							</div>
						</div>

						<div className="timeline_position-wrapper">
							<label
								className="error-message_label"
								id="timeline_label"
								htmlFor="timeline_input"
							>
								{customTimelineError}
							</label>
							<input
								id="timeline_input"
								onChange={this.onChangeHandler}
								className="custom-timeline_input"
								type="text"
								autoComplete="off"
								placeholder="Other"
								value={customTimeline}
							/>
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
						<p>Complete</p>
					</div>
				</div>
			</div>
		);
	}
}
