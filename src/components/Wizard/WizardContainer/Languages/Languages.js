import React, { Component } from "react";
import "./Languages.css";
import selectedTagClose from './Languages_img/tagClose.svg';

export default class Languages extends Component {
	render() {
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
							{/* <span className="about-company_error-message">
								{companyNameError}
							</span> */}
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

								

								<div className="selected_tag">
									<p>Javascript</p>
									<img src={selectedTagClose} alt=""/>
								</div>
								
								<div className="selected_tag">
									<p>HTML</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Ruby</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Wordpress</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>React</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Node JS</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Java</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Bootstrap</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>CSS</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>C++</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Asembler</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Swift</p>
									<img src={selectedTagClose} alt=""/>
								</div>
								<div className="selected_tag">
									<p>Rust</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>C#</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Angular</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Noorka</p>
									<img src={selectedTagClose} alt=""/>
								</div>

								<div className="selected_tag">
									<p>Stos</p>
									<img src={selectedTagClose} alt=""/>
								</div>

							</div>
						

						<p className="modal-content_subtitle">
							Or select from the following:
							{/* <span className="about-company_error-message">
								{companyNameError}
							</span> */}
						</p>

						<div className="languages-popular-tags_output">

							<div className="popular_tag">
								<p>Javascript</p>
							</div>

							<div className="popular_tag">
								<p>React</p>
							</div>

							<div className="popular_tag">
								<p>CSS</p>
							</div>

							<div className="popular_tag">
								<p>Drupal</p>
							</div>

							<div className="popular_tag">
								<p>React Native</p>
							</div>

							<div className="popular_tag">
								<p>PHP</p>
							</div>

							<div className="popular_tag">
								<p>Java</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>Laravel</p>
							</div>

							<div className="popular_tag">
								<p>IOS</p>
							</div>

							<div className="popular_tag">
								<p>Android</p>
							</div>

							<div className="popular_tag">
								<p>AWS</p>
							</div>

							<div className="popular_tag">
								<p>Swift</p>
							</div>

							<div className="popular_tag">
								<p>Kotlin</p>
							</div>

							<div className="popular_tag">
								<p>Wordpress</p>
							</div>

							<div className="popular_tag">
								<p>.NET</p>
							</div>

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
