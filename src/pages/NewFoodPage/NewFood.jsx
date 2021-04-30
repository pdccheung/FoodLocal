import React, { Component } from "react";
import {Image, Form, Button, Container, Row, Col} from "react-bootstrap";
import { Redirect } from "react-router-dom";

class NewFood extends Component {
  state = {
    name: "",
    rating: 3,
    price: 0,
    description: "",
    restaurant: "",
    imageUrl: "",
    selectedFile: null,
    redirect: false,
  };

  // Image uploader for the latest user input
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // Set state based on user input
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
   <Container> 
  <Row>
    <Col xs={6} md={4}>
      <Image src={this.state.imageUrl} rounded fluid/>
    </Col>
    </Row>
   </Container>
 
      );
    } else {
      return ( null
      );
    }
  };

  handleSubmit = async (props) => {
    const userId = (this.props.user)._id; 
    let body = {
      name: this.state.name,
      rating: this.state.rating,
      price: this.state.price,
      restaurant: this.state.restaurant,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      user: userId,
    };
    // use as options as object for post-fetch call
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    // fetch call with the above options 
    await fetch("/api/foods", options)
      .then((res) => res.json())
      .then((data) => {
        this.props.getFoods();
        this.setState({
          name: "",
          rating: 3,
          price: 0,
          description: "",
          imageUrl: "",
          selectedFile: null,
        });
      }).then(() => {this.setState({ redirect: true })});
  };

  render() {
    return (
      <div className="new-food">
    <Form>
  <Form.Group>
    <Form.File onChange={this.onFileChange} id="image-upload" label="Select a photo of your meal"/>
<br />
    <Button variant="primary" onClick={this.onFileUpload}>Upload </Button>{' '}
 </Form.Group> <br />
 <div>{this.displayImage()}</div><br />
  <Form.Group controlId="meal.name">
    <Form.Label>Meal name</Form.Label>
    <Form.Control  placeholder="e.g. Tom yum soup" name="name" onChange={this.handleChange} required />
  </Form.Group>
  <Form.Group controlId="meal.restaurant">
    <Form.Label>Restaurant Name</Form.Label>
    <Form.Control  placeholder="e.g. Jatujak" name="restaurant" onChange={this.handleChange} required />
  </Form.Group>
  <Form.Group controlId="meal.price">
    <Form.Label>How much did it cost? (approx. dollar amount)</Form.Label>
    <br />
    <input name="price" onChange={this.handleChange}  type="number"  pattern="[0-9]*" required/> <br />
  </Form.Group>
  <Form.Group controlId="meal.rating">
    <Form.Label>Rate your meal</Form.Label>
    <Form.Control as="select" name="rating" onChange={this.handleChange} required>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="meal.description">
    <Form.Label>How would you describe your meal? (briefly)</Form.Label>
    <Form.Control name="description" onChange={this.handleChange} as="textarea"  placeholder="e.g. Spicy and sour, perfect for a mid Autumn dinner" rows={3} />
  </Form.Group>
</Form>
<Button onClick={this.handleSubmit}>Submit!</Button>
{ this.state.redirect ? (<Redirect push to="/"/>) : null }
</div>

)
    }
}

export default NewFood;
