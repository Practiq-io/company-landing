import React, { Component } from "react";
import "./Languages.css";
import selectedTagClose from "./Languages_img/tagClose.svg";

const popularTags = {
	javascript: "Javascript",
	react: "React",
	laravel: "Laravel",
	nodeJs: "Node JS",
	ruby: "Ruby",
	cPlusPlus: "C++",
	cSharp: "C#",
	swift: "Swift",
	css: "CSS",
	html: "HTML",
	drupal: "Drupal",
	wordpress: "Wordpress",
	reactNative: "React Native",
	php: "PHP",
	kotlin: "Kotlin",
	net: ".NET"
};

const selectedTags = {
	ios: "IOS",
	android: "Android",
	aws: "AWS",
	java: "Java",
};





export default class Languages extends Component {
	state = {};

	componentWillMount() {
		this.setState({ popularTags, selectedTags });
	}
	

	render() {


		// const languages = {
		// 	iso:"IOS",
		// 	aws: "AWS",
		// 	javascript: "Javascript"
		// }
		// console.log(languages, "LANGUAGES OBJECT");
		// Object.keys(languages).forEach(key => {
		// 	console.log(languages[key], "LANGUAGES DATA");
			
		// })




		

		const { errorMessage } = this.state;
		const { toggleWizard, prevStep } = this.props;

		return (
			<div className="languages_frame">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>What languages and frameworks are you looking for?</p>
					</div>

					<div className="modal-content_box">
						<p className="modal-content_subtitle">
							Languages and/or frameworks
							<span className="validation_error-message">{errorMessage}</span>
						</p>
						<input
							className="languages_input"
							// onChange={this.onChangeHandler}
							type="text"
							name="companyName"
							placeholder="e.g., Java, React, Drupal, etc."
							// defaultValue={this.state.companyName}
						/>

						<div className="languages-selected-tags_output">
							{Object.keys(this.state.selectedTags).map((key) => {
								const tagData = this.state.selectedTags[key];
								return (
									<div className="selected_tag" key={key}>
										<p>{tagData}</p>
										<img
											className="selected-tag_close-button"
											src={selectedTagClose}
											alt=""
										/>
									</div>
								);
							})}

							{/* 
								<div className="selected_tag">
									
									<p>Ruby</p>
									
										<img className="selected-tag_close-button" src={selectedTagClose} alt=""/>
								
								</div> */}
						</div>

						<p className="modal-content_subtitle">
							Or select from the following:
							{/* <span className="about-company_error-message">
								{companyNameError}
							</span> */}
						</p>

						<div className="languages-popular-tags_output">

							{Object.keys(this.state.popularTags).map((key) => {
								const tagData = this.state.popularTags[key];
								return (
									<div className="popular_tag" key={key}>
										<p>{tagData}</p>
									</div>
								);
							})}

							{/* 
							<div className="popular_tag">
								<p>Javascript</p>
							</div> */}

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
