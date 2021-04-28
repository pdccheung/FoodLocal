import React, { Component } from "react";
import UserLogOut from "../../components/UserLogOut/UserLogOut";
import { Link } from "react-router-dom";

class NewFood extends Component {
  state = {
    name: "",
    rating: 3,
    price: 0,
    description: "",
    restaurant: "",
  };


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

handleSubmit = async (props) => {
    // First we build the body
    let body = { name: this.state.name,
    rating: this.state.rating,
    price: this.state.price,
    description: this.state.description, }
    // We need an options object for our fetch call
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    // Now for the fetch call
    await fetch("/api/foods", options)
      .then(res => res.json())
      .then(data => {
        // Call our getFoods function to get fresh data
       this.props.getFoods();
        // clear out this.state.everything
        this.setState({     name: "",
        rating: 3,
        price: 0,
        description: "",})
      })
  }



  render() {
    return (
      <div className="new-food">
        {" "}
        <h1>Add new food item here</h1>
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
        Restaurant: <input name="restaurant" onChange={this.handleChange} required /> <br />
        Price:  <input type="number" name="price" pattern="[0-9]*" onChange={this.handleChange} required/><br />
        Description:{" "}
        <textarea
          name="description"
          onChange={this.handleChange}
          value={this.state.content}
        ></textarea>{" "}
        <br />
        <br />
        <button onClick={this.handleSubmit}>Submit!</button>
        <Link to="/userfood" className="button btn-sm">
          My Food items
        </Link>
        <br />
        <br />
        <Link to="/food" className="button btn-sm">
          {" "}
          All Food
        </Link>
        <br />
        <br />
        <UserLogOut />
      </div>
    );
  }
}

export default NewFood;
