import React, { Component } from "react";

export default class SpaLandingpageComponent extends Component {
	render() {
		return (
			<>
                <p className="modal-content_subtitle">
                    Design
					<span className="validation_error-message"></span>
				</p>

				<input
                    // onChange={this.onChangeHandler}
                    style={{
                        marginBottom: "16px"
                    }}
					type="text"
                    name="companyName"
                    autoComplete="off"
                    placeholder="Paste link"
					// defaultValue={this.state.companyName}
				/>

				<p className="modal-content_subtitle">
                    API request (optional)
					<span className="validation_error-message"></span>
				</p>

               
                <p 
                    style={{
                        marginBottom: "32px"
                    }}
                    className="attach-file-button"
                >
                    + Attach files
                </p>
               

				<p className="modal-content_subtitle">
                    APIs
					<span className="validation_error-message"></span>
				</p>

				<input
                    // onChange={this.onChangeHandler}
                    style={{
                        marginBottom: "16px"
                    }}
					type="text"
                    name="companyName"
                    autoComplete="off"
                   
					// defaultValue={this.state.companyName}
				/>
                <input
                    // onChange={this.onChangeHandler}
                    style={{
                        marginBottom: "16px"
                    }}
					type="text"
                    name="companyName"
                    autoComplete="off"
                   
					// defaultValue={this.state.companyName}
				/>
			</>
		);
	}
}