import React, { Component } from "react";
import "./Languages.css";
import selectedTagClose from "./Languages_img/tagClose.svg";
import Autosuggest from "react-autosuggest";
import "./Autocomplete/Autocomplete.css";

const popularTags = [
	"C++",
	"C#",
	"Java",
	"React",
	"Joomla",
	"Wordpress",
	"Javascript",
	"Laravel",
	"Node JS",
	"Ruby",
	"Swift",
	"CSS",
	"HTML",
	"Drupal",
	"Kotlin",
	".NET",
	"IOS",
	"Android",
	"AWS",
];
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
		name: "Java10",
	},
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

export default class Languages extends Component {
	state = {
		value: "",
		suggestions: [],
		selectedTags: [],
	};

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue,
			inputError: "",
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
	addSelectedTag = (name) => {
		if (this.state.selectedTags.length < 10) {
			let popularTags = [...this.state.popularTags];
			let selectedTags = [...this.state.selectedTags];
			let index = popularTags.indexOf(name);
			popularTags.splice(index, 1);
			selectedTags.push(name);
			this.setState({ popularTags, selectedTags });
		} else {
			this.setState({ inputError: "* exceeded limit" });
		}
	};
	removeSelectedTag = (name) => {
		if (popularTags.includes(name)) {
			let selectedTags = [...this.state.selectedTags];
			let popularTags = [...this.state.popularTags];
			let index = selectedTags.indexOf(name);
			selectedTags.splice(index, 1);
			popularTags.push(name);
			this.state.inputError = "";
			this.setState({ popularTags, selectedTags });
		} else {
			let selectedTags = [...this.state.selectedTags];
			let index = selectedTags.indexOf(name);
			selectedTags.splice(index, 1);
			this.setState({ selectedTags });
		}
	};
	addInputTag = (event) => {
		if (event.key === "Enter" && this.state.value) {
			const blockedRegex = /[\[\]!@#$%^&*(),.?":{}|<>]/;

			if (this.state.value.match(blockedRegex)) {
				this.setState({ inputError: "* only string values" });
			} else {
				if (this.state.value.length < 30) {
					let value = this.state.value;
					let valueLowerCase = this.state.value.toLowerCase();
					let selectedTags = [...this.state.selectedTags];
					let popularTags = [...this.state.popularTags];

					let popularTagsLowerCase = popularTags.map((lowerCase) => {
						return lowerCase.toLowerCase();
					});

					let selectedTagsLowerCase = selectedTags.map((lowerCase) => {
						return lowerCase.toLowerCase();
					});

					if (popularTagsLowerCase.includes(valueLowerCase)) {
						let index = popularTagsLowerCase.indexOf(valueLowerCase);
						selectedTags.push(popularTags[index]);
						popularTags.splice(index, 1);
						value = "";
						this.setState({ selectedTags, popularTags, value });
					} else {
						if (!selectedTagsLowerCase.includes(valueLowerCase)) {
							selectedTags.push(value);
							value = "";
							this.setState({ selectedTags, value });
						} else {
							return;
						}
					}
				} else {
					this.setState({ inputError: "* too long string" });
				}
			}
		}
	};
	componentDidMount() {
		if (this.props.containerState) {
			this.setState({
				popularTags: this.props.containerState.popularTags,
				selectedTags: this.props.containerState.selectedTags,
			});
		}
		this.setState({ popularTags });
	}
	validation = () => {
		let inputError = "";

		console.log("IM DOING VALIDATION");

		if (this.state.selectedTags.length === 0) {
			inputError = "* chose a language";
		}

		if (inputError) {
			this.setState({ inputError });
			console.log("FAILED VALIDATION");
			return false;
		}
		console.log("GOOD GOOD");
		return true;
	};
	continue = () => {
		const isValid = this.validation();
		if (isValid) {
			const taxonomy = {
				taxonomy: {
					selectedTags: this.state.selectedTags,
					popularTags: this.state.popularTags,
				},
			};
			this.props.setWizardProperties(taxonomy);
			this.props.nextStep();
		}
	};

	render() {
		const { value, suggestions, inputError } = this.state;
		const inputProps = {
			placeholder: "e.g., Java, React, Drupal, etc.",
			value,
			onChange: this.onChange,
		};

		const { prevStep } = this.props;

		return (
			<div className="languages_frame" onKeyPress={this.addInputTag}>
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>What languages and frameworks are you looking for?</p>
					</div>

					<div className="modal-content_box">
						<p className="modal-content_subtitle">
							Languages and/or frameworks
							<span className="validation_error-message">{inputError}</span>
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
								? this.state.selectedTags.map((name) => {
										return (
											<div className="selected_tag" key={name}>
												<p>{name}</p>
												<img
													onClick={() => this.removeSelectedTag(name)}
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
						</p>

						<div className="languages-popular-tags_output">
							{this.state.popularTags
								? this.state.popularTags.map((name) => {
										return (
											<div
												onClick={() => this.addSelectedTag(name)}
												className="popular_tag"
												key={name}
											>
												<p>{name}</p>
											</div>
										);
								  })
								: null}
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
