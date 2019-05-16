import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "./components/signup-form/index";
import LoginForm from "./components/login-form/index";
import Navbar from "./components/Navbar/index";
//import Home from './components/home'

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

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        {/* Routes to different components */}
        {/* <Route
          exact path="/"
          component={Home} /> */}
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path="/signup" render={() => <Signup />} />
      </div>
    );
  }
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import itemManage from "./pages/itemManage";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={itemManage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
