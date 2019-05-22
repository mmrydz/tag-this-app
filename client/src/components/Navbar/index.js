import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import { Route, Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img src="../logo1.png" height="100" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {loggedIn ? (
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link" to="/adminhome">
                  Admin
                </Link>
                <Link
                  className="nav-item nav-link"
                  to="#"
                  onClick={this.logout}
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-item nav-link" to="/signup">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
