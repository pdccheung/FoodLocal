import React, { Component } from "react";
// import UserLogOut from "../../components/UserLogOut/UserLogOut";
// import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

class NewFood extends Component {
  state = {
    name: "",
    rating: 3,
    price: 0,
    description: "",
    restaurant: "",
    imageUrl: "",
    selectedFile: null,
  };
  // Image uploader
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // Other form data
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "image",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    const option = {
      method: "POST",
      body: formData,
    };
    let someStr = null;

    fetch("/api/images", option)
      .then((response) =>
        response
          .json()
          .then((data) => ({
            data: data,
            status: response.status,
          }))
          .then((res) => {
            someStr = res.data.imageUrl;
          })
      )
      .then(() => {
        this.setState({ imageUrl: someStr });
      })
      .then(() => console.log("Image URL is ", someStr))
      .catch((error) => console.log("error", error));
  };

  displayImage = () => {
    if (this.state.imageUrl) {
      return (
        <div>
          <Image src={this.state.imageUrl} fluid></Image>
        </div>
      );
    } else {
      return ( null
        // <div>
        //   <br />
        //   <h5></h5>
        // </div>
      );
    }
  };

  handleSubmit = async (props) => {
    // First we build the body
    let body = {
      name: this.state.name,
      rating: this.state.rating,
      price: this.state.price,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
    };
    // We need an options object for our fetch call
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    // Now for the fetch call
    await fetch("/api/foods", options)
      .then((res) => res.json())
      .then((data) => {
        // Call our getFoods function to get fresh data
        this.props.getFoods();
        // clear out this.state.everything
        this.setState({
          name: "",
          rating: 3,
          price: 0,
          description: "",
          imageUrl: "",
          selectedFile: null,
        });
      });
  };

  render() {
    return (
      <div className="new-food">
        {" "}
        <h1>Add new food item here</h1>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div><br /><br />
        <div>{this.displayImage()}</div>
        <br />
        <br />
        Name: <input name="name" onChange={this.handleChange} required />
        <br />
        <br />
        Rating:{" "}
        <select name="rating" onChange={this.handleChange} required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <br />
        Restaurant:{" "}
        <input name="restaurant" onChange={this.handleChange} required /> <br />
        Price:{" "}
        <input
          type="number"
          name="price"
          pattern="[0-9]*"
          onChange={this.handleChange}
          required
        />
        <br />
        Description:{" "}
        <textarea
          name="description"
          onChange={this.handleChange}
          value={this.state.content}
        ></textarea>{" "}
        <br />
        <br />
        <button onClick={this.handleSubmit}>Submit!</button>
      </div>
    );
  }
}

export default NewFood;
