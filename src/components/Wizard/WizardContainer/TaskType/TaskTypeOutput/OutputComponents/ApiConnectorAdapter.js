import React, { Component } from "react";

export default class ApiConnectorAdapter extends Component {

    state = {}

    componentWillMount(){
        if(this.props.taskTypeDataKey.connectorAdapter){
            let dataKey = this.props.taskTypeDataKey.connectorAdapter;
                this.setState({
                    apiRequest: dataKey.apiRequest,
                    apiResponse: dataKey.apiResponse,
                    documentation: dataKey.documentation
                })
        } else {
            const connectorAdapter = {
                connectorAdapter : {
                    apiRequest: "",
                    apiResponse: "",
                    documentation: ""
                }   
            }
            this.props.setTaskTypeState(connectorAdapter)
            this.setState(Object.values(connectorAdapter)[0])
        }
        
    }

	render() {

        const {outputOnChange} = this.props;
       
		return (
			<>
                <p className="modal-content_subtitle">
                    Link to documentation
					<span className="validation_error-message"></span>
				</p>
				<input
                    onChange={outputOnChange("connectorAdapter")}
                    style={{
                        marginBottom: "24px"
                    }}
					type="text"
                    name="documentation"
                    autoComplete="off"
                    defaultValue={this.state.documentation}
				/>
				<p className="modal-content_subtitle">
                    API request (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    onChange={outputOnChange("connectorAdapter")}
                    className="general-purpose-api_textarea general-purpose-api_textarea--margin-bottom"
					type="text"
                    name="apiRequest"
                    style={{
                        marginBottom: "24px",
                        minHeight: "101px"
                    }}
                    defaultValue={this.state.apiRequest}
				/>

                <p className="modal-content_subtitle">
                    API responce (optional)
					<span className="validation_error-message"></span>
				</p>
				<textarea
                    onChange={outputOnChange("connectorAdapter")}
                    className="general-purpose-api_textarea"
					type="text"
                    name="apiResponse"
                    style={{
                        marginBottom: "24px",
                        minHeight: "101px"
                    }}
					defaultValue={this.state.apiResponse}
				/>
			</>
		);
	}
}
