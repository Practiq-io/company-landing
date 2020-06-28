import React, { Component } from "react";

export default class ApiConnectorAdapter extends Component {
	render() {
		return (
			<>
                <p className="modal-content_subtitle">
                    Link to documentation
					<span className="validation_error-message"></span>
				</p>
				<input
                    // onChange={this.onChangeHandler}
                    style={{
                        marginBottom: "24px"
                    }}
					type="text"
                    name="companyName"
                    autoComplete="off"
                   
					// defaultValue={this.state.companyName}
				/>
				<p className="modal-content_subtitle">
                    API request (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    // onChange={this.onChangeHandler}
                    className="general-purpose-api_textarea general-purpose-api_textarea--margin-bottom"
					type="text"
                    name="companyName"
                    style={{
                        marginBottom: "24px",
                        minHeight: "101px"
                    }}
                   
					// defaultValue={this.state.companyName}
				/>

                <p className="modal-content_subtitle">
                    API responce (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    // onChange={this.onChangeHandler}
                    className="general-purpose-api_textarea"
					type="text"
                    name="companyName"
                    style={{
                        marginBottom: "24px",
                        minHeight: "101px"
                    }}
					// defaultValue={this.state.companyName}
				/>
			</>
		);
	}
}
