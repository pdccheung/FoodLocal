import { Component } from "react";
import { Container } from "react-bootstrap";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Food from "../FoodPage/Food";
import UserFood from "../UserFoodPage/UserFood";
import NewFood from "../NewFoodPage/NewFood";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/HomePage/Home";

export default class App extends Component {
  state = {
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      this.setState({ user: userDoc });
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
            <Route
              path="/food/:id"
              render={(props) => <Food {...props} />}
            />
            {this.state.user ? (
              <Switch>
                <Route path="/" render={(props) => <HomePage {...props} />} />
                {/* route for Food is not needed for now, as Food/:id will serve the component */}
                {/* <Route path="/food" render={(props) => <Food {...props} />} /> */}
                <Route
                  exact
                  path="/userfood"
                  render={(props) => <UserFood {...props} />}
                />
                <Route
                  path="/userfood/new"
                  render={(props) => <NewFood {...props} />}
                />
                {/* and in case nothing matches, we redirect: */}
                <Redirect to="/food" />
              </Switch>
            ) : (
              <AuthPage setUserInState={this.setUserInState} />
            )}
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
