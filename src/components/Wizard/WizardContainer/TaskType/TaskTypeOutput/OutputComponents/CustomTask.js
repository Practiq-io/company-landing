import React, { Component } from "react";

export default class CustomTask extends Component {
	render() {
		return ( 
			<>
				<p className="modal-content_subtitle">
                    Task description
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

			</>
		);
	}
}
