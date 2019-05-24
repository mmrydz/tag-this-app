import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";

class UpdateForm extends Component {
  // createNew = () => window.location.href="/adminhome";
  // goToUpdateItem = () => window.location.href = "/manage";
  state = {
    item: {},
    barcode: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

    goToUpdateItem = event => {
        // event.preventDefault();
        console.log(this.state.barcode);
        API.getItem(this.state.barcode)
        .then(res => {
            this.setState({ item: res.data });
            console.log(this.state.barcode);
            window.location.href= "/manage?item_id=" + this.state.barcode;
        })
        .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-title">
                <h2 className="text-center">Update Item</h2>
                <h5>Add the barcode of the item you wish to update</h5>
              </div>
              <div className="form-group">
                <label htmlFor="barcode-input">Barcode</label>
                <input
                  type="text"
                  className="form-control"
                  id="barcode-input"
                  aria-describedby="barcodeHelp"
                  placeholder="Enter barcode"
                  name="barcode"
                  value={this.state.barcode}
                  onChange={this.handleInputChange}
                  autoFocus
                />
                <small id="barcodeHelp" className="form-text text-muted">
                  Use the barcode scanner to add the barcode number
                </small>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.goToUpdateItem()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateForm;
