import React, { Component } from "react";
import "./Languages.css";
import selectedTagClose from "./Languages_img/tagClose.svg";
import Autosuggest from "react-autosuggest";
import './Autocomplete/Autocomplete.css';

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
const arrayTags = [
	"C++","C#","Java","React","Joomla","Wordpress"
]
const allTags = [
	{
		name: "Java",
	},
	{
		name: "Java SE",
	},
	{
		name: "Java Docs",
	},
	{
		name: "Javascript",
	},
	{
		name: "React",
	},
	{
		name: "Laravel",
	},
	{
		name: "Node JS",
	},
	{
		name: "Ruby",
	},
	{
		name: "C++",
	},
	{
		name: "C#",
	},
	{
		name: "Swift",
	},
	{
		name: "CSS",
	},
	{
		name: "HTML",
	},
	{
		name: "Drupal",
	},
	{
		name: "Wordpress",
	},
	{
		name: "React Native",
	},
	{
		name: "PHP",
	},
	{
		name: "Perl",
	},
	{
		name: "Scala",
	},
	{
		name: "Haskell",
	},
	{
		name: "Java1",
	},
	{
		name: "Java2",
	},
	{
		name: "Java3",
	},
	{
		name: "Java4",
	},
	{
		name: "Java5",
	},
	{
		name: "Java6",
	},
	{
		name: "Java7",
	},
	{
		name: "Java8",
	},
	{
		name: "Java9",
	},
	{
		name: "Java10"
	}
];
function escapeRegexCharacters(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getSuggestions(value) {
	const escapedValue = escapeRegexCharacters(value.trim());

	if (escapedValue === "") {
		return [];
	}

	const regex = new RegExp("^" + escapedValue, "i");

	return allTags.filter((language) => regex.test(language.name));
}
function getSuggestionValue(suggestion) {
	return suggestion.name;
}
function renderSuggestion(suggestion) {
	return <div className="custom-styles_span">{suggestion.name}</div>;
}

// const arr = ["C++","C#","Java","Node Js","Laravel"];

// const index = arr.indexOf("C++");

// console.log(arr,"LOL KEK KEK KEK");

// arr.splice(index, 1);

// console.log(arr, "AFTER DELETION");





export default class Languages extends Component {
	state = {
		value: "",
		suggestions: [],
	};

	arrayAddTag = name => {
		let arrayTags = [...this.state.arrayTags]
		let index = arrayTags.indexOf(name);
		arrayTags.splice(index, 1);
		this.setState({arrayTags})
	}

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue,
		});
	};
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		});
	};
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};

	componentDidMount() {
		// this.setState({ popularTags });
		this.setState({arrayTags})
	}

	addPopularTag = (key, value) => {
		console.log("triggered with key===>", key, "And value ===>", value);

		let popularTags = { ...this.state.popularTags };
		delete popularTags[key];
		let selectedTags = { ...this.state.selectedTags };
		selectedTags[key] = value;
		this.setState({ popularTags, selectedTags });
	};

	removeSelectedTag = (key, value) => {
		console.log("REMOVE IS TRIGGERED");

		console.log(
			"triggered with Selected Key===>",
			key,
			"And Selected Value ===>",
			value
		);
		if (key in popularTags) {
			let selectedTags = { ...this.state.selectedTags };
			let popularTags = { ...this.state.popularTags };
			delete selectedTags[key];
			popularTags[key] = value;
			this.setState({ popularTags, selectedTags });
		} else {
			let selectedTags = { ...this.state.selectedTags };
			delete selectedTags[key];
		}
	};

	render() {
		const { value, suggestions, errorMessage } = this.state;
		const inputProps = {
			placeholder: "e.g., Java, React, Drupal, etc.",
			value,
			onChange: this.onChange,
		};
		console.log(this.state.selectedTags, "I WILL SEND THIS TO CONTAINER");
		
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

						<Autosuggest
							suggestions={suggestions}
							onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
							onSuggestionsClearRequested={this.onSuggestionsClearRequested}
							getSuggestionValue={getSuggestionValue}
							renderSuggestion={renderSuggestion}
							inputProps={inputProps}
						/>

						<div className="languages-selected-tags_output">
							{this.state.selectedTags
								? Object.keys(this.state.selectedTags).map((key) => {
										const popularTagValue = this.state.selectedTags[key];
										const popularTagKey = key;
										return (
											<div className="selected_tag" key={key}>
												<p>{popularTagValue}</p>
												<img
													onClick={() =>
														this.removeSelectedTag(
															popularTagKey,
															popularTagValue
														)
													}
													className="selected-tag_close-button"
													src={selectedTagClose}
													alt=""
												/>
											</div>
										);
								  })
								: null}
						</div>

						<p className="modal-content_subtitle">
							Or select from the following:
							{/* <span className="about-company_error-message">
								{companyNameError}
							</span> */}
						</p>

						<div className="languages-popular-tags_output">
							{this.state.arrayTags
									? this.state.arrayTags.map(name => {
											
											return (
												<div
													onClick={() =>
														this.arrayAddTag(name)
													}
													className="popular_tag"
													key={name}
												>
													<p>{name}</p>
												</div>
											);
									})
									: null}
							{/* {this.state.popularTags
								? Object.keys(this.state.popularTags).map((key) => {
										const selectedTagValue = this.state.popularTags[key];
										const selectedTagKey = key;
										return (
											<div
												onClick={() =>
													this.addPopularTag(selectedTagKey, selectedTagValue)
												}
												className="popular_tag"
												key={key}
											>
												<p>{selectedTagValue}</p>
											</div>
										);
								  })
								: null} */}
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
