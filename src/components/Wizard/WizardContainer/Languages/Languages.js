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
	net: ".NET",
	ios: "IOS",
	android: "Android",
	aws: "AWS",
	java: "Java",
};

// const selectedTags = {
// 	ios: "IOS",
// 	android: "Android",
// 	aws: "AWS",
// 	java: "Java",
// };





export default class Languages extends Component {
	state = {};

	// componentWillMount() {
	// 	this.setState({ popularTags, selectedTags });
	// }
	componentDidMount() {
		this.setState({ popularTags });
	}
	
	addPopularTag = (key, value) => {

		console.log("triggered with key===>",key,"And value ===>",value);

		let popularTags = {...this.state.popularTags};
		delete popularTags[key];
		let selectedTags = {...this.state.selectedTags};
		selectedTags[key] = value;
		this.setState({popularTags, selectedTags})

	};

	removeSelectedTag = (key, value) => {
		console.log("REMOVE IS TRIGGERED");
		
		console.log("triggered with Selected Key===>",key,"And Selected Value ===>",value);
		if(key in popularTags) {
			let selectedTags = {...this.state.selectedTags};
			let popularTags = {...this.state.popularTags};
			delete selectedTags[key];
			popularTags[key] = value;
			this.setState({popularTags, selectedTags});
		} else {
			let selectedTags = {...this.state.selectedTags};
			delete selectedTags[key];
		}

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



		console.log(this.state.selectedTags, "I WILL SEND THIS TO CONTAINER");
		
		

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
							autocomplete="off"
							className="languages_input"
							// onChange={this.onChangeHandler}
							type="text"
							name="companyName"
							placeholder="e.g., Java, React, Drupal, etc."
						/>

						<div className="languages-selected-tags_output">
							{ this.state.selectedTags ? 
								Object.keys(this.state.selectedTags).map((key) => {
									const popularTagValue = this.state.selectedTags[key];
									const popularTagKey = key;
									return (
										<div className="selected_tag" key={key}>
											<p>{popularTagValue}</p>
											<img
												onClick={() => this.removeSelectedTag(popularTagKey, popularTagValue)}
												className="selected-tag_close-button"
												src={selectedTagClose}
												alt=""
											/>
										</div>
									);
								})
								: null
							}

						</div>

						<p className="modal-content_subtitle">
							Or select from the following:
							{/* <span className="about-company_error-message">
								{companyNameError}
							</span> */}
						</p>

						<div className="languages-popular-tags_output">

							{ this.state.popularTags ?
								Object.keys(this.state.popularTags).map((key) => {
									const selectedTagValue = this.state.popularTags[key];
									const selectedTagKey = key;
									return (
										<div 
											onClick={() => this.addPopularTag(selectedTagKey,selectedTagValue)}
											className="popular_tag" 
											key={key}
										>
											<p>{selectedTagValue}</p>
										</div>
									);
								}) : null
							}

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
