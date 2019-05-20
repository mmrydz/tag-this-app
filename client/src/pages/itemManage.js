import React, { Component } from "react";
import {
  Input,
  CategoryInput,
  QualityInput
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
              />
            </div>
            <CategoryInput id="category-input" />
            <QualityInput id="quality-input" />
          </form>
        </div>
      </div>
    );
  }
}

export default ManageItemPage;
