import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import itemManage from "./pages/itemManage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={itemManage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
