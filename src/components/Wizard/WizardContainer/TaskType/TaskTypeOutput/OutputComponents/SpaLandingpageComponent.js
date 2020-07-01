import React, { Component } from "react";
import selectedFileIcon from '../OutputComponentsImg/selected-file-icon.svg';
import fileIcon from '../OutputComponentsImg/file-icon.svg';
import deleteFileIcon from '../OutputComponentsImg/delete-file-icon.svg';
import minusIcon from '../OutputComponentsImg/minus-icon.svg';
import uuid from "uuid";




export default class SpaLandingpageComponent extends Component {
    state = {
		landingPage: {
			designLink: "",
            attachedFiles: [],
            apisFields: []
		}
    };

    
    componentWillMount() {
		if (this.props.taskTypeDataKey.landingPage) {
            let dataKey = {...this.props.taskTypeDataKey.landingPage};
            
            console.log(dataKey, " I WILL SET LOCAL STATE WITH THIS");
            
			// const landingPage = {
			// 	landingPage: {
			// 		designLink: dataKey.designLink,
			// 		attachedFiles: dataKey.attachedFiles,
			// 		apisFields: dataKey.apisFields
			// 	}
            // };
            let landingPage = {...this.state.landingPage}
            landingPage = dataKey;
			// this.props.setTaskTypeState({dataKey});
			this.setState({
				landingPage
			});
		} else {
			const landingPage = {
				landingPage: {
                    designLink: "",
                    attachedFiles: ["homepage.sketch", "profile.sketch", "ilya.sketch","roma.sketch"],
                    apisFields: []
                }
			};
			this.props.setTaskTypeState(landingPage);
			this.setState({landingPage:Object.values(landingPage)[0]});
		}
    }
    // componentDidMount() {
	// 	if (this.props.taskTypeDataKey.landingPage) {
    //         let dataKey = this.props.taskTypeDataKey.landingPage;
    //         console.log(dataKey, "IDEA TO SET THIS AS STATE to little comp");
            
	// 		const landingPage = {
	// 			landingPage: {
	// 				designLink: dataKey.designLink,
	// 				attachedFiles: dataKey.attachedFiles,
	// 				apisFields: dataKey.apisFields
	// 			}
	// 		};
	// 		this.props.setTaskTypeState(landingPage);
	// 		this.setState({
	// 			designLink: dataKey.designLink,
	// 			attachedFiles: dataKey.attachedFiles,
	// 			apisFields: dataKey.apisFields
	// 		});
	// 	} else {
	// 		const landingPage = {
	// 			landingPage: {
    //                 designLink: "",
    //                 attachedFiles: ["homepage.sketch", "profile.sketch", "ilya.sketch","roma.sketch"],
    //                 apisFields: []
    //             }
	// 		};
	// 		this.props.setTaskTypeState(landingPage);
	// 		this.setState({landingPage:Object.values(landingPage)[0]});
	// 	}
    // }
    

	render() {
        const { outputOnChange, taskTypeState, removeAttachedFile, attachFile } = this.props;
        console.log(this.state.landingPage, "LOOK FOR LINK");
        
        
		return (
			<>
                <p className="modal-content_subtitle">
                    Design
					<span className="validation_error-message"></span>
				</p>

				<input
                    onChange={outputOnChange("landingPage")}
                    style={{
                        marginBottom: "16px"
                    }}
					type="text"
                    name="designLink"
                    autoComplete="off"
                    placeholder="Paste link"
                    // defaultValue={this.state.designLink}
                    defaultValue={taskTypeState.taskData.landingPage ? taskTypeState.taskData.landingPage.designLink : ""}
				/>

				{
                    taskTypeState.taskData.landingPage ? 
                    taskTypeState.taskData.landingPage.attachedFiles.map(file => {
                        
                        return <div key={uuid()} className="attached-file_box">

                            <div className="attached-file_wrapper">

                                <img className="attached-file-icon" src={fileIcon} alt=""/>
                                <img className="attached-file-selected-icon" src={selectedFileIcon} alt=""/>
                                <p className="attached-file-name">{file}</p>
                                <img 
                                    onClick={() => removeAttachedFile(file, "landingPage")}
                                    className="delete-attached-file-icon" 
                                    src={deleteFileIcon} 
                                    alt=""
                                />

                            </div>

                        </div> 
                    }) : null
                }

                <p 
                    onClick={() => attachFile("__test.sketch","landingPage")}
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

                <div className="front-end_input-wrapper">

                    <input
                        className="front-end_input"
                        onChange={outputOnChange("landingPage")}
                        style={{
                            marginBottom: "16px"
                        }}
                        type="text"
                        name="apis"
                        autoComplete="off"
                        defaultValue={this.state.apis}
                    />
                    <div className="front-end_input_remove-button">
                        <img src={minusIcon} alt=""/>
                    </div>

                </div>

                <p 
                    style={{
                        marginBottom: "32px"
                    }}
                    className="attach-file-button"
                >
                    + add API field
                </p>
                
			</>
		);
	}
}