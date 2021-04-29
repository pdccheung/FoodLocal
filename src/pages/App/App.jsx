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
import Images from "../ImagesPage/ImagesPage";
import { getCurrentLatLng } from "../../services/geolocation";
import Map from "../MapPage/Map"


export default class App extends Component {
  state = {
    user: null,
    foods: [],    
    lat: null,
    lng: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData });
  };

  async componentDidMount() {
    this.getFoods();
    let token = localStorage.getItem("token");
    if (token) {
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      this.setState({ user: userDoc });
    }
    const {lat, lng} = await getCurrentLatLng();
    this.setState({lat, lng});
  }


  // fetch food data from mongoose db
  getFoods = async () => {
    await fetch("/api/foods")
      .then((res) => res.json())
      .then((data) => this.setState({ foods: data }));
  };

  render() {
    return (
      <>
        <Header user={this.state.user}/>
        <main className="py-3">
          <Container>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage {...props} foods={this.state.foods} />
              )}
            />
            <Route
              path="/food/:id"
              render={(props) => <Food {...props} foods={this.state.foods} />}
            />
           
           <Route path="/login" render={(props) => <AuthPage {...props} setUserInState={this.setUserInState} /> } />

           <Route path="/map" render={(props) => <Map lat={this.state.lat} lng={this.state.lng} />} />

            {this.state.user ? (
              <Switch>
                {/* <Route
                  exact
                  path="/"
                  render={(props) => (
                    <HomePage {...props} foods={this.state.foods} />
                  )}
                /> */}
                {/* route for Food is not needed for now, as Food/:id will serve the component */}
                {/* <Route path="/food" render={(props) => <Food {...props} />} /> */}
                <Route
                  exact
                  path="/userfood"
                  render={(props) => <UserFood {...props} foods={this.state.foods} user={this.state.user}/>}
                />
                <Route
                  path="/userfood/new"
                  render={(props) => (
                    <NewFood {...props} getFoods={this.getFoods} user={this.state.user}/>
                  )}
                />
                <Route
                  path="/api/images"
                  render={(props) => (
                    <Images {...props} />
                  )}
                />
                {/* and in case nothing matches, we redirect: */}
                <Redirect to="/" />
              </Switch>
            ) : ( null
              // <AuthPage setUserInState={this.setUserInState} />
            )}
 <Map lat={this.state.lat} lng={this.state.lng} />
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}
