import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

export default class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    redirect: false,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      if (!fetchResponse.ok) throw new Error("Fetch failed - Bad request");
      let token = await fetchResponse.json(); 
      localStorage.setItem("token", token); 
      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      this.props.setUserInState(userDoc);
      this.setState({redirect: true})
    } catch (err) {
      console.log("SignupForm error", err);
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <Form autoComplete="off">
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" onClick={this.handleSubmit}>
              Log me in!
            </Button>
          </Form>

          <p className="error-message">&nbsp;{this.state.error}</p>
          { this.state.redirect ? (<Redirect push to="/"/>) : null }
        </div>
      </div>
    );
  }
}
