import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default class AuthPage extends React.Component {
  state = {
    showLogin: true,
  };

  render() {
    return (
      <main className="AuthPage">
        <div></div>
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}
        <h4 onClick={() => this.setState({ showLogin: !this.state.showLogin })}>
          {this.state.showLogin
            ? "New user? Click here to sign up"
            : "Already have an account? Please log in"}
        </h4>
      </main>
    );
  }
}
