import React, { Component } from 'react';
import './Languages.css';
import selectedTagClose from './Languages_img/tagClose.svg';
import Autosuggest from 'react-autosuggest';
import './Autocomplete/Autocomplete.css';
import axios from '../../../../axios-endpoint.js';
import Loader from '../../wizardUI/wizardLoader';

export default class Languages extends Component {
	state = {
		value: '',
		suggestions: [],
		selectedTags: [],
		customDeliverables: '',
		system: [],
		popLoader: false,
		popularTags: [
			'React',
			'C++',
			'C#',
			'C',
			'JavaScript',
			'Angular',
			'Jquery',
			'Python',
			'Docker',
			'Wordpress',
			'Joomla',
		],
		popularTagsReference: [
			'React',
			'C++',
			'C#',
			'C',
			'JavaScript',
			'Angular',
			'Jquery',
			'Python',
			'Docker',
			'Wordpress',
			'Joomla',
		],
	};

	componentDidMount() {
		if (this.props.containerState) {
			this.setState(this.props.containerState);
			// } else {
			// 	this.setState({ popLoader: true, popularTags: [] });
			// 	axios
			// 		.get("/capabilities/skills/popular")
			// 		.then((result) => {
			// 			let popTagsArray = result.data.skills;
			// 			let popularTags = [];
			// 			let popularTagsReference = [];
			// 			popTagsArray.forEach((tag) => {
			// 				let tagName = tag.name;
			// 				popularTags.push(tagName);
			// 				popularTagsReference.push(tagName);
			// 				this.setState({ popularTags, popularTagsReference });
			// 			});
			// 			this.setState({ popLoader: false });
			// 		})
			// 		.catch((err) => {
			// 			console.log(err);
			// 			this.setState({ popLoader: false, popTagsError: err.toString() });
			// 		});
		}
		this.setState({ screenWidth: window.innerWidth });
	}

	onChange = (event, { newValue, method }) => {
		this.setState({
			value: newValue,
			inputError: '',
		});
	};
	escapeRegexCharacters(str) {
		return str.replace(/[.*+?^${}()|[\\]/g, '\\$&');
	}
	getSuggestionValue(suggestion) {
		return suggestion.name;
	}
	renderSuggestion(suggestion) {
		// return <div className="custom-styles_span">{suggestion.name}</div>;
	}
	onSuggestionsFetchRequested = ({ value }) => {
		axios
			.get('/capabilities/skills', { params: { q: value } })
			.then((result) => {
				let newSuggestions = result.data.skills;
				this.setState({
					suggestions: newSuggestions,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};
	onSuggestionSelected = (
		event,
		{ suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
	) => {
		this.addInputTagAutosuggest(suggestionValue);
	};

	addPopularTag = (name) => {
		if (this.state.selectedTags.length < 10) {
			let popularTags = [...this.state.popularTags];
			let index = popularTags.indexOf(name);
			popularTags.splice(index, 1);
			let newSelectedTag = [name, 'junior'];
			let selectedTags = [...this.state.selectedTags];
			selectedTags.push(newSelectedTag);
			this.setState({ popularTags, selectedTags });
		} else {
			this.setState({ inputError: '* exceeded limit' });
		}
	};
	removeSelectedTag = (name) => {
		if (this.state.popularTagsReference.includes(name)) {
			let selectedTags = [...this.state.selectedTags];
			let popularTags = [...this.state.popularTags];
			let inputError = { ...this.state.inputError };
			selectedTags.forEach((tag, i) => {
				if (tag[0].includes(name)) {
					selectedTags.splice(i, 1);
				}
			});
			popularTags.push(name);
			inputError = '';
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
			this.setState({ inputError: '* only string values' });
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
						let newSelectedTag = [popularTags[index], 'junior'];
						selectedTags.push(newSelectedTag);
						popularTags.splice(index, 1);
						value = '';
						this.setState({ selectedTags, popularTags, value });
					} else {
						if (!selectedTagsLowerCase.includes(valueLowerCase)) {
							let newSelectedTag = [value, 'junior'];
							selectedTags.push(newSelectedTag);
							value = '';
							this.setState({ selectedTags, value });
						} else {
							this.setState({ inputError: '* this tag is already selected' });
						}
					}
				} else {
					this.setState({ inputError: '* exceeded limit' });
				}
			} else {
				this.setState({ inputError: '* too long string' });
			}
		}
	};
	addInputTagAutosuggest = (name) => {
		let languageName = name;
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		if (languageName.match(blockedRegex)) {
			this.setState({ inputError: '* only string values' });
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
						let newSelectedTag = [popularTags[index], 'junior'];
						selectedTags.push(newSelectedTag);
						popularTags.splice(index, 1);
						value = '';
						this.setState({ selectedTags, popularTags, value });
					} else {
						if (!selectedTagsLowerCase.includes(valueLowerCase)) {
							let newSelectedTag = [value, 'junior'];
							selectedTags.push(newSelectedTag);
							value = '';
							this.setState({ selectedTags, value });
						} else {
							this.setState({ inputError: '* this tag is already selected' });
						}
					}
				} else {
					this.setState({ inputError: '* exceeded limit' });
				}
			} else {
				this.setState({ inputError: '* too long string' });
			}
		}
	};
	addInputTag = (event) => {
		if (event.key === 'Enter') {
			if (this.state.value) {
				this.addInputTagFunction();
			} else {
				this.setState({ inputError: '* language input is empty' });
			}
		} else if (event.type === 'click') {
			if (this.state.value) {
				this.addInputTagFunction();
			} else {
				this.setState({ inputError: '* language input is empty' });
			}
		}
	};
	validation = () => {
		if (this.state.selectedTags.length === 0) {
			this.setState({ inputError: '* choose a language' });
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
					system: this.state.system,
					popularTagsReference: this.state.popularTagsReference,
				},
			};
			this.props.setWizardProperties(taxonomy);
			this.props.nextStep();
		}
	};

	render() {
		const { value, suggestions, inputError, screenWidth } = this.state;
		const inputProps = {
			placeholder: screenWidth > 370 ? 'e.g., Java, React, Drupal, etc.' : '',
			value,
			onChange: this.onChange,
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
									color: this.state.value ? '#1371FD' : '#B1B1B8',
									cursor: this.state.value ? 'pointer' : 'context-menu',
									pointerEvents: this.state.value ? 'auto' : 'none',
									marginBottom: '32px',
								}}
								className="mobile-add-button"
							>
								+ Add tag
							</p>
						</div>

						<div className="languages-selected-tags_output">
							{this.state.selectedTags
								? this.state.selectedTags.map((name) => {
										return (
											<div className="selected_tag" key={name[0]}>
												<p>{name[0]}</p>
												<img
													onClick={() => this.removeSelectedTag(name[0])}
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
							{this.state.popTagsError ? (
								<p>{this.state.popTagsError}</p>
							) : null}
							{this.state.popLoader ? <Loader /> : null}
							{this.state.popularTags
								? this.state.popularTags.map((name) => {
										return (
											<div
												onClick={() => this.addPopularTag(name)}
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
