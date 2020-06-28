import React, { Component } from "react";

export default class GeneralPurposeAPI extends Component {
	render() {
		return (
			<>
				<p className="modal-content_subtitle">
                    API request (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    // onChange={this.onChangeHandler}
                    style={{
                        marginBottom: "24px",
                        minHeight: "101px"
                    }}
					type="text"
                    name="companyName"
                    
                   
					// defaultValue={this.state.companyName}
				/>

                <p className="modal-content_subtitle">
                    API responce (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    // onChange={this.onChangeHandler}
                    style={{
                        minHeight: "101px"
                    }}
					type="text"
                    name="companyName"
                    
					// defaultValue={this.state.companyName}
				/>
			</>
		);
	}
}
