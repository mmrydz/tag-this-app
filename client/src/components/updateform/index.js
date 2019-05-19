import React, { Component } from "react";
import "./style.css";

class UpdateItem extends Component {

    // createNew = () => window.location.href="/adminhome";
    goToUpdateItem = () => window.location.href = "/manage";

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-sm-12">
                <form>
                    <div className="form-title">
                        <h2>Update Item</h2>
                        <h4>Add the barcode of the item you wish to update</h4>
                    </div>
                    <div className="form-group">
                        <label htmlFor="barcode-input">Barcode</label>
                        <input type="text" className="form-control" id="barcode-input" aria-describedby="barcodeHelp"
                            placeholder="Enter barcode" autoFocus></input>
                        <small id="barcodeHelp" className="form-text text-muted">Use the barcode scanner to add the barcode
                            number</small>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary" onClick={() => this.goToUpdateItem()}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
  }
}

export default UpdateItem;