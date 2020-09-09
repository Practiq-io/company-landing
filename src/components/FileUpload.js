import React, { Component } from "react";
import "./FileUpload.css";
import axios from "axios";

class FileUpload extends Component {
	state = {
        fileUploadError: "",
		preparedFiles: []
    };
    
    removePlug = name => {
        let preparedFiles = [...this.state.preparedFiles];
        let index = 0;
        preparedFiles.forEach(file => {
            
            if(name === file.fileName){
                preparedFiles.splice(index, 1);
                this.setState({preparedFiles});
            }
            index++;
        })
        
    }

	onChange = e => {
		e.preventDefault();
        let preparedFiles = [...this.state.preparedFiles];
        let newFile = { file: e.target.files[0], fileName: e.target.files[0].name};
        preparedFiles.push(newFile);
        this.setState({preparedFiles});
    };
    
    submit = async e => {
        e.preventDefault();
        const formData = new FormData();
        let files = [...this.state.preparedFiles];
		for (var x = 0; x < files.length; x++) {
			formData.append(
				`file${x}`,
                files[x].file
			);
        }
        for (var p of formData) {
            console.log(p, "AAAAAAAAAAAAAAAAAA"); 
        }
		
		try {
			const res = await axios.post("http://localhost:5000/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(res, "RESPONSE");
		} catch (err) {
            if(err.status === 400){
                this.setState({fileUploadError:"No files were chosen"})
            } else {
                console.log(err);
            }
			
		}
    }

	render() {
        console.log(this.state);
		return (
			<>
				<div className="fileUploadWrapper">
                    <p>{this.state.fileUploadError}</p> 
					<form onSubmit={this.submit} className="fileUploader">
						<input
							className="choseFile"
							type="file"
							id="customFile"
							onChange={this.onChange}
						/>
						<label className="fileName" htmlFor="customFile">
							{this.state.filename}
						</label>
						<button onClick={this.submit}>submit</button>
					</form>
					{
                            this.state.preparedFiles.map(item => {
                                return <div onClick={() => this.removePlug(item.fileName)} className="plug" key={item.fileName}>
                                    <p>{item.fileName}</p>
                                </div>
                            })
                        }
				</div>
			</>
		);
	}
}

export default FileUpload;
