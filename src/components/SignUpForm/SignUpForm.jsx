import { Component } from 'react';
import { Form, Button  } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
    redirect: false,
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const fetchResponse = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password,})
      })
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
      let token = await fetchResponse.json() 
      localStorage.setItem('token', token); 
      const userDoc = JSON.parse(atob(token.split('.')[1])).user;
      this.props.setUserInState(userDoc)
      this.setState({redirect: true})
    }
     catch (err) {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name} 
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
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
            <Form.Group>
              <Form.Label>Confirm your password</Form.Label>
              <Form.Control
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
            </Form.Group>
            <Button type="submit" disabled={disable}>Sign me up! </Button>
       </Form>
       <p className="error-message">&nbsp;{this.state.error}</p>
       { this.state.redirect ? (<Redirect push to="/"/>) : null }
      </div>
      </div>
    );
  }
}
