import React, { Component } from "react";
import "./TaskType.css";
import TaskTypeSwitch from "./TaskTypeSwitch/TaskTypeSwitch";
import TaskTypeControls from "./TaskTypeControls/TaskTypeControls";
import TaskTypeOutput from "./TaskTypeOutput/TaskTypeOutput";
import axios from 'axios';

export default class TaskType extends Component {
	state = {
		programming: "backend",
		taskType: "",
		taskData: {},
		loadingBar: false,
		uploadPercentage: 0
	};

	setTaskType = (taskType) => {
		this.setState({ taskType: taskType });
	};

	attachFile = async (e, category) => {
		e.preventDefault();
      
        if(e.target.files[0]){
			this.setState({loadingBar: true});
			let taskData = {...this.state.taskData};
            let attachedFiles = [...taskData[category].attachedFiles];
            let fileName = e.target.files[0].name;
            const formData = new FormData();
            formData.append(
                "attachment",
                e.target.files[0],
                "Production.postman_environment.json"
            );
            var requestOptions = {
                method: "POST",
                body: formData,
                redirect: "follow",
                onUploadProgress: (progressEvent) => {
                    var percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
					);
                    this.setState({ uploadPercentage: percentCompleted });
                },
            };
            e.target.value = null;
            try {
                await axios
                    .post(
                        "https://ec2-54-170-173-178.eu-west-1.compute.amazonaws.com/tasks/attachment",
                        formData,
                        requestOptions
                    )
                    .then(result => {
                        let attachment = [];
                        attachment.push(result.data);
                        attachment.push(fileName);
						attachedFiles.push(attachment);
						taskData[category].attachedFiles = attachedFiles;
                        this.setState({ taskData, loadingBar: false , uploadPercentage: 0});
                    });
            } catch (err) {
                console.log(err);
                this.setState({ loadingBar: false, uploadPercentage: 0});
            }
        } 
	};

	removeAttachedFile = (name, category) => {
		let taskData = {...this.state.taskData};
		let attachedFiles = [...taskData[category].attachedFiles];
		let index = 0;

		attachedFiles.forEach(file => {
			if (name === file[0]) {
				attachedFiles.splice(index, 1);
				taskData[category].attachedFiles = attachedFiles;
				this.setState({ taskData });
			}
			index++;
		});
	};

	addApiInput = (category) => {
		let taskData = { ...this.state.taskData };
		let taskTypeState = { ...taskData[category] };
		let apisFields = [...taskTypeState.apisFields];
		let apisFieldKeys = [...taskTypeState.apisFieldKeys];
		if (apisFieldKeys.length > 0) {
			let newInput = apisFieldKeys.splice(0, 1);
			apisFields.push(newInput[0]);
			taskTypeState.apisFields = apisFields;
			taskTypeState.apisFieldKeys = apisFieldKeys;
			taskTypeState[newInput] = "";
			taskData[category] = taskTypeState;
			this.setState({ taskData });
		}
	};

	removeApiInput = (category, name) => {
		let taskData = { ...this.state.taskData };
		let taskTypeState = { ...taskData[category] };
		let apisFields = [...taskTypeState.apisFields];
		let apisFieldKeys = [...taskTypeState.apisFieldKeys];
		if (apisFields.length > 0) {
			let index = apisFields.indexOf(name);
			let key = apisFields.splice(index, 1);
			apisFieldKeys.push(key[0]);
			delete taskTypeState[name];
			taskTypeState.apisFieldKeys = apisFieldKeys;
			taskTypeState.apisFields = apisFields;
			taskData[category] = taskTypeState;
			this.setState({ taskData });
		}
	};

	componentDidMount() {
		if (this.props.containerState) {
			let containerState = { ...this.props.containerState };
			let programming = { ...this.state.programming };
			let taskType = { ...this.state.taskType };
			let taskData = { ...this.state.taskData };

			taskData = containerState.taskData;
			programming = containerState.programming;
			taskType = containerState.taskType;

			this.setState({
				taskData,
				programming,
				taskType,
			});
		} else if (this.props.programmingType) {
			let programming = { ...this.state.programming };
			programming = this.props.programmingType;
			this.setState({
				programming,
			});
		}
	}

	setTaskTypeState = (properties) => {
		const key = Object.keys(properties);
		const value = Object.values(properties);
		let taskData = { ...this.state.taskData };
		taskData = {};
		taskData[[key[0]]] = value[0];
		this.setState({ taskData });
	};

	toggleBackend = () => {
		if (this.state.programming !== "backend") {
			this.setState({ programming: "backend" });
		}
	};

	toggleFrontend = () => {
		if (this.state.programming !== "frontend") {
			this.setState({ programming: "frontend" });
		}
	};

	apiConnectorAdapterValidation = (category) => {
		let fieldError = "";
		let field2Error = "";
		let field3Error = "";
		let field4Error = "";
		let field5Error = "";
		let documentationError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData[category];

		if (data.documentation) {
			if (data.documentation.length > 500) {
				documentationError = "* too long string";
			} else if (data.documentation.match(blockedRegex)) {
				documentationError = "* only string values";
			}
		} else {
			documentationError = "* is required";
		}
		if (data.field) {
			if (data.field.length > 500) {
				fieldError = " too long string";
			} else if (data.field.match(blockedRegex)) {
				fieldError = " only string values";
			}
		} else if (data.field === "") {
			fieldError = " is required";
		}
		if (data.field2) {
			if (data.field2.length > 500) {
				field2Error = " too long string";
			} else if (data.field2.match(blockedRegex)) {
				field2Error = " only string values";
			}
		} else if (data.field2 === "") {
			field2Error = " is required";
		}
		if (data.field3) {
			if (data.field3.length > 500) {
				field3Error = " too long string";
			} else if (data.field3.match(blockedRegex)) {
				field3Error = " only string values";
			}
		} else if (data.field3 === "") {
			field3Error = " is required";
		}
		if (data.field4) {
			if (data.field4.length > 500) {
				field4Error = " too long string";
			} else if (data.field4.match(blockedRegex)) {
				field4Error = " only string values";
			}
		} else if (data.field4 === "") {
			field4Error = " is required";
		}
		if (data.field5) {
			if (data.field5.length > 500) {
				field5Error = " too long string";
			} else if (data.field5.match(blockedRegex)) {
				field5Error = " only string values";
			}
		} else if (data.field5 === "") {
			field5Error = " is required";
		}

		if (
			fieldError ||
			field2Error ||
			field3Error ||
			field4Error ||
			field5Error ||
			documentationError
			) {
			this.setState({ 
				documentationError,
				fieldError,
				field2Error,
				field3Error,
				field4Error,
				field5Error
			});
			return false;
		}
		return true;
	};

	longRunningProcessValidation = () => {
		let datasourceError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData.longRunningProcess;

		if (data.datasource) {
			if (data.datasource.length > 500) {
				datasourceError = "* too long string";
			} else if (data.datasource.match(blockedRegex)) {
				datasourceError = "* only string values";
			}
		} else {
			datasourceError = "* is required";
		}
		
		if (datasourceError) {
			this.setState({ 
				datasourceError
			 });
			return false;
		}

		return true;
	};

	customTaskValidation = (category) => {
		let taskDescriptionError = "";
		const blockedRegex = /[\]!$%^&*()":{}|<>]/;
		const data = this.state.taskData[category];

		if (data.taskDescription) {
			if (data.taskDescription.length > 500) {
				taskDescriptionError = "* too long string";
			} else if (data.taskDescription.match(blockedRegex)) {
				taskDescriptionError = "* only string values";
			}
		} else {
			taskDescriptionError = "* is required";
		}

		if (taskDescriptionError) {
			this.setState({ taskDescriptionError });
			return false;
		}
		return true;
	};

	apiFieldsValidation = (category) => {
		let fieldError = "";
		let field2Error = "";
		let field3Error = "";
		let field4Error = "";
		let field5Error = "";
		const blockedRegex = /[\]!$%^&*()"{}|<>]/;
		const data = this.state.taskData[category];

		if (data.field) {
			if (data.field.length > 500) {
				fieldError = " too long string";
			} else if (data.field.match(blockedRegex)) {
				fieldError = " only string values";
			}
		} else if (data.field === "") {
			fieldError = " is required";
		}
		if (data.field2) {
			if (data.field2.length > 500) {
				field2Error = " too long string";
			} else if (data.field2.match(blockedRegex)) {
				field2Error = " only string values";
			}
		} else if (data.field2 === "") {
			field2Error = " is required";
		}
		if (data.field3) {
			if (data.field3.length > 500) {
				field3Error = " too long string";
			} else if (data.field3.match(blockedRegex)) {
				field3Error = " only string values";
			}
		} else if (data.field3 === "") {
			field3Error = " is required";
		}
		if (data.field4) {
			if (data.field4.length > 500) {
				field4Error = " too long string";
			} else if (data.field4.match(blockedRegex)) {
				field4Error = " only string values";
			}
		} else if (data.field4 === "") {
			field4Error = " is required";
		}
		if (data.field5) {
			if (data.field5.length > 500) {
				field5Error = " too long string";
			} else if (data.field5.match(blockedRegex)) {
				field5Error = " only string values";
			}
		} else if (data.field5 === "") {
			field5Error = " is required";
		}

		if (
			fieldError ||
			field2Error ||
			field3Error ||
			field4Error ||
			field5Error
		) {
			this.setState({
				fieldError,
				field2Error,
				field3Error,
				field4Error,
				field5Error,
			});
			return false;
		}
		return true;
	};

	designValidation = (category) => {
		let designLinkError = "";
		let fieldError = "";
		let field2Error = "";
		let field3Error = "";
		let field4Error = "";
		let field5Error = "";
		const blockedRegex = /[\]!$%^&*()"{}|<>]/;
		const data = this.state.taskData[category];

		if (data.designLink) {
			if (data.designLink.length > 500) {
				designLinkError = "* too long string";
			} else if (data.designLink.match(blockedRegex)) {
				designLinkError = "* only string values";
			}
		} else {
			designLinkError = "* is required";
		}
		if (data.field) {
			if (data.field.length > 500) {
				fieldError = " too long string";
			} else if (data.field.match(blockedRegex)) {
				fieldError = " only string values";
			}
		} else if (data.field === "") {
			fieldError = " is required";
		}
		if (data.field2) {
			if (data.field2.length > 500) {
				field2Error = " too long string";
			} else if (data.field2.match(blockedRegex)) {
				field2Error = " only string values";
			}
		} else if (data.field2 === "") {
			field2Error = " is required";
		}
		if (data.field3) {
			if (data.field3.length > 500) {
				field3Error = " too long string";
			} else if (data.field3.match(blockedRegex)) {
				field3Error = " only string values";
			}
		} else if (data.field3 === "") {
			field3Error = " is required";
		}
		if (data.field4) {
			if (data.field4.length > 500) {
				field4Error = " too long string";
			} else if (data.field4.match(blockedRegex)) {
				field4Error = " only string values";
			}
		} else if (data.field4 === "") {
			field4Error = " is required";
		}
		if (data.field5) {
			if (data.field5.length > 500) {
				field5Error = " too long string";
			} else if (data.field5.match(blockedRegex)) {
				field5Error = " only string values";
			}
		} else if (data.field5 === "") {
			field5Error = " is required";
		}

		if (
			designLinkError ||
			fieldError ||
			field2Error ||
			field3Error ||
			field4Error ||
			field5Error
		) {
			this.setState({
				designLinkError,
				fieldError,
				field2Error,
				field3Error,
				field4Error,
				field5Error,
			});
			return false;
		}
		return true;
	};

	validation = () => {
		if (this.state.taskData.generalApi) {
			return this.apiFieldsValidation("generalApi");
		} else if (this.state.taskData.connectorAdapter) {
			return this.apiConnectorAdapterValidation("connectorAdapter");
		} else if (this.state.taskData.longRunningProcess) {
			return this.longRunningProcessValidation();
		} else if (this.state.taskData.customBackendTask) {
			return this.customTaskValidation("customBackendTask");
		} else if (this.state.taskData.landingPage) {
			return this.designValidation("landingPage");
		} else if (this.state.taskData.singlePageApplication) {
			return this.designValidation("singlePageApplication");
		} else if (this.state.taskData.frontendComponent) {
			return this.designValidation("frontendComponent");
		} else if (this.state.taskData.customFrontendTask) {
			return this.customTaskValidation("customFrontendTask");
		}
	};

	continue = () => {
		const isValid = this.validation();
		if (isValid) {
			const specification = {
				specification: {
					taskType: this.state.taskType,
					programming: this.state.programming,
					taskData: this.state.taskData,
				},
			};
			this.props.setWizardProperties(specification);
			this.props.nextStep();
		}
	};

	taskDataOnChangeHandler = (key) => (e) => {
		let taskData = { ...this.state.taskData };
		taskData[key][e.target.name] = e.target.value;
		this.setState({ taskData });
	};

	render() {
		const { prevStep, containerState, specificTask } = this.props;
		return (
			<div className="wizard-modal_content-box">
				<div className="modal-position_wrapper">
					<div className="modal-title">
						<p>Select technical requirements</p>
					</div>

					<TaskTypeSwitch
						toggleFrontend={this.toggleFrontend}
						toggleBackend={this.toggleBackend}
						programming={this.state.programming}
					/>

					<TaskTypeControls
						specificTask={specificTask}
						containerState={containerState}
						selectTask={this.setTaskType}
						programming={this.state.programming}
						taskType={this.state.taskType}
					/>

					<div className="task-type-output_frame">
						<TaskTypeOutput
							outputOnChange={this.taskDataOnChangeHandler}
							setTaskTypeState={this.setTaskTypeState}
							taskTypeState={this.state}
							removeAttachedFile={this.removeAttachedFile}
							attachFile={this.attachFile}
							containerState={containerState}
							addApiInput={this.addApiInput}
							removeApiInput={this.removeApiInput}
							loadingBar={this.state.loadingBar}
							uploadPercentage={this.state.uploadPercentage}
						/>
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
