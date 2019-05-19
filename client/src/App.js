// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import ItemManagePage from "./pages/itemManage";
// import AdminHomePage from "./pages/admin-home";
// import UpdateItemPage from "./pages/updateform";
// //import { withAuthenticator } from "aws-amplify-react";
// //import { Storage } from "aws-amplify";


// function App() {



//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route
//             exact path="/adminhome"
//             render={() => <AdminHomePage />}
//           />
//           <Route
//             exact path="/manage"
//             render={() => <ItemManagePage />}
//           />
//           <Route
//             exact path="/update"
//             render={() => <UpdateItemPage />}
//           />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React, { Component } from 'react';
import axios from 'axios'
//import { Route, Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import ItemManagePage from "./pages/itemManage";
import AdminHomePage from "./pages/admin-home";
import UpdateItemPage from "./pages/updateform";
// components
import Signup from './components/sign-up'
import LoginForm from './components/login-form'
import Navbar from './components/Navbar/index'
//import Home from './components/home'
import Items from './components/Items'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      items: [
        {
          id: 1,
          name: "tent",
          description: "Put a lot of text and words in this space to describe the item, blah blah blah",
          image: "https://www.rei.com/media/product/130893",
          department: "outdoor",
          favorite: false,
          featured: false
        },
        {
          id: 2,
          name: "bike",
          description: "Put a lot of text and words in this space to describe the item, blah blah blah",
          image: "https://images-na.ssl-images-amazon.com/images/I/915c7fzsEBL._SX425_.jpg",
          department: "outdoor",
          favorite: false,
          featured: true
        },
        {
          id: 3,
          name: "frank and beans",
          description: "Put a lot of text and words in this space to describe the item, blah blah blah",
          image: "https://images-na.ssl-images-amazon.com/images/I/51tTHFbUkRL.jpg",
          department: "grocery",
          favorite: false,
          featured: false
        },
        {
          id: 4,
          name: "pants",
          description: "Put a lot of text and words in this space to describe the item, blah blah blah",
          image: "https://images-na.ssl-images-amazon.com/images/I/71uCuqRv43L._UY445_.jpg",
          department: "clothing",
          favorite: false,
          featured: false
        }
      ]
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.saveFavorite = this.saveFavorite.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  saveFavorite = (id) => {
    console.log(id + 'favorite saved! TEST from app.js')
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.favorite = !item.favorite
        }
        return item;
      })
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* greet user if logged in: */}
          {this.state.loggedIn &&
            <p>Join the party, {this.state.username}!</p>
          }
          {/* Routes to different components */}
          <Switch>
            <Route
              exact path="/adminhome"
              render={() => <AdminHomePage />}
            />
            <Route
              exact path="/manage"
              render={() => <ItemManagePage />}
            />
            <Route
              exact path="/update"
              render={() => <UpdateItemPage />}
            />
            <Route
              exact path="/"
              render={() =>
                <Items
                  items={this.state.items}
                  saveFavorite={this.saveFavorite}
                  isFeatured={this.isFeatured}
                />}
            />
            <Route
              path="/login"
              render={() =>
                <LoginForm
                  updateUser={this.updateUser}
                />}
            />
            <Route
              path="/signup"
              render={() =>
                <Signup />}
            />
            <Route
              path="/items"
              render={() =>
                <Items
                  items={this.state.items}
                  saveFavorite={this.saveFavorite}
                  isFeatured={this.isFeatured}
                />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;