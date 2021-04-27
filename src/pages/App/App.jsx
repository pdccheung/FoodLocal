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
    foods: [],
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  componentDidMount() {
    this.getFoods();
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      this.setState({ user: userDoc });
    }

  }

  // fetch food data from mongoose db
  getFoods = async () => {
    await fetch("/api/foods").then((res) => res.json()).then(data => this.setState({foods: data}))
  }

  render() {
    return (
      <>
        <Header />
        <main className="py-3">
          <Container>
            <Route exact path="/" render={(props) => <HomePage {...props} foods={this.state.foods}/>} />
            <Route
              path="/food/:id"
              render={(props) => <Food {...props} foods={this.state.foods} />}
            />

            {this.state.user ? (
              <Switch>
                <Route exact path="/" render={(props) => <HomePage {...props} foods={this.state.foods} />} />
                {/* route for Food is not needed for now, as Food/:id will serve the component */}
                {/* <Route path="/food" render={(props) => <Food {...props} />} /> */}
                <Route
                  exact
                  path="/userfood"
                  render={(props) => <UserFood {...props} />}
                />
                <Route
                  path="/userfood/new"
                  render={(props) => <NewFood {...props} getFoods={this.getFoods} />}
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
