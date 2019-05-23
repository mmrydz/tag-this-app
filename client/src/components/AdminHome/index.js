import React, { Component } from "react";
import "./style.css";

class AdminHome extends Component {
  goToCreateNew = () => (window.location.href = "/manage");
  goToUpdateExisting = () => (window.location.href = "/update");
  goToViewItems = () => (window.location.href = "/items");

  render() {
    return (
      <div className="container button-container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2>Options</h2>
            <button
              type="submit"
              className="btn-lg btn-primary"
              onClick={() => this.goToCreateNew()}
            >
              Create New Item
            </button>
            <button
              type="submit"
              className="btn-lg btn-primary"
              onClick={() => this.goToViewItems()}
            >
              View all items
            </button>
            <button
              type="submit"
              className="btn-lg btn-primary"
              onClick={() => this.goToUpdateExisting()}
            >
              Update Existing Items
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHome;
