import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import ItemManagePage from "./pages/itemManage";
import AdminHomePage from "./pages/admin-home";
import UpdateItemPage from "./pages/Update";
// components
import Signup from "./components/sign-up";
import LoginForm from "./components/login-form";
import Navbar from "./components/Navbar/index";
//import Home from './components/home'
import Items from "./pages/Items";
import Event from "./components/EventContainer";
import ItemsByCategory from "./components/ItemsByCategory/index";
import ItemsByFeatured from "./components/ItemsByFeatured/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.saveFavorite = this.saveFavorite.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  saveFavorite = id => {
    console.log(id + "favorite saved! TEST from app.js");
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.favorite = !item.favorite;
        }
        return item;
      })
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
          {/* Routes to different components */}
          <Switch>
            <Route exact path="/adminhome" render={() => <AdminHomePage />} />
            <Route exact path="/manage" render={() => <ItemManagePage />} />
            <Route exact path="/update" render={() => <UpdateItemPage />} />
            <Route
              exact
              path="/"
              render={() => (
                <div className="homecontainer">
                  <Event />
                  <ItemsByCategory />
                  <ItemsByFeatured />
                </div>
              )}
            />
            <Route
              path="/login"
              render={() => <LoginForm updateUser={this.updateUser} />}
            />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/items" render={() => <Items />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
