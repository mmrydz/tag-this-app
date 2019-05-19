import React, { Component } from "react";
import "./style.css";

class AdminHome extends Component {

    goToCreateNew = () => window.location.href = "/manage";
    goToUpdateExisting = () => window.location.href = "/update";

    render() {
        return (
            <div className="container button-container">
                <h2>Options</h2>
                <div className="row">
                    <button type="submit" className="btn-lg btn-primary" onClick={() => this.goToCreateNew()}>Create New Item</button>
                </div>
                <div className="row">
                    <button type="submit" className="btn-lg btn-primary">View all items</button>
                </div>
                <div className="row">
                    <button type="submit" className="btn-lg btn-primary" onClick={() => this.goToUpdateExisting()}>Update Existing Items</button>
                </div>
            </div>
        );
    }
}

export default AdminHome;

