import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="container">
          <h4 className="my-3">Login</h4>
          <div className="form-group">
            <label className="mb-0" for="username">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-3"
              name="username"
              placeholder="Enter Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label className="mb-0" for="username">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              class="btn btn-primary"
              onClick={this.handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
