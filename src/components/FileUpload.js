import React, { Component } from "react";
import "./FileUpload.css";
import axios from "axios";

class FileUpload extends Component {
	state = {
		fileUploadError: "",
		preparedFiles: [],
		loadingBar: false,
		uploadPercentage: 0,
	};

	removePlug = (name) => {
		let preparedFiles = [...this.state.preparedFiles];
		let index = 0;

		preparedFiles.map((file) => {
			if (name === file[0]) {
				preparedFiles.splice(index, 1);
				this.setState({ preparedFiles });
			}
			index++;
		});
	};
	onChange = async (e) => {
		e.preventDefault();
        
        if(e.target.files[0]){
            this.setState({loadingBar: true});
            let preparedFiles = [...this.state.preparedFiles];
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
                const res = await axios
                    .post(
                        "https://ec2-54-170-173-178.eu-west-1.compute.amazonaws.com/tasks/attachment",
                        formData,
                        requestOptions
                    )
                    .then(result => {
                        let attachment = [];
                        attachment.push(result.data);
                        attachment.push(fileName);
                        preparedFiles.push(attachment);
                        this.setState({ preparedFiles, loadingBar: false , uploadPercentage: 0});
                    });
            } catch (err) {
                console.log(err);
                this.setState({ loadingBar: false, uploadPercentage: 0});
            }
        } 
	};

	render() {
		console.log(this.state);
		return (
			<>
				<div className="fileUploadWrapper">
					<p>{this.state.fileUploadError}</p>
					<form className="fileUploader">
						<input
							className="choseFile"
							type="file"
							id="customFile"
							onChange={this.onChange}
						/>
					</form>
					<div className="outputTest">
						<div
							style={{
                                width: this.state.uploadPercentage,
                                display: this.state.loadingBar ? "block" : "none"
							}}
							className="loadingBar"
						></div>
						{this.state.preparedFiles.map(item => {
							return (
								<div
									onClick={() => this.removePlug(item[0])}
									className="plug"
									key={item[0]}
								>
									<p>{item[1]}</p>
								</div>
							);
						})}
					</div>
					
				</div>
			</>
		);
	}
}

export default FileUpload;
