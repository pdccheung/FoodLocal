
// POST to /api/images 

// No longer valid

import React,{Component} from 'react';

class Images extends Component {

	state = {
	selectedFile: null
	};
	
	 onFileChange = event => {
	this.setState({ selectedFile: event.target.files[0] });
	};


	onFileUpload = () => {
	const formData = new FormData();
	let someStr = null;
	formData.append(
		"image",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
    const options = {
        method: "POST",
        body: formData
      };

	console.log(this.state.selectedFile.name);

	  fetch("/api/images", options)
	  .then(response => response.json()
	  .then(data => ({
			data: data,
			status: response.status
		})
	).then(res => { someStr = res.data.imageUrl}
	)).then(() => console.log("Image URL is ",someStr))
	.catch(error => console.log('error', error));	
};
	
	
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	if (this.state.selectedFile) {
		return (
		<div>
			<h3>File Details:</h3>
<p>File Name: {this.state.selectedFile.name}</p>
<p>File Type: {this.state.selectedFile.type}</p>
<p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h5>Choose before Pressing the Upload button</h5>
		</div>
		);
	}
	};

	render() {
	return (
		<div>
			<h3>
            Uploading images to S3
			</h3>
			<div>
				<input type="file" onChange={this.onFileChange} />
				<button onClick={this.onFileUpload}>
				Upload!
				</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default Images;
