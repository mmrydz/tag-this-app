import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class ManageItem extends Component {
  constructor() {
    super();
    this.state = {
      barcode: "",
      name: "",
      price: "",
      category: "",
      quality: "",
      featured: "",
      image: "",
      notes: ""
    };
  }

  submitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios
      .post(`/test-upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        // handle your response;
        console.log("it worked!", response);
      })
      .catch(error => {
        // handle your error
        console.log("it did not work", error);
      });
  };

  handleFileUpload = event => {
    this.setState({ file: event.target.files });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.submitFile}>
              <div className="form-title">
                <h2>Add Item Details</h2>
              </div>
              <div className="form-group">
                <label htmlFor="barcode-input">Barcode</label>
                <input
                  type="text"
                  className="form-control"
                  id="barcode-input"
                  aria-describedby="barcodeHelp"
                  placeholder="Enter barcode"
                  autoFocus
                />
                <small id="barcodeHelp" className="form-text text-muted">
                  Use the barcode scanner to add the barcode number
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="name-input">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name-input"
                  placeholder="Enter name"
                />
                <small id="nameHelp" className="form-text text-muted">
                  Be as descriptive as possible!
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="price-input">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="price-input"
                  placeholder="Enter price"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category-input">Category</label>
                <select className="form-control" id="category-input">
                  <option>Select Category</option>
                  <option value="Baby Furniture">Baby Furniture</option>
                  <option value="Bikes">Bikes</option>
                  <option value="Books">Books</option>
                  <option value="Boats">Boats</option>
                  <option value="Boutique">Boutique</option>
                  <option value="Cars">Cars</option>
                  <option value="Collectibles">Collectibles</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Housewares">Housewares</option>
                  <option value="Lawn Tools">Lawn Tools</option>
                  <option value="Linens">Linens</option>
                  <option value="Musical Instruments">
                    Musical Instruments
                  </option>
                  <option value="Outdoor Furniture">Outdoor Furniture</option>
                  <option value="Pictures/Artwork">Pictures/Artwork</option>
                  <option value="Rugs">Rugs</option>
                  <option value="Sporting Goods">Sporting Goods</option>
                  <option value="Tools">Tools</option>
                  <option value="Toys">Toys</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quality-input">Quality</label>
                <select className="form-control" id="quality-input">
                  <option>Select Quality</option>
                  <option>New</option>
                  <option>Great</option>
                  <option>Good</option>
                  <option>Poor</option>
                </select>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="featured-input"
                />
                <label className="form-check-label" htmlFor="featured-input">
                  Featured
                </label>
                <small id="featuredHelp" className="form-text text-muted">
                  Choose whether this item should be displayed as a featured
                  item
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="image-input">Add an image</label>
                <input
                  type="file"
                  className="form-control-file image-input"
                  id="image-input"
                  onChange={this.handleFileUpload}
                />
                <img src={this.state.fileUrl} alt="uploaded stuff" />
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
              <div className="row">
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
                <div className="col-sm-6">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <button className="btn btn-primary">
                    Save and Create New
                  </button>
                  <button className="btn btn-primary">
                    Save and Update Existing
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

export default ManageItem;
