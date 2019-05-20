import React, { Component } from "react";
import {
  Input,
  CategoryInput,
  QualityInput,
  FormBtn
} from "../components/ManageItem/newindex";

class ManageItemPage extends Component {
  state = {
    barcode: "",
    name: "",
    price: "10.00"
  };

  render() {
    return (
      <div className="container">
        <h3>THIS IS TEST TEXT!</h3>
        <div className="justify-content-center">
          <form>
            <Input
              type="text"
              // value={this.state.barcode}
              // onChange={this.handleInputChange}
              name="barcode"
              placeholder="Item Barcode"
            />
            <Input
              type="text"
              // value={this.state.name}
              // onChange={this.handleInputChange}
              name="itemName"
              placeholder="Item Name"
            />
            <div class="input-group">
              <span class="input-group-addon">$</span>
              <input
                type="number"
                placeholder="Enter price"
                min="0"
                step="0.01"
                data-number-to-fixed="2"
                data-number-stepfactor="100"
                class="form-control currency"
                id="price"
                // onChange={this.handleInputChange}
              />
            </div>
            <CategoryInput id="category-input" />
            <QualityInput id="quality-input" />
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="featured"
              />
              <label className="form-check-label" htmlFor="featured-input">
                Featured
              </label>
            </div>
            <div className="form-group">
              <label for="imagefile">Add an Image</label>
              <input
                type="file"
                className="form-control-file"
                id="imagefile"
                // onChange={this.handleFileUpload}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes-input">Notes</label>
              <textarea
                className="form-control"
                id="notes-input"
                rows="3"
                placeholder="Enter notes"
              />
            </div>
            <FormBtn type="button" className="btn btn-primary mr-1">
              Save{" "}
            </FormBtn>
            <FormBtn type="button" className="btn btn-primary mr-1">
              Save and Create New{" "}
            </FormBtn>
            <FormBtn type="button" className="btn btn-primary mt-1">
              Save and Update{" "}
            </FormBtn>
          </form>
        </div>
      </div>
    );
  }
}

export default ManageItemPage;
