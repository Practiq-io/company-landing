import React, { Component } from "react";
import "./Languages.css";
import selectedTagClose from "./Languages_img/tagClose.svg";
import Autosuggest from "react-autosuggest";
import "./Autocomplete/Autocomplete.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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


export default class Languages extends Component {
	state = {
		value: "",
		suggestions: [],
		selectedTags: [],
		customDeliverables: "",
		system: []
	};
	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue,
			inputError: "",
		});
	};
	escapeRegexCharacters(str) {
		return str.replace(/[.*+?^${}()|[\\]/g, "\\$&");
	}
	getSuggestions(value) {
		const escapedValue = this.escapeRegexCharacters(value.trim());
	
		if (escapedValue === "") {
			return [];
		}
	
		const regex = new RegExp("^" + escapedValue, "i");
	
		return allTags.filter((language) => regex.test(language.name));
	}
	getSuggestionValue(suggestion) {
		return suggestion.name;
	}
	renderSuggestion(suggestion) {
		return (
			<div
				className="custom-styles_span"
			>
				{suggestion.name}
			</div>
		);
	}
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.getSuggestions(value),
		});
	};
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};
	addPopularTag = (name) => {
		if (this.state.selectedTags.length < 10) {
			let newSelectedTag = [name, "junior"];
			let popularTags = [...this.state.popularTags];
			let selectedTags = [...this.state.selectedTags];
			let index = popularTags.indexOf(name);
			popularTags.splice(index, 1);
			selectedTags.push(newSelectedTag);
			this.setState({ popularTags, selectedTags });
		} else {
			this.setState({ inputError: "* exceeded limit" });
		}
	};
	removeSelectedTag = (name) => {
		if (popularTags.includes(name)) {
			let selectedTags = [...this.state.selectedTags];
			let popularTags = [...this.state.popularTags];
			let inputError = { ...this.state.inputError };
			selectedTags.forEach((tag, i) => {
				if (tag[0].includes(name)) {
					selectedTags.splice(i, 1);
				}
			});
			popularTags.push(name);
			inputError = "";
			this.setState({ popularTags, selectedTags, inputError });
		} else {
			let selectedTags = [...this.state.selectedTags];
			selectedTags.forEach((tag, i) => {
				if (tag[0].includes(name)) {
					selectedTags.splice(i, 1);
				}
			});
			this.setState({ selectedTags });
		}
	};
	addInputTagFunction = () => {
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		if (this.state.value.match(blockedRegex)) {
			this.setState({ inputError: "* only string values" });
		} else {
			if (this.state.value.length < 30) {
				if (this.state.selectedTags.length < 10) {
					let value = this.state.value;
					let valueLowerCase = this.state.value.toLowerCase();
					let selectedTags = [...this.state.selectedTags];
					let popularTags = [...this.state.popularTags];

					let popularTagsLowerCase = popularTags.map((lowerCase) => {
						return lowerCase.toLowerCase();
					});

					let selectedTagsLowerCase = selectedTags.map((lowerCase) => {
						return lowerCase[0].toLowerCase();
					});

					if (popularTagsLowerCase.includes(valueLowerCase)) {
						let index = popularTagsLowerCase.indexOf(valueLowerCase);
						let newSelectedTag = [popularTags[index], "junior"];
						selectedTags.push(newSelectedTag);
						popularTags.splice(index, 1);
						value = "";
						this.setState({ selectedTags, popularTags, value });
					} else {
						if (!selectedTagsLowerCase.includes(valueLowerCase)) {
							let newSelectedTag = [value, "junior"];
							selectedTags.push(newSelectedTag);
							value = "";
							this.setState({ selectedTags, value });
						} else {
							this.setState({ inputError: "* this tag is already selected" });
						}
					}
				} else {
					this.setState({ inputError: "* exceeded limit" });
				}
			} else {
				this.setState({ inputError: "* too long string" });
			}
		}
	};
	addInputTagAutosuggest = (name) => {
		let languageName = name;
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		if (languageName.match(blockedRegex)) {
			this.setState({ inputError: "* only string values" });
		} else {
			if (languageName.length < 30) {
				if (this.state.selectedTags.length < 10) {
					let value = languageName;
					let valueLowerCase = languageName.toLowerCase();
					let selectedTags = [...this.state.selectedTags];
					let popularTags = [...this.state.popularTags];

					let popularTagsLowerCase = popularTags.map((lowerCase) => {
						return lowerCase.toLowerCase();
					});

					let selectedTagsLowerCase = selectedTags.map((lowerCase) => {
						return lowerCase[0].toLowerCase();
					});

					if (popularTagsLowerCase.includes(valueLowerCase)) {
						let index = popularTagsLowerCase.indexOf(valueLowerCase);
						let newSelectedTag = [popularTags[index], "junior"];
						selectedTags.push(newSelectedTag);
						popularTags.splice(index, 1);
						value = "";
						this.setState({ selectedTags, popularTags, value });
					} else {
						if (!selectedTagsLowerCase.includes(valueLowerCase)) {
							let newSelectedTag = [value, "junior"];
							selectedTags.push(newSelectedTag);
							value = "";
							this.setState({ selectedTags, value });
						} else {
							this.setState({ inputError: "* this tag is already selected" });
						}
					}
				} else {
					this.setState({ inputError: "* exceeded limit" });
				}
			} else {
				this.setState({ inputError: "* too long string" });
			}
		}
	};
	addInputTag = (event) => {
		if (event.key === "Enter") {
			if (this.state.value) {
				this.addInputTagFunction();
			} else {
				this.setState({ inputError: "* language input is empty" });
			}
		} else if (event.type === "click") {
			if (this.state.value) {
				this.addInputTagFunction();
			} else {
				this.setState({ inputError: "* language input is empty" });
			}
		}
	};
	componentDidMount() {
		if (this.props.containerState) {
			this.setState(this.props.containerState);
		} else {
			this.setState({ popularTags });
		}
		this.setState({ screenWidth: window.innerWidth });
	}
	validation = () => {
		if (this.state.selectedTags.length === 0) {
			this.setState({ inputError: "* choose a language" });
			return false;
		}
		return true;
	};
	continue = () => {
		const isValid = this.validation();
		if (isValid) {
			const taxonomy = {
				taxonomy: {
					selectedTags: this.state.selectedTags,
					popularTags: this.state.popularTags,
					customDeliverables: this.state.customDeliverables,
					system: this.state.system,
				},
			};
			this.props.setWizardProperties(taxonomy);
			this.props.nextStep();
		}
	};
	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) =>{
		this.addInputTagAutosuggest(suggestionValue)
    };	

	render() {
		const { value, suggestions, inputError, screenWidth } = this.state;
		const inputProps = {
			placeholder: screenWidth > 370 ? "e.g., Java, React, Drupal, etc." : "",
			value,
			onChange: this.onChange
		};

		const { prevStep } = this.props;

		return (
			<div className="wizard-modal_content-box" onKeyPress={this.addInputTag}>
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>What languages and frameworks are you looking for?</p>
					</div>

					<div className="modal-content_box">
						<p className="modal-content_subtitle">
							Languages and/or frameworks
							<span className="validation_error-message">{inputError}</span>
						</p>

						<div className="mobile-add-button_wrapper">
							<Autosuggest
								className="autosuggest-input"
								suggestions={suggestions}
								onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
								onSuggestionsClearRequested={this.onSuggestionsClearRequested}
								getSuggestionValue={this.getSuggestionValue}
								renderSuggestion={this.renderSuggestion}
								inputProps={inputProps}
								onSuggestionSelected={this.onSuggestionSelected}
							/>
							<p
								onClick={this.addInputTag}
								style={{
									color: this.state.value ? "#1371FD" : "#B1B1B8",
									cursor: this.state.value ? "pointer" : "context-menu",
									pointerEvents: this.state.value ? "auto" : "none",
									marginBottom: "32px",
								}}
								className="mobile-add-button"
							>
								+ Add tag
							</p>
						</div>

						<TransitionGroup className="languages-selected-tags_output">
							{this.state.selectedTags
								? this.state.selectedTags.map((name) => {
										return (
											<CSSTransition
												key={name[0]}
												timeout={100}
												classNames="tags-fade"
											>
												<div className="selected_tag" key={name[0]}>
													<p>{name[0]}</p>
													<img
														onClick={() => this.removeSelectedTag(name[0])}
														className="selected-tag_close-button"
														src={selectedTagClose}
														alt=""
													/>
												</div>
											</CSSTransition>
										);
								  })
								: null}
						</TransitionGroup>

						<p className="modal-content_subtitle">
							Or select from the following:
						</p>
						<TransitionGroup className="languages-popular-tags_output">
							{this.state.popularTags
								? this.state.popularTags.map((name) => {
										return (
											<CSSTransition
												key={name}
												timeout={100}
												classNames="tags-fade"
											>
												<div
													onClick={() => this.addPopularTag(name)}
													className="popular_tag"
													key={name}
												>
													<p>{name}</p>
												</div>
											</CSSTransition>
										);
								  })
								: null}
						</TransitionGroup>
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
