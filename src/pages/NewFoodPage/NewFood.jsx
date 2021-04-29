import React, { Component } from "react";
import {Image, Form, Button, Container, Row, Col} from "react-bootstrap";

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
      restaurant: this.state.restaurant,
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
</div>




)
    }
}

export default NewFood;
