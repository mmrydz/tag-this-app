import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import { Route, Link } from "react-router-dom";
//import logo from '../logo.svg';
//import '../Navbar/App.css';
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
          <a className="navbar-brand" href="#">
            Navbar
          </a>
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
                <Link className="nav-item nav-link" to="#">
                  Home
                </Link>
                <Link className="nav-item nav-link" to="#">
                  Admin
                </Link>
                <Link className="nav-item nav-link" to="#">
                  Logout
                </Link>
              </div>
            ) : (
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-item nav-link" to="#">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>

      //   <div>
      //     <header className="navbar App-header" id="nav-container">
      //       <div className="col-4">
      //         {loggedIn ? (
      //           <section className="navbar-section">
      //             <Link
      //               to="#"
      //               className="btn btn-link text-secondary"
      //               onClick={this.logout}
      //             >
      //               <span className="text-secondary">logout</span>
      //             </Link>

      //             <Link to="/adminhome" className="btn btn-link text-secondary">
      //               <span className="text-secondary">admin</span>
      //             </Link>
      //           </section>
      //         ) : (
      //           <section className="navbar-section">
      //             <Link to="/" className="btn btn-link text-secondary">
      //               <span className="text-secondary">home</span>
      //             </Link>
      //             <Link to="/login" className="btn btn-link text-secondary">
      //               <span className="text-secondary">login</span>
      //             </Link>
      //             <Link to="/signup" className="btn btn-link">
      //               <span className="text-secondary">sign up</span>
      //             </Link>
      //           </section>
      //         )}
      //       </div>
      //       <div className="col-4 col-mr-auto">
      //         <div id="top-filler" />
      //         <img src="../logo1.png" className="App-logo" alt="logo" />
      //         {/* <h1 className="App-title">Tag This App</h1> */}
      //       </div>
      //     </header>
      //   </div>
    );
  }
}

export default Navbar;
